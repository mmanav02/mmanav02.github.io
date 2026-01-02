# Deployment Guide

## Branch Structure

- **`dev` branch**: Development branch - contains all source code
- **`main` branch**: Production branch - contains only built files for GitHub Pages

## Development Workflow

1. **Work on dev branch:**
   ```bash
   git checkout dev
   # Make your changes
   git add .
   git commit -m "Your changes"
   git push origin dev
   ```

2. **Deploy to production:**
   ```bash
   npm run deploy
   ```
   
   This will:
   - Build the project
   - Switch to main branch
   - Replace main branch with built files
   - Commit and push to main
   - Switch back to dev branch

## GitHub Pages Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**

## Important Notes

- Always develop on the `dev` branch
- The `main` branch will only contain built files (from `dist/` folder)
- Never commit source code directly to `main` - use `npm run deploy` instead
- The CNAME file is automatically included in deployments

