// Progressive Web App (PWA) functionality
class PWAManager {
  constructor() {
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.handleInstallPrompt();
    this.setupOfflineHandling();
  }

  // Register service worker for caching
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('ServiceWorker registration successful:', registration);
      } catch (error) {
        console.log('ServiceWorker registration failed:', error);
      }
    }
  }

  // Handle PWA install prompt
  handleInstallPrompt() {
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Show install button (if you want to add one)
      this.showInstallButton(deferredPrompt);
    });

    // Handle the install button click
    this.setupInstallButton(deferredPrompt);
  }

  showInstallButton(deferredPrompt) {
    // You can create and show an install button here
    // For this basic implementation, we'll just log
    console.log('PWA install prompt available');
  }

  setupInstallButton(deferredPrompt) {
    const installButton = document.querySelector('.install-pwa-btn');
    if (installButton) {
      installButton.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
          });
        }
      });
    }
  }

  // Handle offline functionality
  setupOfflineHandling() {
    window.addEventListener('online', () => {
      this.updateOnlineStatus(true);
    });

    window.addEventListener('offline', () => {
      this.updateOnlineStatus(false);
    });

    // Check initial online status
    this.updateOnlineStatus(navigator.onLine);
  }

  updateOnlineStatus(isOnline) {
    const offlineIndicator = document.querySelector('.offline-indicator');
    
    if (!isOnline) {
      if (!offlineIndicator) {
        this.showOfflineIndicator();
      }
    } else {
      if (offlineIndicator) {
        offlineIndicator.remove();
      }
    }
  }

  showOfflineIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'offline-indicator';
    indicator.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #f39c12;
        color: white;
        text-align: center;
        padding: 8px;
        font-size: 14px;
        z-index: 9999;
      ">
        You're currently offline. Some features may be limited.
      </div>
    `;
    document.body.appendChild(indicator);
  }
}

// Initialize PWA functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PWAManager();
});