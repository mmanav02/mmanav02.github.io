#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';
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
  console.log('Switching to main branch...');
  
  // Stash any uncommitted changes
  try {
    execSync('git stash', { stdio: 'ignore' });
  } catch (e) {
    // No changes to stash
  }
  
  // Switch to main branch
  execSync('git checkout main', { stdio: 'inherit' });
  
  // Remove all files except .git
  console.log('Cleaning main branch...');
  execSync('git rm -rf . 2>/dev/null || true', { stdio: 'ignore' });
  
  // Copy dist contents to root
  console.log('Copying built files to main...');
  execSync(`cp -r ${distPath}/* .`, { stdio: 'inherit' });
  
  // Ensure CNAME is present
  if (existsSync(cnamePath)) {
    execSync(`cp ${cnamePath} .`, { stdio: 'ignore' });
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
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}

