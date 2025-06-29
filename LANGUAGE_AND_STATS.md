# Language Switching & Stats System Guide

## 🌍 Language Switching System

Your website now supports **Japanese (日本語)** and **English** with a toggle button in the header.

### How It Works

1. **Language Toggle Button**: Located in the header next to the theme toggle
   - 🇺🇸 English / 🇯🇵 日本語
   - Saves preference in browser localStorage
   - Automatically applies on page load

2. **Translation Files**:
   - `/lang/en.json` - English translations
   - `/lang/ja.json` - Japanese translations

3. **HTML Attributes**: Add `data-translate="key.path"` to any element
   ```html
   <h1 data-translate="home.hero.title">Welcome to My Digital Finance World</h1>
   ```

### Adding New Translations

1. **Add to translation files**:
   ```json
   // In en.json
   {
     "page": {
       "section": {
         "newText": "English text here"
       }
     }
   }
   
   // In ja.json  
   {
     "page": {
       "section": {
         "newText": "日本語テキストここ"
       }
     }
   }
   ```

2. **Add to HTML**:
   ```html
   <div data-translate="page.section.newText">English text here</div>
   ```

### Current Translation Status

✅ **Completed**:
- Navigation menu
- Homepage hero section
- About page stats labels
- Meta tags and SEO

🚧 **To Add**:
- All page content
- Book descriptions
- Blog content
- Contact form

---

## 📊 Stats System

The stats can be updated in **two ways**: manually or automatically.

### Option 1: Manual Updates (Current Setup)

**How it works**: You manually update numbers in the code when needed.

**To update stats**:
1. Open browser console on your website
2. Run this command:
   ```javascript
   window.statsManager.updateManualStats({
     publishedBooks: 7,        // New number of books
     noteArticles: 20,         // New number of Note articles
     noteFollowers: 25,        // New follower count
     pythonFocus: 35          // New percentage
   });
   ```

**Or edit the code directly**:
```javascript
// In js/stats.js, update these numbers:
this.manualStats = {
  publishedBooks: 6,    // ← Change this
  noteArticles: 16,     // ← Change this  
  pythonFocus: 31,      // ← Change this
  noteFollowers: 19     // ← Change this
};
```

### Option 2: Automatic Updates (Advanced)

**How it works**: Fetches real-time data from APIs.

**Available APIs**:
- ✅ **Qiita**: Public API available
- ❌ **Note.com**: No public API
- ❌ **Amazon**: No public sales API

**To enable automatic updates**:

1. **Enable Qiita API** (in `js/stats.js`):
   ```javascript
   this.apiEndpoints = {
     qiita: 'https://qiita.com/api/v2/users/danieltanaka'
   };
   ```

2. **Uncomment auto-update line**:
   ```javascript
   init() {
     this.displayStats();
     this.enableAutoUpdate(); // ← Uncomment this
   }
   ```

### API Limitations

| Platform | API Available | Rate Limits | Data Available |
|----------|---------------|-------------|----------------|
| **Qiita** | ✅ Yes | 1000/hour | Articles, followers, contributions |
| **Note.com** | ❌ No | - | Manual only |
| **Amazon** | ❌ No public API | - | Manual only |
| **X/Twitter** | 🔄 Paid only | Variable | Followers, posts |

### Recommended Approach

**For most users**: Use **Manual Updates**
- Simple and reliable
- No API dependencies  
- Easy to control
- Update when you publish new content

**For advanced users**: Use **Hybrid Approach**
- Manual for Note.com and Amazon
- Automatic for Qiita
- Custom web scraping for other platforms

---

## 🔧 Implementation Examples

### Adding Language to New Pages

1. **Copy language toggle to header**:
   ```html
   <button class="language-toggle" aria-label="Switch language">
       <span class="language-flag">🇺🇸</span>
       <span class="language-text">English</span>
   </button>
   ```

2. **Add translation attributes**:
   ```html
   <h1 data-translate="books.hero.title">My Books</h1>
   <p data-translate="books.hero.subtitle">Book description...</p>
   ```

3. **Include language script**:
   ```html
   <script src="js/language.js"></script>
   ```

### Adding New Stats

1. **Add to manual stats object**:
   ```javascript
   this.manualStats = {
     publishedBooks: 6,
     noteArticles: 16,
     newStat: 100  // ← Add new stat
   };
   ```

2. **Add HTML element with ID**:
   ```html
   <span class="stat-number" id="stat-new">100</span>
   ```

3. **Update display method**:
   ```javascript
   displayStats() {
     this.updateStatElement('stat-new', this.manualStats.newStat);
   }
   ```

---

## 🚀 Quick Setup Checklist

### Language System
- [ ] Language toggle appears in header
- [ ] Clicking toggle switches languages  
- [ ] Page content updates to Japanese/English
- [ ] Language preference saves in browser

### Stats System  
- [ ] Stats animate on page load
- [ ] Numbers display correctly
- [ ] Manual updates work via console
- [ ] Stats save to localStorage

### Testing
- [ ] Test language switching on all pages
- [ ] Verify Japanese characters display correctly
- [ ] Test stats updates
- [ ] Check mobile responsiveness

---

## 📝 Maintenance

### Monthly Tasks
1. **Update manual stats** when you publish new content
2. **Add translations** for new blog posts
3. **Check API status** if using automatic updates

### When Adding New Content
1. **Books**: Add to both language files
2. **Blog posts**: Create bilingual versions
3. **Stats**: Update manually or via console

### Performance Notes
- Translation files are cached after first load
- Stats animate smoothly with requestAnimationFrame
- Language preference persists across sessions
- System works offline with service worker

---

Need help? The language system is ready to use, and stats can be updated immediately through the browser console!