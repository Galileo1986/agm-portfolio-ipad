# AGM Portfolio — iPad Version

This is the iPad-optimized version of the Atelier Galileo Morandi portfolio, designed specifically for **iPad Pro landscape** client presentations.

## Features

✅ **iPad Pro landscape optimized** (1200-1400px width)
✅ **Touch-friendly** navigation (44x44px minimum touch targets)
✅ **PWA-enabled** for "Add to Home Screen" full-screen app experience
✅ **Swipe gestures** to navigate between projects
✅ **Google Drive images** for easy cloud management
✅ **No browser chrome** when installed as app

## Setup Instructions

### 1. Update Image URLs to Google Drive

All images need to be replaced with Google Drive links. Here's how:

1. **Organize images in Google Drive:**
   - Create folders matching your project structure
   - Upload all project images

2. **Make images publicly accessible:**
   - Right-click each image → "Get link"
   - Set to "Anyone with the link can view"

3. **Get the Google Drive image URL:**
   - Copy the sharing link (looks like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)
   - Extract the `FILE_ID`
   - Use this format: `https://drive.google.com/uc?export=view&id=FILE_ID`

4. **Update `data-ipad.js`:**
   - Replace all `images/...` paths with your Google Drive URLs
   - Example:
     ```javascript
     image: {
       src: 'https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9',
       alt: 'Project name — description'
     }
     ```

### 2. Host on GitHub Pages

1. **Create a new GitHub repository:**
   - Name it something like `agm-portfolio-ipad`
   - Make it public (GitHub Pages requires public repos for free hosting)

2. **Upload the iPad folder contents:**
   - Push all files from the `ipad/` folder to the repo root
   - Structure should be:
     ```
     /
     ├── index.html
     ├── project.html
     ├── manifest.json
     ├── README.md
     ├── css/
     │   └── styles-ipad.css
     ├── js/
     │   ├── main.js
     │   └── project-detail.js
     └── data-ipad.js
     ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch `main`
   - Your site will be at: `https://yourusername.github.io/agm-portfolio-ipad/`

### 3. Install on iPad

1. **Open Safari on your iPad**
2. **Navigate to your GitHub Pages URL**
3. **Tap the Share button** (square with arrow)
4. **Tap "Add to Home Screen"**
5. **Name it** (e.g., "AGM Portfolio")
6. **Tap "Add"**

Now you have a full-screen app icon on your home screen!

## Using the Portfolio

### Homepage
- Shows a grid of all projects
- Tap any project to view details

### Project Detail
- Swipe left/right to navigate between projects
- Tap "BACK" to return to grid
- Use "PREVIOUS" / "NEXT" buttons at bottom

### Presentation Tips
- **Landscape orientation** works best (iPad Pro horizontal)
- **Works offline** after first load (PWA caching)
- **Pinch-zoom** works on gallery images
- Keep iPad charged for client meetings!

## File Structure

```
ipad/
├── index.html              # Homepage (projects grid)
├── project.html            # Project detail page
├── manifest.json           # PWA configuration
├── data-ipad.js           # Project data (UPDATE IMAGE URLs HERE)
├── css/
│   └── styles-ipad.css    # iPad-optimized styles
└── js/
    ├── main.js            # Core functionality
    └── project-detail.js  # Project detail logic
```

## Customization

### Adjust Spacing
Edit `styles-ipad.css`:
- `--pad-horizontal: 100px;` — Side padding
- `--gallery-pad: 120px;` — Gallery side padding
- `--gap: 40px;` — Gap between gallery images

### Change Touch Target Size
Edit `styles-ipad.css`:
- `--touch-min: 44px;` — Minimum touch target size

### Disable Swipe Navigation
Edit `js/project-detail.js`:
- Comment out the `setupSwipeNavigation()` call

## Troubleshooting

**Images not loading?**
- Check that Google Drive links are set to "Anyone with link can view"
- Verify the URL format: `https://drive.google.com/uc?export=view&id=FILE_ID`
- Test URLs individually in browser

**PWA not installing?**
- Must be served over HTTPS (GitHub Pages does this automatically)
- Must be opened in Safari (not Chrome on iOS)
- Manifest.json must be valid JSON

**Layout looks wrong?**
- Ensure iPad is in **landscape** orientation
- Optimized for iPad Pro 11" and 12.9" (1200-1400px width)

## Updates

To update the portfolio:
1. Edit `data-ipad.js` with new projects/images
2. Push changes to GitHub
3. Refresh the app on iPad (pull down to reload)

---

**Questions?** Review the code comments in each file for detailed explanations.
