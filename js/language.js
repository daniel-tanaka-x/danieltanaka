class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translations = {};
    this.init();
  }

  async init() {
    await this.loadTranslations();
    this.applyLanguage();
    this.bindEvents();
  }

  async loadTranslations() {
    try {
      // Load English translations
      const enResponse = await fetch('/lang/en.json');
      const enData = await enResponse.json();
      this.translations.en = enData;

      // Load Japanese translations
      const jaResponse = await fetch('/lang/ja.json');
      const jaData = await jaResponse.json();
      this.translations.ja = jaData;
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to English if translations fail to load
      this.currentLang = 'en';
    }
  }

  applyLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      
      if (translation) {
        if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
          element.placeholder = translation;
        } else if (element.hasAttribute('aria-label')) {
          element.setAttribute('aria-label', translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update meta tags
    this.updateMetaTags();
    
    // Update language toggle button
    this.updateLanguageToggle();
    
    // Update document language
    document.documentElement.lang = this.currentLang;
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  }

  updateMetaTags() {
    const translations = this.translations[this.currentLang];
    if (!translations || !translations.meta) return;

    // Update title
    if (translations.meta.title) {
      document.title = translations.meta.title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations.meta.description) {
      metaDescription.setAttribute('content', translations.meta.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && translations.meta.ogTitle) {
      ogTitle.setAttribute('content', translations.meta.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && translations.meta.ogDescription) {
      ogDescription.setAttribute('content', translations.meta.ogDescription);
    }
  }

  updateLanguageToggle() {
    const toggleButton = document.querySelector('.language-toggle');
    if (toggleButton) {
      const flag = toggleButton.querySelector('.language-flag');
      const text = toggleButton.querySelector('.language-text');
      
      if (this.currentLang === 'ja') {
        if (flag) flag.textContent = '🇯🇵';
        if (text) text.textContent = '日本語';
      } else {
        if (flag) flag.textContent = '🇺🇸';
        if (text) text.textContent = 'English';
      }
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ja' : 'en';
    localStorage.setItem('language', this.currentLang);
    this.applyLanguage();
  }

  bindEvents() {
    const toggleButton = document.querySelector('.language-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleLanguage());
    }
  }

  // Method to get current language
  getCurrentLanguage() {
    return this.currentLang;
  }

  // Method to set language programmatically
  setLanguage(lang) {
    if (lang === 'en' || lang === 'ja') {
      this.currentLang = lang;
      localStorage.setItem('language', this.currentLang);
      this.applyLanguage();
    }
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});