# Katie Copeland, J.D. — Personal Brand Website

This repository contains the source code for the personal brand website of Katie Copeland, J.D. — a disability rights attorney, author, scholar, advocate, and speaker.

The site is built with a "Warm Modernist Manifesto" aesthetic, focusing on editorial minimalism, strategic maximalism, and strict adherence to WCAG 2.1 AA accessibility standards (including brain injury-friendly design choices like high-contrast elements and larger typography).

## Project Structure

```
katiecopeland.com/
├── index.html              # Home page
├── css/
│   └── style.css           # Global stylesheet and design system
├── js/
│   └── main.js             # Shared JavaScript (navigation, forms, etc.)
├── pages/
│   ├── about.html          # About Katie and her approach
│   ├── publications.html   # Books, articles, and frameworks
│   ├── speaking.html       # Speaking topics and booking
│   ├── contact.html        # Contact form and information
│   ├── blog.html           # (Hidden) Blog template
│   └── podcast.html        # (Hidden) Podcast template
└── assets/
    └── images/             # Logos, headshots, and graphics
```

## Design System

- **Primary Colors:** Teal (`#1A7C72`), Warm Parchment (`#F5F1EB`), Ember/Copper (`#C4622D`)
- **Typography:** Cormorant Garamond (Headers), Source Sans 3 (Body)
- **Accessibility:** High contrast ratios, clear focus states, semantic HTML5 landmarks, skip links, and ARIA attributes.

## How to Enable Hidden Pages (Blog & Podcast)

The Blog and Podcast pages are fully built but currently hidden from the navigation menus. When you are ready to launch them:

1. Open every `.html` file (`index.html`, `pages/about.html`, etc.).
2. Locate the navigation sections (`<nav class="main-nav">` and `<nav class="mobile-nav">`).
3. Find the commented-out list items:
   ```html
   <!-- BLOG: Uncomment when ready
   <li><a href="pages/blog.html">Blog</a></li>
   -->
   ```
4. Remove the `<!--` and `-->` tags to make the link active.
5. Save the files and commit the changes.

## Form Integration

The Contact page uses a standard HTML form designed to work with serverless form handlers like [Formspree](https://formspree.io), Netlify Forms, or Basin.

To activate the form:
1. Create an account with Formspree (or your preferred provider).
2. Create a new form to get an endpoint URL.
3. Open `pages/contact.html`.
4. Replace `YOUR_FORM_ID` in the `<form action="https://formspree.io/f/YOUR_FORM_ID">` tag with your actual endpoint.

## Deployment on GitHub Pages

This site is designed as a static HTML/CSS/JS project, making it perfect for free hosting on GitHub Pages.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account.
2. Create a new repository named `katiecopeland.com` (or `yourusername.github.io`).
3. Do not initialize it with a README, .gitignore, or license (leave it empty).

### Step 2: Push the Code
Upload these files to your new repository using Git:

```bash
cd katiecopeland.com
git init
git add .
git commit -m "Initial commit: Katie Copeland personal website"
git branch -M main
git remote add origin https://github.com/yourusername/katiecopeland.com.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and `/ (root)`.
5. Click **Save**.
6. GitHub will take a minute or two to build the site. Once done, it will display a link to your live site.

### Step 4: Custom Domain Setup
To use the custom domain `katiecopeland.com`:
1. In the **Settings > Pages** section of your repository, scroll down to **Custom domain**.
2. Enter `katiecopeland.com` and click **Save**. (This will create a `CNAME` file in your repository).
3. Go to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
4. Update the DNS settings to point to GitHub:
   - Add **A records** pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a **CNAME record** for `www` pointing to `yourusername.github.io`.
5. Wait for DNS to propagate (can take up to 24-48 hours, but usually much faster).
6. Back in GitHub **Settings > Pages**, check the **Enforce HTTPS** box to secure your site.

## Maintenance

- To update content, simply edit the corresponding `.html` file.
- To update styles, edit `css/style.css`.
- All changes pushed to the `main` branch will automatically deploy to the live site.
