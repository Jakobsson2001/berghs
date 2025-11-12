/**
 * Footer module - Generates and inserts footers for all pages
 */

(function() {
  'use strict';

  /**
   * Generate footer HTML
   */
  function generateFooter() {
    const currentYear = new Date().getFullYear();
    return `
    <footer role="contentinfo">
      <div class="container">
        <p>&copy; ${currentYear} Berghs Class</p>
      </div>
    </footer>`;
  }

  /**
   * Initialize footer
   */
  function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    if (!footerContainer) {
      console.warn('Footer container not found');
      return;
    }

    const html = generateFooter();
    footerContainer.innerHTML = html;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();

