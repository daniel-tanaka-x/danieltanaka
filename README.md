# Author Portfolio Website

A modern, responsive static website for showcasing an author's portfolio, books, and blog posts. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy deployment.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Virtual Bookshelf**: Interactive grid showcasing published books with Amazon integration
- **Blog System**: Clean blog layout ready for content and sponsored articles
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **SEO Optimized**: Proper meta tags, semantic HTML, and sitemap
- **PWA Ready**: Progressive Web App features for enhanced user experience
- **Contact Forms**: Functional contact forms with validation
- **Social Media Integration**: Links and sharing capabilities
- **Fast Loading**: Optimized for Core Web Vitals and performance

## 📁 Project Structure

```
├── index.html              # Homepage
├── books.html              # Virtual bookshelf page
├── blog.html               # Blog listing page
├── about.html              # Author biography page
├── contact.html            # Contact page with forms
├── css/
│   ├── main.css           # Main stylesheet (imports all others)
│   ├── variables.css      # CSS custom properties
│   ├── base.css          # Reset and base styles
│   └── components.css    # Component styles
├── js/
│   ├── main.js           # Main application logic
│   ├── theme.js          # Dark/light theme functionality
│   ├── navigation.js     # Navigation and mobile menu
│   └── pwa.js           # Progressive Web App features
├── blog/
│   └── character-development.html  # Sample blog post
├── assets/               # Images, icons, and media files
├── manifest.json        # PWA manifest
├── sw.js               # Service worker for offline functionality
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for search engines
└── package.json        # Project configuration
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Navigate** to the project directory
3. **Start a local server**:
   ```bash
   # Using Python (if installed)
   npm run start
   # or
   python -m http.server 8000
   
   # Using Node.js live-server (if installed)
   npx live-server
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```
4. **Open** your browser to `http://localhost:8000`

### Customization

1. **Replace placeholder content** in all HTML files:
   - Update "Author Name" with the actual author name
   - Replace placeholder images with actual photos and book covers
   - Update social media links
   - Customize color scheme in `css/variables.css`

2. **Add real book data** in `books.html`:
   - Replace placeholder book covers
   - Update book descriptions, prices, and Amazon links
   - Add more books as needed

3. **Update contact information** in `contact.html`:
   - Replace email addresses with real ones
   - Set up form handling (see Deployment section)

4. **Create blog content**:
   - Use `blog/character-development.html` as a template
   - Add new blog posts to the `blog/` directory
   - Update the blog listing in `blog.html`

## 🌍 Deployment

### Render.com (Recommended)

1. **Create a Render account** at [render.com](https://render.com)
2. **Connect your repository** (GitHub, GitLab, etc.)
3. **Create a new Static Site** service
4. **Configure the deployment**:
   - **Build Command**: Leave empty (no build process needed)
   - **Publish Directory**: `/` (root directory)
   - **Auto Deploy**: Enable for automatic updates
5. **Custom Domain** (optional): Add your domain in the settings

### Netlify

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Connect your repository** or drag and drop the project folder
3. **Deploy settings**:
   - **Build Command**: Leave empty
   - **Publish Directory**: `/`
4. **Configure custom domain** if needed

### Vercel

1. **Create a Vercel account** at [vercel.com](https://vercel.com)
2. **Import your repository**
3. **Deploy with default settings** (no configuration needed)

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to deploy from root directory
3. **Access** your site at `https://yourusername.github.io/repository-name`

### Other Static Hosting Providers

This website works with any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Cloudflare Pages

## 📧 Contact Form Setup

The contact forms are currently set up for demonstration. To make them functional:

### Option 1: Netlify Forms (if hosting on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Replace form action with your Formspree endpoint:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add EmailJS JavaScript library
3. Configure email templates and service

## 🎨 Customization Guide

### Colors and Theming

Edit `css/variables.css` to customize the color scheme:

```css
:root {
  --primary-color: #2c3e50;     /* Main text color */
  --secondary-color: #3498db;   /* Accent color */
  --accent-color: #e74c3c;      /* Highlight color */
  /* ... more variables */
}
```

### Fonts

The website uses Google Fonts (Inter + Playfair Display). To change fonts:
1. Update the Google Fonts import in `css/main.css`
2. Modify font family variables in `css/variables.css`

### Layout and Spacing

Adjust spacing and layout variables in `css/variables.css`:
- `--spacing-*`: Controls spacing throughout the site
- `--container-max-width`: Maximum content width
- `--border-radius-*`: Rounded corner sizes

### Adding New Pages

1. **Create new HTML file** using existing pages as templates
2. **Update navigation** in all existing pages
3. **Add to sitemap.xml** for SEO
4. **Update PWA cache** in `sw.js` if using offline features

## 📱 Progressive Web App Features

The website includes PWA capabilities:
- **Offline browsing** with service worker caching
- **Install prompt** for mobile/desktop installation
- **App-like experience** when installed
- **Fast loading** with intelligent caching

To test PWA features:
1. Deploy to HTTPS (required for PWA)
2. Open in Chrome/Edge
3. Look for install prompt
4. Test offline functionality

## 🔍 SEO Features

- **Semantic HTML5** structure
- **Open Graph** meta tags for social sharing
- **Twitter Card** meta tags
- **Structured data** ready (can be extended)
- **Sitemap.xml** for search engines
- **Robots.txt** for crawler directives
- **Fast loading** for better rankings

## 🧪 Testing

### Performance Testing
- Use Google PageSpeed Insights
- Test Core Web Vitals
- Check mobile-friendliness

### Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast compliance

## 📦 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful degradation** for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Ensure HTTPS is enabled for PWA features
4. Test on multiple devices and browsers

For additional help, please open an issue in the repository.

---

**Built with ❤️ for authors who want to showcase their work beautifully online.**