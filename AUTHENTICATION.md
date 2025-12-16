# GitHub Authentication Required

Your git is currently authenticated as `YPana25`, but you need to authenticate as `GSIntelligence`.

## Option 1: Use GitHub Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "GSI Website Deployment"
   - Select scopes: Check `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push -u origin main
   ```
   - Username: `GSIntelligence`
   - Password: **Paste your personal access token** (not your GitHub password)

## Option 2: Update Git Credentials (Windows)

1. Open Windows Credential Manager:
   - Press `Win + R`
   - Type: `control /name Microsoft.CredentialManager`
   - Or search "Credential Manager" in Start menu

2. Go to "Windows Credentials"
3. Find any GitHub entries and remove them
4. Try pushing again - Windows will prompt for new credentials

## Option 3: Use GitHub Desktop

If you have GitHub Desktop installed:
1. Open GitHub Desktop
2. File → Add Local Repository
3. Select: `C:\Users\yanni\OneDrive\Desktop\GSI`
4. Click "Publish repository"
5. Make sure it's set to `GSIntelligence/GSI`

## Option 4: Manual Push via GitHub Web

If authentication continues to be an issue:
1. Go to: https://github.com/GSIntelligence/GSI
2. Click "uploading an existing file"
3. Drag and drop all files from your `GSI` folder
4. Commit directly to `main` branch

---

**Once authenticated, the GitHub Actions workflow will automatically deploy your site!**

