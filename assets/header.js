/**
 * Header module - Generates and inserts headers for all pages
 * Supports both standard navbar and git.html's custom site-header
 */

(function() {
  'use strict';

  // Configuration for different header types
  const headerConfigs = {
    // Standard navbar (used by most pages)
    navbar: {
      type: 'navbar',
      brand: {
        href: 'index.html',
        badge: 'B',
        text: 'Berghs Class'
      },
      links: [
        { href: 'html.html', text: 'HTML' },
        { href: 'css.html', text: 'CSS' },
        { href: 'javascript.html', text: 'JavaScript' },
        { href: 'frameworks.html', text: 'Frameworks' },
        { href: 'backend.html', text: 'Backend' },
        { href: 'git.html', text: 'Git' },
        { href: 'finalproject.html', text: 'Final Project' }
      ],
      extraLinks: [] // Can be used to add extra links like "Get Started" button
    },
    // Custom header for git.html
    siteHeader: {
      type: 'site-header',
      brand: {
        href: '#top',
        logo: 'assets/logo.png',
        title: 'GitHub 101',
        subtitle: 'Understand, collaborate, and ship code.'
      },
      links: [
        { href: '#what', text: 'What' },
        { href: '#how', text: 'How' },
        { href: '#concepts', text: 'Concepts' },
        { href: '#workflow', text: 'Workflow' },
        { href: '#git-vs-github', text: 'Git vs GitHub' },
        { href: '#quiz', text: 'Quiz' }
      ]
    }
  };

  /**
   * Get current page filename from window location
   */
  function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    return filename;
  }

  /**
   * Check if a link matches the current page
   */
  function isCurrentPage(href) {
    const currentPage = getCurrentPage();
    // For hash links (like #what), check if we're on git.html
    if (href.startsWith('#')) {
      return currentPage === 'git.html';
    }
    // For file links, check if the href matches current page
    return href === currentPage || (href === 'index.html' && currentPage === 'index.html');
  }

  /**
   * Generate standard navbar HTML
   */
  function generateNavbar(config, currentPage) {
    const brandCurrent = isCurrentPage(config.brand.href) ? ' aria-current="page"' : '';
    const brandHtml = `
        <a class="brand" href="${config.brand.href}"${brandCurrent}>
          <span class="brand-badge">${config.brand.badge}</span>
          <span>${config.brand.text}</span>
        </a>`;

    const linksHtml = config.links.map(link => {
      const current = isCurrentPage(link.href) ? ' aria-current="page"' : '';
      return `          <li><a href="${link.href}"${current}>${link.text}</a></li>`;
    }).join('\n');

    const extraLinksHtml = config.extraLinks.map(link => {
      const current = isCurrentPage(link.href) ? ' aria-current="page"' : '';
      const classes = link.class ? ` class="${link.class}"` : '';
      return `          <li><a href="${link.href}"${classes}${current}>${link.text}</a></li>`;
    }).join('\n');

    return `
    <header class="navbar">
      <div class="container">
${brandHtml}
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
        <ul class="nav-links">
${linksHtml}${extraLinksHtml ? '\n' + extraLinksHtml : ''}
        </ul>
      </div>
    </header>`;
  }

  /**
   * Generate site-header HTML (for git.html)
   */
  function generateSiteHeader(config) {
    const brandHtml = `
        <a class="brand" href="${config.brand.href}">
          <img src="${config.brand.logo}" alt="Site logo" width="36" height="36" />
          <span class="brand-title">
            <strong>${config.brand.title}</strong>
            <span>${config.brand.subtitle}</span>
          </span>
        </a>`;

    const linksHtml = config.links.map(link => {
      // For git.html, we'll use JavaScript to set aria-current based on scroll position
      // (as the existing script does), so we don't set it here
      return `          <a href="${link.href}">${link.text}</a>`;
    }).join('\n');

    return `
    <header class="site-header" role="banner">
      <div class="container header-inner">
${brandHtml}
        <nav aria-label="Primary">
${linksHtml}
        </nav>
      </div>
    </header>`;
  }

  /**
   * Initialize header based on page configuration
   */
  function initHeader() {
    const currentPage = getCurrentPage();
    const headerContainer = document.getElementById('header-container');
    
    if (!headerContainer) {
      console.warn('Header container not found');
      return;
    }

    let config;
    let html;

    // Determine which header type to use
    if (currentPage === 'git.html') {
      config = headerConfigs.siteHeader;
      html = generateSiteHeader(config);
    } else {
      config = headerConfigs.navbar;
      
      // Add extra "About Rasmus" link for javascript.html and about-rasmus.html
      if (currentPage === 'javascript.html' || currentPage === 'about-rasmus.html') {
        config.extraLinks = [
          { href: 'about-rasmus.html', text: 'About Rasmus', class: 'btn btn-primary' }
        ];
      }
      
      html = generateNavbar(config, currentPage);
    }

    // Insert the header HTML
    headerContainer.innerHTML = html;

    // Initialize nav-toggle functionality if navbar is present
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        links.classList.toggle('is-open', open);
      }

      toggle.addEventListener('click', function() {
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        setOpen(open);
      });

      // Close menu when a link is clicked (mobile)
      links.addEventListener('click', function(ev) {
        if (ev.target && ev.target.matches('a')) {
          setOpen(false);
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
})();

