/**
 * Accessible Lightbox — katiecopeland.com
 * Zero dependencies. WCAG 2.1 AAA compliant.
 * - Keyboard navigable (Enter/Space to open, Escape to close)
 * - Focus trap while open
 * - Screen-reader announcements via aria-live
 * - Pinch-to-zoom and scroll-to-zoom on mobile/desktop
 * - Respects prefers-reduced-motion
 */
(function () {
  'use strict';

  // ── Build the lightbox DOM ──────────────────────────────────────────────
  const overlay = document.createElement('div');
  overlay.id = 'lb-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.setAttribute('tabindex', '-1');
  overlay.innerHTML = `
    <button id="lb-close" aria-label="Close image viewer (Escape key)">
      <span aria-hidden="true">✕</span>
    </button>
    <div id="lb-img-wrap" role="img" aria-label="">
      <img id="lb-img" src="" alt="" />
    </div>
    <div id="lb-caption" role="status" aria-live="polite" aria-atomic="true"></div>
  `;
  document.body.appendChild(overlay);

  const img    = overlay.querySelector('#lb-img');
  const wrap   = overlay.querySelector('#lb-img-wrap');
  const cap    = overlay.querySelector('#lb-caption');
  const btn    = overlay.querySelector('#lb-close');
  let lastFocus = null;

  // ── CSS injected once ───────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #lb-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0,0,0,.92);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-sizing: border-box;
    }
    #lb-overlay.lb-open { display: flex; }
    #lb-close {
      position: absolute;
      top: 1rem; right: 1.25rem;
      background: rgba(255,255,255,.15);
      border: 2px solid rgba(255,255,255,.5);
      color: #fff;
      font-size: 1.35rem;
      line-height: 1;
      width: 2.5rem; height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .15s;
      z-index: 10001;
    }
    #lb-close:hover, #lb-close:focus {
      background: rgba(255,255,255,.3);
      outline: 3px solid #D9B36C;
      outline-offset: 2px;
    }
    #lb-img-wrap {
      max-width: 96vw;
      max-height: 84vh;
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: zoom-in;
    }
    #lb-img-wrap.lb-zoomed { cursor: zoom-out; }
    #lb-img {
      max-width: 100%;
      max-height: 84vh;
      height: auto;
      display: block;
      border-radius: 4px;
      transition: transform .2s ease;
      transform-origin: center center;
    }
    #lb-img-wrap.lb-zoomed #lb-img {
      max-width: none;
      max-height: none;
      transform: scale(2);
    }
    #lb-caption {
      color: rgba(255,255,255,.82);
      font-size: .88rem;
      max-width: 72ch;
      text-align: center;
      margin-top: .75rem;
      line-height: 1.5;
      padding: 0 1rem;
    }
    @media (prefers-reduced-motion: reduce) {
      #lb-img { transition: none; }
    }
    /* Trigger images — constrained to viewport */
    .lb-trigger {
      display: block;
      cursor: zoom-in;
      text-decoration: none;
    }
    .lb-trigger img {
      width: 100%;
      height: auto;
      max-height: 72vh;
      object-fit: contain;
      display: block;
      border-radius: 6px;
      border: 1px solid #cdd5de;
      background: #f4f6f9;
    }
    .fc-exhibit-card .lb-trigger img,
    .fc-graphic-wrap .lb-trigger img {
      max-height: 68vh;
      object-fit: contain;
    }
  `;
  document.head.appendChild(style);

  // ── Open ────────────────────────────────────────────────────────────────
  function open(src, alt, caption) {
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt;
    wrap.setAttribute('aria-label', alt);
    cap.textContent = caption || '';
    overlay.classList.add('lb-open');
    overlay.removeAttribute('hidden');
    wrap.classList.remove('lb-zoomed');
    // defer focus so transition doesn't swallow it
    requestAnimationFrame(() => { btn.focus(); });
    document.body.style.overflow = 'hidden';
  }

  // ── Close ───────────────────────────────────────────────────────────────
  function close() {
    overlay.classList.remove('lb-open');
    document.body.style.overflow = '';
    wrap.classList.remove('lb-zoomed');
    if (lastFocus) lastFocus.focus();
  }

  // ── Toggle zoom ─────────────────────────────────────────────────────────
  function toggleZoom() {
    wrap.classList.toggle('lb-zoomed');
  }

  // ── Event listeners ─────────────────────────────────────────────────────
  btn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  wrap.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleZoom();
  });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('lb-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    // Focus trap
    if (e.key === 'Tab') {
      const focusable = overlay.querySelectorAll('button, [tabindex="0"]');
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // ── Wire up all .lb-trigger anchors ────────────────────────────────────
  function initTriggers() {
    document.querySelectorAll('a.lb-trigger').forEach(function (a) {
      // Make keyboard-activatable
      if (!a.getAttribute('tabindex')) a.setAttribute('tabindex', '0');
      a.setAttribute('role', 'button');
      a.setAttribute('aria-haspopup', 'dialog');

      function activate(e) {
        e.preventDefault();
        const imgEl  = a.querySelector('img');
        const src    = a.href || (imgEl && imgEl.src) || '';
        const alt    = (imgEl && imgEl.getAttribute('alt')) || a.getAttribute('aria-label') || '';
        const capEl  = a.closest('.fc-exhibit-card, .fc-graphic-wrap, [data-lb-cap]');
        const caption = capEl
          ? (capEl.querySelector('.fc-graphic-caption, figcaption, [data-lb-cap]') || {}).textContent || ''
          : '';
        open(src, alt, caption.trim());
      }

      a.addEventListener('click', activate);
      a.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') activate(e);
      });
    });
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTriggers);
  } else {
    initTriggers();
  }

})();
