class NavigationManager {
  constructor() {
    this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    this.navList = document.querySelector('.nav__list');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.init();
  }

  init() {
    this.bindEvents();
    this.setActiveLink();
    this.handleScrollHeader();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.mobileMenuToggle) {
      this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Handle scroll for header styling
    window.addEventListener('scroll', () => this.handleScrollHeader());

    // Handle window resize
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMobileMenu() {
    if (this.navList) {
      this.navList.classList.toggle('nav__list--open');
      this.mobileMenuToggle.classList.toggle('mobile-menu-toggle--open');
    }
  }

  closeMobileMenu() {
    if (this.navList) {
      this.navList.classList.remove('nav__list--open');
      this.mobileMenuToggle.classList.remove('mobile-menu-toggle--open');
    }
  }

  handleResize() {
    if (window.innerWidth > 768) {
      this.closeMobileMenu();
    }
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('nav__link--active');
      
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === 'index.html' && href === '/')) {
        link.classList.add('nav__link--active');
      }
    });
  }

  handleScrollHeader() {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }
  }
}

// Smooth scroll for anchor links
function smoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager();
  smoothScroll();
});