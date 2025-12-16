# Troubleshooting 404 Error

## Updated Workflow ✅
I've added the necessary permissions to the workflow file. The workflow should now be able to deploy to GitHub Pages.

## Steps to Fix 404:

### 1. Check GitHub Actions Status
1. Go to: https://github.com/GSIntelligence/GSI/actions
2. Look for the "Deploy to GitHub Pages" workflow
3. Check if it's:
   - **Running** (yellow dot) - Wait for it to complete
   - **Failed** (red X) - Click on it to see the error
   - **Succeeded** (green checkmark) - Continue to step 2

### 2. Verify GitHub Pages Settings
1. Go to: https://github.com/GSIntelligence/GSI/settings/pages
2. Check:
   - **Source**: Should be "GitHub Actions" (not "Deploy from a branch")
   - **Custom domain**: Leave empty for now
3. If it's set to "Deploy from a branch", change it to "GitHub Actions" and save

### 3. Wait for Deployment
- After the workflow completes successfully, GitHub Pages can take 1-5 minutes to update
- The site URL is: **https://GSIntelligence.github.io/GSI/**
- Note the `/GSI/` at the end - this is required because of the base path

### 4. Check the gh-pages Branch
1. Go to: https://github.com/GSIntelligence/GSI/branches
2. You should see a `gh-pages` branch created by the workflow
3. If it doesn't exist, the workflow may have failed

### 5. Manual Trigger (if needed)
If the workflow didn't run automatically:
1. Go to: https://github.com/GSIntelligence/GSI/actions
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow" button

## Common Issues:

### Issue: Workflow fails with permission error
**Solution**: The permissions have been added. Make sure you're using GitHub Actions as the source, not a branch.

### Issue: 404 even after workflow succeeds
**Solution**: 
- Wait 2-5 minutes for GitHub Pages to update
- Clear your browser cache
- Try incognito/private browsing mode
- Make sure you're visiting: `https://GSIntelligence.github.io/GSI/` (with the trailing `/GSI/`)

### Issue: Site loads but shows blank page
**Solution**: This is likely a routing issue. The base path `/GSI/` should be correct. Check the browser console for errors.

## Next Steps:
1. Check the Actions tab to see if the workflow is running/completed
2. Verify the Pages settings are set to "GitHub Actions"
3. Wait a few minutes after the workflow completes
4. Try accessing the site again

Let me know what you see in the Actions tab!

