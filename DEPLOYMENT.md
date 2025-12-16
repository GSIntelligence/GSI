# GitHub Pages Deployment Guide

## Security Vulnerabilities ✅
- **Fixed!** Updated Vite to version 7.3.0 to resolve 2 moderate security vulnerabilities
- All dependencies are now secure

## Git Repository Setup ✅
- Git repository initialized
- Initial commit created
- Branch renamed to `main`

## Next Steps to Deploy Live:

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `GSI` (must match the base path in vite.config.js)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### 2. Push Your Code to GitHub
Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/GSI.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select:
   - **Source**: `GitHub Actions`
4. Save the settings

### 4. Automatic Deployment
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
  - Build your site when you push to `main`
  - Deploy it to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/GSI/`

### 5. Verify Deployment
- After pushing, go to the **Actions** tab in your GitHub repo
- You should see a workflow running
- Once it completes (green checkmark), your site is live!

## Manual Deployment (Alternative)
If you prefer to deploy manually:
1. Run `npm run build`
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch and `/ (root)` folder
5. Push the `dist` folder contents to the `gh-pages` branch

## Updating Your Site
Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Your update message"
git push
```
The GitHub Actions workflow will automatically rebuild and redeploy!

