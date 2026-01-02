#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, readdirSync, statSync, rmSync, copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const cnamePath = join(process.cwd(), 'CNAME');

if (!existsSync(distPath)) {
  console.error('Error: dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

try {
  // Get current branch
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  
  console.log(`Current branch: ${currentBranch}`);
  console.log('Building project...');
  
  // Build the project (already done, but ensure)
  execSync('npm run build', { stdio: 'inherit' });
  
  // Store paths BEFORE switching branches (dist folder exists in filesystem)
  const distPathBeforeSwitch = join(process.cwd(), 'dist');
  const cnamePathBeforeSwitch = join(process.cwd(), 'CNAME');
  
  // Read CNAME content before switching (so we can write it after switching)
  let cnameContent = null;
  if (existsSync(cnamePathBeforeSwitch)) {
    cnameContent = readFileSync(cnamePathBeforeSwitch, 'utf-8').trim();
    console.log('✅ CNAME file found:', cnameContent);
  } else {
    console.error('❌ Error: CNAME file not found in dev branch. Please ensure CNAME exists.');
    process.exit(1);
  }
  
  // Stash any uncommitted changes
  try {
    execSync('git stash', { stdio: 'ignore' });
  } catch (e) {
    // No changes to stash
  }
  
  // Switch to main branch
  console.log('Switching to main branch...');
  execSync('git checkout main', { stdio: 'inherit' });
  
  // Remove all files except .git and dist using Node.js (macOS compatible)
  // Note: dist folder must be preserved because it contains the built files we need to copy
  console.log('Cleaning main branch (keeping only .git and dist)...');
  try {
    const files = readdirSync('.');
    for (const file of files) {
      if (file !== '.git' && file !== 'dist' && file !== 'node_modules') {
        const filePath = join(process.cwd(), file);
        try {
          const stats = statSync(filePath);
          if (stats.isDirectory()) {
            rmSync(filePath, { recursive: true, force: true });
          } else {
            rmSync(filePath, { force: true });
          }
        } catch (e) {
          // Ignore individual file errors
        }
      }
    }
  } catch (e) {
    console.log('Warning: Some files may not have been removed:', e.message);
  }
  
  // Copy dist contents to root using Node.js (more reliable than shell commands)
  console.log('Copying built files to main...');
  // Use the dist path stored before branch switch (dist folder still exists in filesystem)
  
  if (!existsSync(distPathBeforeSwitch)) {
    throw new Error(`Dist folder not found at ${distPathBeforeSwitch}`);
  }
  
  // Recursively copy files using Node.js
  const copyRecursive = (src, dest) => {
    const entries = readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);
      
      if (entry.isDirectory()) {
        mkdirSync(destPath, { recursive: true });
        copyRecursive(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  };
  
  copyRecursive(distPathBeforeSwitch, process.cwd());
  
  // Ensure CNAME is present (write the content we read before switching)
  if (cnameContent) {
    writeFileSync(join(process.cwd(), 'CNAME'), cnameContent);
    console.log('✅ CNAME file written to main branch:', cnameContent);
  }
  
  // Add all files
  console.log('Staging files...');
  execSync('git add -A', { stdio: 'inherit' });
  
  // Commit
  console.log('Committing changes...');
  execSync('git commit -m "Deploy latest changes to main branch"', { stdio: 'inherit' });
  
  // Push to main
  console.log('Pushing to main branch...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  // Switch back to original branch
  console.log(`Switching back to ${currentBranch} branch...`);
  execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });
  
  // Restore stashed changes if any
  try {
    execSync('git stash pop', { stdio: 'ignore' });
  } catch (e) {
    // No stash to restore
  }
  
  console.log('✅ Deployment to main branch completed successfully!');
  console.log('Your site will be live at https://www.manavvpvakharia.com');
  console.log('\n📝 Note: Configure GitHub Pages to serve from "main" branch in repository settings.');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  // Try to switch back to original branch on error
  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
    if (currentBranch !== 'main') {
      execSync(`git checkout ${currentBranch}`, { stdio: 'ignore' });
    }
  } catch (e) {
    // Ignore
  }
  process.exit(1);
}
