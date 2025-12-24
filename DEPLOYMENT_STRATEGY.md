# VETPAL Deployment & Hosting Strategy

## Overview
VETPAL is a multi-platform application (Web + iOS + Android) with backend services provided by Lovable Cloud. This document outlines the deployment strategy for your 501(c)(3) nonprofit organization using free Azure credits or Siteground.

## Architecture

```
VETPAL Monorepo
├── apps/
│   ├── web/                    # Next.js web app (primary)
│   ├── mobile/                 # Expo (iOS/Android)
│   └── shared/                 # Shared utilities
├── packages/
│   └── lovable-client/         # Lovable Cloud SDK
└── infrastructure/             # IaC files (Bicep/Terraform)
```

---

## Hosting Options Comparison

### Option 1: Azure Static Web Apps (Recommended for 501c3) ✅
**Best for:** Free hosting with nonprofit credits
- **Cost:** FREE (with nonprofit Azure credits)
- **Deployment:** Git-based CI/CD (GitHub Actions)
- **Performance:** Global CDN with built-in caching
- **Scale:** Automatic, handles traffic spikes
- **Best for:** Next.js static/hybrid export

**Setup:**
```bash
npx swa init --yes
npm run build
npx swa deploy --env production
```

**Ideal for:**
- ✅ Next.js web app
- ✅ Static content + APIs
- ✅ Lovable Cloud backend
- ✅ Global users (CDN)

---

### Option 2: Azure Container Apps
**Best for:** Serverless, scalable container deployment
- **Cost:** FREE tier available (with nonprofit credits)
- **Deployment:** Docker container
- **Performance:** Auto-scaling, high availability
- **Best for:** Microservices, API backends

**Recommended Setup:**
```
Web App: Azure Static Web Apps (Next.js frontend)
API: Azure Container Apps (if needed for custom APIs)
Backend: Lovable Cloud (auth, database, storage)
```

---

### Option 3: Siteground Hosting
**Best for:** Traditional shared/VPS hosting
- **Cost:** You already have it!
- **Deployment:** FTP/Git push or cPanel
- **Performance:** Depends on your plan
- **Best for:** Simple Node.js deployment

**Setup:**
```bash
npm run build
# Upload build/ and node_modules/ to Siteground
# Or use Git deployment if available
```

---

## Recommended Solution for VETPAL

### Primary: **Azure Static Web Apps** (Next.js Web App)
1. **Next.js web app** → Azure Static Web Apps (FREE)
2. **Lovable Cloud backend** → Database, Auth, Storage
3. **Expo mobile apps** → Build locally, distribute via App Store/Play Store

### Fallback: **Siteground** (if you prefer existing host)
1. Deploy Next.js to Siteground Node.js hosting
2. Same Lovable Cloud backend
3. Same mobile strategy

---

## Deployment Flow

### GitHub-based CI/CD (Recommended)
```
GitHub Repo
    ↓
Git Push to main
    ↓
GitHub Actions Workflow
    ↓
Build Next.js (apps/web)
    ↓
Deploy to Azure/Siteground
    ↓
Live at vetpal.com
```

### Example GitHub Actions Workflow (Azure SWA)
```yaml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build --filter=web
      - uses: Azure/static-web-apps-deploy@v1
        with:
          action: upload
          app_location: apps/web/.next
          output_location: out
```

---

## Step-by-Step Setup

### Phase 1: Create Monorepo Structure (Today)
- [ ] Set up Turbo workspace
- [ ] Migrate web app to `apps/web` (Next.js)
- [ ] Create `apps/mobile` (Expo)
- [ ] Create `packages/shared` (utilities)

### Phase 2: Setup Lovable Cloud Backend
- [ ] Connect Lovable Cloud credentials
- [ ] Configure environment variables
- [ ] Test API connectivity

### Phase 3: Deploy to Azure (or Siteground)
**If Azure (Recommended):**
- [ ] Create Azure Static Web Apps resource
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Deploy!

**If Siteground:**
- [ ] Create Node.js hosting environment
- [ ] Set up Git deployment (if available)
- [ ] Deploy Next.js build
- [ ] Configure custom domain

### Phase 4: Mobile App Distribution
- [ ] Build Expo app for iOS
- [ ] Build Expo app for Android
- [ ] Submit to App Store / Google Play Store

---

## Environment Variables

Create `.env.local` files for each app:

### `apps/web/.env.local`
```
NEXT_PUBLIC_LOVABLE_PROJECT_ID=your_project_id
NEXT_PUBLIC_LOVABLE_API_URL=https://api.lovable.cloud
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### `apps/mobile/.env`
```
EXPO_PUBLIC_LOVABLE_PROJECT_ID=your_project_id
EXPO_PUBLIC_LOVABLE_API_URL=https://api.lovable.cloud
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Cost Estimate (with Nonprofit Credits)

| Service | Free Tier | Nonprofit Credit |
|---------|-----------|------------------|
| Azure Static Web Apps | ✅ YES | FREE |
| Azure Container Apps | Limited | FREE ($200/month) |
| Lovable Cloud | Pay-as-you-go | Included |
| Domain (optional) | ~$12/year | Not covered |
| **Total** | **FREE** | **FREE** |

---

## Decision Matrix

| Factor | Azure SWA | Siteground |
|--------|-----------|-----------|
| Cost | FREE ✅ | Included |
| Setup Time | 10 mins | 30 mins |
| Global CDN | ✅ YES | Depends |
| Auto-scaling | ✅ YES | Limited |
| Git Integration | ✅ GitHub | Git (if available) |
| Custom Domain | ✅ Easy | ✅ Easy |
| Lovable Support | ✅ Great | ✅ Good |

---

## Recommendation

**🎯 Use Azure Static Web Apps for VETPAL:**
- ✅ FREE with your nonprofit credits
- ✅ Perfect for Next.js
- ✅ Global CDN included
- ✅ Simple GitHub-based deployment
- ✅ Scales automatically
- ✅ Minimal configuration

**Then use Siteground as backup** if you want redundancy.

---

## Next Steps

1. **Choose your deployment platform** (Azure SWA or Siteground)
2. **Set up the monorepo structure** (Turbo + Next.js + Expo)
3. **Migrate files** from your Lovable project
4. **Configure Lovable Cloud credentials**
5. **Deploy and test**

Ready to proceed? Let me know which option you prefer! 🚀
