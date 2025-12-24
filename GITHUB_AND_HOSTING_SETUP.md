# GitHub & Hosting Setup Guide

## Step 1: Create GitHub Repository

### Via GitHub Website (Easiest)
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `vetpal-website` (or `VETPAL`)
3. Description: `Veterans Empowered To Protect Aquatic Life - Web & Mobile App`
4. **Public** or **Private** (your choice)
5. Don't initialize with anything (we already have a repo)
6. Click "Create Repository"

### Copy the Repository URL
Example: `https://github.com/your-username/vetpal-website.git`

---

## Step 2: Connect Local Repository to GitHub

### Add Remote to Your Local Project
```bash
cd /Volumes/NHB_Workspace/vetpal-website

# Add GitHub as remote
git remote add origin https://github.com/your-username/vetpal-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Verify Connection
```bash
git remote -v
# Should show:
# origin  https://github.com/your-username/vetpal-website.git (fetch)
# origin  https://github.com/your-username/vetpal-website.git (push)
```

---

## Step 3: Choose Your Hosting Platform

### Option A: Azure Static Web Apps (Recommended - FREE)

#### Prerequisites
- Azure account with nonprofit credits
- GitHub personal access token (for deployment)

#### Setup Steps

1. **Create Azure Static Web Apps Resource**
   ```bash
   # Via Azure Portal or Azure CLI
   az staticwebapp create \
     --name vetpal-website \
     --resource-group vetpal-rg \
     --source https://github.com/your-username/vetpal-website \
     --branch main \
     --api-location api \
     --app-location dist \
     --output-location . \
     --token <GITHUB_TOKEN>
   ```

2. **Or Use Azure Portal**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps"
   - Click "Create"
   - Select GitHub as source
   - Authorize and connect your repo
   - Configure build settings

3. **Build Configuration**
   - App location: `apps/web` (or `.` if single app)
   - Output location: `dist`
   - API location: (leave empty)

4. **Deployment**
   - Azure automatically triggers on GitHub push
   - CI/CD handled by GitHub Actions

#### Cost
- **FREE** with nonprofit Azure credits
- No configuration needed
- Includes free custom domain

---

### Option B: Siteground (Your Existing Host)

#### Prerequisites
- Siteground hosting account
- SSH/FTP access or Git deployment

#### Setup Steps

1. **Build Your App**
   ```bash
   npm run build
   ```

2. **Deploy Via FTP**
   - Connect via FTP client (FileZilla, Cyberduck)
   - Upload `dist/` contents to public_html/
   - Delete old files first

3. **Deploy Via Git** (if available)
   ```bash
   # SSH into your Siteground server
   ssh user@yourserver.com
   
   # Clone your repo
   git clone https://github.com/your-username/vetpal-website.git
   
   # Install and build
   npm install
   npm run build
   
   # Configure web root to point to dist/
   ```

4. **Configure Node.js** (if needed)
   - Set Node.js version: 18+
   - Set app startup command: `npm start`
   - Use Siteground's cPanel if available

#### Cost
- Already included in your plan
- No additional setup

---

## Step 4: Configure Environment Variables

### For Azure Static Web Apps

1. Go to Azure Portal → Your Static Web App
2. Settings → Configuration
3. Add app settings:
   ```
   VITE_LOVABLE_PROJECT_ID = your_id
   VITE_LOVABLE_API_URL = https://api.lovable.cloud
   VITE_SUPABASE_URL = your_url
   VITE_SUPABASE_ANON_KEY = your_key
   ```

### For Siteground

1. Create `.env` file in web root:
   ```
   VITE_LOVABLE_PROJECT_ID = your_id
   VITE_LOVABLE_API_URL = https://api.lovable.cloud
   VITE_SUPABASE_URL = your_url
   VITE_SUPABASE_ANON_KEY = your_key
   ```
2. Add `.env` to `.gitignore` (don't commit secrets!)

---

## Step 5: Get Your Lovable Cloud Credentials

### In Lovable Dashboard
1. Go to [Lovable](https://lovable.app)
2. Navigate to your VETPAL project
3. Look for API/Project Settings
4. Find:
   - `LOVABLE_PROJECT_ID`
   - `LOVABLE_API_URL`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### Store Securely
- Never commit these to GitHub
- Store in `.env.local` locally
- Use platform-specific secrets in production

---

## Step 6: Set Up GitHub Actions (CI/CD)

### Create `.github/workflows/deploy.yml`

```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
  
  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist
      
      - name: Deploy to Azure
        uses: Azure/static-web-apps-deploy@v1
        with:
          action: upload
          app_location: '/'
          output_location: 'dist'
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
```

---

## Step 7: Verify Deployment

### Azure Static Web Apps
1. Go to Azure Portal → Your Static Web App
2. Look for "URL" in Overview
3. Click to visit your live site!

### Siteground
1. Visit your domain (yourdomain.com)
2. Should see your VETPAL website

---

## Troubleshooting

### Build Fails
- Check `npm run build` locally
- Review build logs in GitHub Actions or Azure Portal
- Verify all dependencies are installed

### Secrets Not Working
- Ensure environment variables are set in platform
- Check `.env.local` is in `.gitignore`
- Never commit secrets to GitHub

### GitHub Can't Connect
- Authorize GitHub access in Azure Portal
- Verify personal access token is valid
- Check repository URL is correct

### Site Shows Old Version
- Clear browser cache
- Check deployment completion in Azure/GitHub
- Verify build ran successfully

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Choose Azure or Siteground
4. ✅ Configure environment variables
5. ✅ Set up GitHub Actions (if using Azure)
6. ✅ Deploy and verify

---

## Example Workflow

```bash
# 1. Make changes locally
vim src/components/Header.tsx

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Update header component"

# 4. Push to GitHub
git push origin main

# 5. Azure/Siteground automatically deploys
# 6. Visit your site - changes are live!
```

---

## Support Resources

- [GitHub Docs](https://docs.github.com/)
- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Siteground Hosting Docs](https://www.siteground.com/tutorials)
- [Lovable Docs](https://docs.lovable.app/)

---

**Questions?** Check the [DEPLOYMENT_STRATEGY.md](./DEPLOYMENT_STRATEGY.md) or [YOUR_PATH_FORWARD.md](./YOUR_PATH_FORWARD.md) guides!
