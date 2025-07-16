
# GitHub Pages Deployment Setup

Your project is already configured for GitHub Pages deployment with:
- ✅ Vite build system
- ✅ Base path configuration for GitHub Pages (`/the-mind-is-the-universe/`)
- ✅ SPA routing support with 404.html fallback
- ✅ React Router basename configuration

## Required package.json Scripts

Add these scripts to your package.json file:

```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## Deployment Steps

1. Make sure all your changes are committed to your main branch
2. Run the deployment command:
   ```bash
   npm run deploy
   ```

This will:
- Build your project (`npm run build`)
- Create a `dist` folder with static files
- Push the `dist` folder contents to the `gh-pages` branch
- GitHub Pages will automatically serve from the `gh-pages` branch

## GitHub Pages Settings

In your GitHub repository:
1. Go to Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`

Your site will be available at: `https://[username].github.io/the-mind-is-the-universe/`

## Project Configuration Summary

Your project is already properly configured with:
- **Base URL**: `/the-mind-is-the-universe/` (set in vite.config.ts)
- **Router Basename**: Automatically set based on environment
- **SPA Fallback**: 404.html handles client-side routing
- **Build Output**: `dist` folder (Vite default)

The gh-pages package has been added as a dev dependency. You just need to add the scripts above to your package.json file.
