class StatsManager {
  constructor() {
    this.apiEndpoints = {
      // You can enable these when you want automatic updates
      note: null, // 'https://note.com/api/v2/creators/daniel_tanaka_x/stats', // Example - Note.com doesn't provide public API
      qiita: null, // 'https://qiita.com/api/v2/users/danieltanaka', // Qiita API
      amazon: null // Amazon doesn't provide public sales API
    };
    
    // Manual stats - update these numbers manually
    this.manualStats = {
      publishedBooks: 6,
      noteArticles: 16,
      pythonFocus: 31,
      noteFollowers: 19,
      // Add more stats as needed
      qiitaContributions: 0,
      amazonReviews: 0
    };
    
    this.init();
  }

  init() {
    this.displayStats();
    // Uncomment the line below if you want to enable automatic updates
    // this.enableAutoUpdate();
  }

  // Manual stats update method
  displayStats() {
    this.updateStatElement('stat-books', this.manualStats.publishedBooks, '+');
    this.updateStatElement('stat-articles', this.manualStats.noteArticles);
    this.updateStatElement('stat-python', this.manualStats.pythonFocus, '%');
    this.updateStatElement('stat-followers', this.manualStats.noteFollowers);
  }

  updateStatElement(elementId, value, suffix = '') {
    const element = document.getElementById(elementId);
    if (element) {
      // Animate the number counting up
      this.animateNumber(element, 0, value, 1000, suffix);
    }
  }

  animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    const range = end - start;

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (range * easedProgress));
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    requestAnimationFrame(updateNumber);
  }

  // Automatic stats update method (for future use)
  async enableAutoUpdate() {
    try {
      // Example of how to fetch from APIs when available
      if (this.apiEndpoints.qiita) {
        const qiitaStats = await this.fetchQiitaStats();
        if (qiitaStats) {
          this.updateStatElement('stat-qiita', qiitaStats.contributions);
        }
      }
      
      // Set up periodic updates (e.g., every hour)
      setInterval(() => {
        this.fetchAllStats();
      }, 3600000); // 1 hour
      
    } catch (error) {
      console.log('Auto-update not available, using manual stats');
    }
  }

  async fetchQiitaStats() {
    try {
      if (!this.apiEndpoints.qiita) return null;
      
      const response = await fetch(this.apiEndpoints.qiita);
      const data = await response.json();
      
      return {
        contributions: data.contributions_count || 0,
        followers: data.followers_count || 0,
        items: data.items_count || 0
      };
    } catch (error) {
      console.error('Error fetching Qiita stats:', error);
      return null;
    }
  }

  async fetchNoteStats() {
    // Note.com doesn't provide public API
    // This would need to be implemented with web scraping or manual updates
    return null;
  }

  async fetchAllStats() {
    // Fetch from all available APIs
    const stats = await Promise.allSettled([
      this.fetchQiitaStats(),
      this.fetchNoteStats()
    ]);
    
    // Update display with new stats
    stats.forEach((stat, index) => {
      if (stat.status === 'fulfilled' && stat.value) {
        // Update specific stats based on source
      }
    });
  }

  // Method to manually update stats (call this when you have new numbers)
  updateManualStats(newStats) {
    this.manualStats = { ...this.manualStats, ...newStats };
    this.displayStats();
    
    // Save to localStorage for persistence
    localStorage.setItem('danieltanaka_stats', JSON.stringify(this.manualStats));
  }

  // Load stats from localStorage if available
  loadSavedStats() {
    const saved = localStorage.getItem('danieltanaka_stats');
    if (saved) {
      try {
        this.manualStats = { ...this.manualStats, ...JSON.parse(saved) };
      } catch (error) {
        console.error('Error loading saved stats:', error);
      }
    }
  }

  // Method to get current stats
  getCurrentStats() {
    return this.manualStats;
  }
}

// Initialize stats manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.statsManager = new StatsManager();
});

// Example of how to update stats manually:
// window.statsManager.updateManualStats({
//   publishedBooks: 7,
//   noteArticles: 20,
//   noteFollowers: 25
// });