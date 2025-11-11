# Free Deployment Guide for Yamini Portfolio

## Option 1: Vercel (Recommended - Easiest)

### Steps:
1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Yamini_portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

**Benefits:**
- ✅ Free forever for personal projects
- ✅ Automatic deployments on every push
- ✅ Custom domain support
- ✅ HTTPS automatically enabled
- ✅ No configuration needed

---

## Option 2: Netlify

### Steps:
1. **Push your code to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

**Benefits:**
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ Easy to use

---

## Option 3: GitHub Pages

### Steps:
1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/Yamini_portfolio"
   }
   ```

3. **Update vite.config.js:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Yamini_portfolio/'
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

**Note:** Your site will be at `https://YOUR_USERNAME.github.io/Yamini_portfolio`

---

## Option 4: Render

### Steps:
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Sign up with GitHub
4. Click "New" → "Static Site"
5. Connect your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Create Static Site"

---

## Quick Setup Checklist

Before deploying, make sure:

- [ ] Your `package.json` has build scripts:
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }
  ```

- [ ] All assets are in the `src` folder
- [ ] No hardcoded localhost URLs
- [ ] Test the build locally: `npm run build`

---

## Recommended: Vercel

**Why Vercel?**
- Zero configuration needed
- Fastest deployment
- Best performance
- Free SSL certificate
- Automatic preview deployments for PRs

**Your site will be live at:**
`https://yamini-portfolio.vercel.app` (or your custom domain)

---

## Need Help?

If you encounter issues:
1. Check build logs in the deployment platform
2. Ensure all dependencies are in `package.json`
3. Verify `vite.config.js` is properly configured
4. Make sure all file paths use relative imports

