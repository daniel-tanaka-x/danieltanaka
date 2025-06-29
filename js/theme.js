class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme();
    this.bindEvents();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateToggleIcon();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  updateToggleIcon() {
    const toggleButton = document.querySelector('.theme-toggle');
    const icon = toggleButton?.querySelector('.theme-toggle__icon');
    
    if (icon) {
      if (this.theme === 'dark') {
        icon.innerHTML = `
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        `;
      } else {
        icon.innerHTML = `
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        `;
      }
    }
  }

  bindEvents() {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});