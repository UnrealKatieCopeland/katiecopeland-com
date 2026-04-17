/**
 * Katie Copeland, J.D. — Personal Brand Website
 * Main JavaScript
 * ============================================================
 * Handles: mobile navigation, sticky header, scroll animations,
 * contact form, and accessibility enhancements.
 * ============================================================
 */

(function () {
  'use strict';

  // ── Mobile Navigation ──────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isOpen);
      mobileNav.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';

      // Update button label
      menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    });

    // Close mobile nav when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-label', 'Open menu');
        menuToggle.focus();
      }
    });
  }

  // ── Sticky Header Shadow ───────────────────────────────────
  const header = document.querySelector('.site-header');

  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ── Scroll Animations (Intersection Observer) ──────────────
  const animateElements = document.querySelectorAll('.animate-in');

  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animateElements.forEach(function (el) {
      // Pause animation until element is in view
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    animateElements.forEach(function (el) {
      el.style.opacity = '1';
    });
  }

  // ── Contact Form Handling ──────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formStatus.style.display = 'block';
        formStatus.innerHTML = '<p style="color: var(--ember); font-weight: 600;">Please fill in all required fields.</p>';
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        formStatus.style.display = 'block';
        formStatus.innerHTML = '<p style="color: var(--ember); font-weight: 600;">Please enter a valid email address.</p>';
        return;
      }

      // Submit form
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.style.display = 'block';
            formStatus.innerHTML = '<p style="color: var(--teal); font-weight: 600; font-size: 1.05rem;">Thank you for your message. I\'ll be in touch soon.</p>';
            contactForm.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          formStatus.style.display = 'block';
          formStatus.innerHTML = '<p style="color: var(--ember); font-weight: 600;">Something went wrong. Please try again or email directly at <a href="mailto:katie@katiecopeland.com">katie@katiecopeland.com</a>.</p>';
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // ── Smooth Scroll for Anchor Links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // ── Decree Carousel ────────────────────────────────────────
  const decreeTrack = document.getElementById('decree-track');
  const decreePrev = document.getElementById('decree-prev');
  const decreeNext = document.getElementById('decree-next');
  const decreeDots = document.getElementById('decree-dots');

  if (decreeTrack && decreePrev && decreeNext && decreeDots) {
    const slides = decreeTrack.querySelectorAll('.decree-slide');
    let currentSlide = 0;

    // Create dots
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'decree-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to decree ' + (i + 1));
      dot.addEventListener('click', function () { goToSlide(i); });
      decreeDots.appendChild(dot);
    });

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentSlide = index;
      decreeTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      decreeTrack.style.transition = 'transform 0.4s ease';
      var dots = decreeDots.querySelectorAll('.decree-dot');
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === currentSlide);
      });
    }

    decreePrev.addEventListener('click', function () { goToSlide(currentSlide - 1); });
    decreeNext.addEventListener('click', function () { goToSlide(currentSlide + 1); });
  }

  // ── Current Year in Footer ─────────────────────────────────
  // (Already hardcoded to 2026, but this future-proofs it)
  const yearElements = document.querySelectorAll('[data-year]');
  yearElements.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
