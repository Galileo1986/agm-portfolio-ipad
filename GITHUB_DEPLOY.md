# GitHub Pages Deployment Guide

## ⚡ Quick Deploy (5-10 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `agm-portfolio-ipad` (or any name you like)
3. Description: "AGM Portfolio for iPad — Client Presentations"
4. **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click "Create repository"

### Step 2: Initialize Git and Push

Open terminal in the `ipad/` folder:

```bash
# Navigate to ipad folder
cd "g:\My Drive\001_Atelier Galileo\009_AntiGravity\04_AG Website\ipad"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: AGM Portfolio for iPad"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/agm-portfolio-ipad.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 3: Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR_USERNAME/agm-portfolio-ipad`
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

GitHub will deploy your site!

### Step 4: Get Your URL

After 1-2 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/agm-portfolio-ipad/
```

---

## 📱 Install on iPad

1. **Open Safari** on your iPad (must be Safari, not Chrome)
2. **Navigate** to your GitHub Pages URL
3. **Tap the Share button** (square with arrow pointing up)
4. **Tap "Add to Home Screen"**
5. **Name it**: "AGM Portfolio"
6. **Tap "Add"**

Done! You now have a full-screen app on your iPad.

---

## 🔄 Update the Portfolio

When you want to add/change projects:

```bash
cd "g:\My Drive\001_Atelier Galileo\009_AntiGravity\04_AG Website\ipad"

# Edit your files (data-ipad.js, images, etc.)

git add .
git commit -m "Update: added new project"
git push

# Wait 1-2 minutes for GitHub to rebuild
```

The changes will automatically appear on your iPad after refreshing!

---

## 🎨 Optional: Add Custom Domain

If you want a custom URL like `portfolio.yourdomain.com`:

1. Go to repo Settings → Pages
2. Under "Custom domain", enter: `portfolio.yourdomain.com`
3. Click Save
4. In your domain's DNS settings, add:
   - Type: **CNAME**
   - Name: **portfolio**
   - Value: **YOUR_USERNAME.github.io**

---

## ❓ Troubleshooting

**Problem: "Permission denied (publickey)"**
- Solution: Set up SSH key or use HTTPS instead
  ```bash
  git remote set-url origin https://github.com/YOUR_USERNAME/agm-portfolio-ipad.git
  ```

**Problem: Images not loading**
- Check that images/ folder was pushed to GitHub
- Verify paths in data-ipad.js start with `images/` (not `/images/`)

**Problem: 404 error on GitHub Pages**
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` exists in the root
- Verify the branch is set to `main` in Settings → Pages

**Problem: Can't add to Home Screen on iPad**
- Must use **Safari** (not Chrome or Firefox)
- Must be on **HTTPS** (GitHub Pages is automatically HTTPS)
- Try refreshing the page first

---

## 📊 Repository Size

Current size: **~543 MB** (within GitHub's 1 GB limit)

If you need to add more images and exceed 1 GB:
- Compress images (reduce quality/resolution)
- Use Git LFS (Large File Storage)
- Host images on Cloudinary/ImageKit

---

## 🔒 Security Note

Your repository is **PUBLIC** (required for free GitHub Pages).

This means:
- Anyone can see your code
- Anyone can see your image files
- **But:** Only you know the GitHub Pages URL (unless you share it)

It's "unlisted" - not indexed by Google, not discoverable.

---

**Questions?** Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
