# InkFlow - Render Deployment Guide

## 🚀 You're Ready to Deploy!

All deployment files have been created. Here's what you have:

### 📁 Deployment Files Created

| File | Purpose |
|------|---------|
| `render.yaml` | Blueprint for automatic service creation |
| `.renderignore` | Files to exclude from deployment |
| `build.sh` | Build script for local testing |
| `DEPLOY.md` | Comprehensive deployment guide |
| `DEPLOY-QUICK.md` | Quick 5-minute setup guide |
| `.github/workflows/deploy.yml` | GitHub Actions for CI/CD |
| `backend/package.json` | Updated with proper scripts |

### 🎯 Three Ways to Deploy

#### **Option 1: Fastest (Recommended) - Using Blueprint**
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New +** → **Blueprint**
3. Connect your GitHub repository (InkFlow)
4. Render reads `render.yaml` and creates all services
5. Done! Services deploy automatically

**Time:** 10 minutes total

#### **Option 2: Manual Dashboard Setup**
1. Create services one by one in Render Dashboard
2. Configure environment variables manually
3. More steps but more control

**Time:** 20 minutes total

#### **Option 3: CLI (Advanced)**
```bash
npm install -g render-cli
render login
render deploy
```

---

## 📋 Quick Checklist

Before deploying, ensure:

- ✅ Code is committed to GitHub
- ✅ Repository is pushed to GitHub (`git push origin main`)
- ✅ `render.yaml` exists in root
- ✅ Backend has proper `start` script in `package.json`
- ✅ Frontend has proper `build` script in `package.json`

---

## 🔧 Configuration Details

### Services to be Created

**1. PostgreSQL Database**
- Free tier available
- Provides DATABASE_URL
- Automatically initialized

**2. Backend API (Node.js)**
- Runtime: Node
- Build: `cd backend && npm install`
- Start: `cd backend && npm start`
- Port: 5000
- Environment variables required:
  - `NODE_ENV=production`
  - `DATABASE_URL=<from PostgreSQL>`
  - `CORS_ORIGIN=<frontend URL>`

**3. Frontend (Static Site)**
- Build: `cd frontend && npm install && npm run build`
- Publish directory: `frontend/build`
- Environment variables:
  - `REACT_APP_API_URL=<backend URL>`

---

## 📝 Step-by-Step: Render Blueprint Deployment

### 1. Prepare GitHub
```bash
cd /workspaces/InkFlow
git add .
git commit -m "Prepare InkFlow for Render deployment"
git push origin main
```

### 2. Go to Render Dashboard
- Visit [dashboard.render.com](https://dashboard.render.com)
- Sign up or log in (free account available)

### 3. Create Blueprint
- Click **New +** button
- Select **Blueprint**
- Authorize GitHub (if needed)
- Select your `InkFlow` repository
- Click **Create from Blueprint**

### 4. Configure Services
Render will show services from `render.yaml`:
- ✓ inkflow-db (PostgreSQL)
- ✓ inkflow-backend (Node API)
- ✓ inkflow-frontend (Static site)

Review settings and click **Deploy Blueprint**

### 5. Wait for Deployment
Watch the logs:
- Database deployment: ~1-2 minutes
- Backend deployment: ~2-5 minutes
- Frontend deployment: ~3-7 minutes

### 6. Get Your URLs
Once deployed, Render shows your URLs:
- Frontend: `https://inkflow-frontend.onrender.com`
- Backend: `https://inkflow-backend.onrender.com`

### 7. Test Your App
Visit frontend URL in browser - you should see InkFlow! 🎉

---

## 🔍 Important: Update Configuration

After deployment succeeds, you might need to set environment variables if they weren't auto-configured:

### Backend Service Environment Variables

Go to Backend service → Settings → Environment Variables:
```
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://inkflow-frontend.onrender.com
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
```

Get `DATABASE_URL` from:
- PostgreSQL service → Info tab → External Database URL

### Frontend Service Environment Variables

Frontend settings might need:
```
REACT_APP_API_URL=https://inkflow-backend.onrender.com/api
```

---

## 🆘 Troubleshooting

### Build Fails
1. Check build logs in Render Dashboard
2. Common issues:
   - Missing dependencies (run `npm install` locally to verify)
   - Incorrect Node version (check `package.json`)
   - Syntax errors (check console for errors)

### Services Won't Connect
1. Verify DATABASE_URL is correct
2. Check CORS_ORIGIN matches frontend URL exactly
3. Test with: `curl https://backend-url/api/health`

### Frontend Shows 404
1. Verify `frontend/build` exists after build
2. Check publish directory is set to `frontend/build`
3. May need to configure SPA routing

### Slow Performance
- Free tier services sleep after 15 mins of inactivity
- Takes ~30 seconds to wake up
- Consider upgrading for always-on services

---

## 🔄 Continuous Deployment

Once deployed, updates are automatic:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Render automatically deploys! ✨
# Watch progress at dashboard.render.com
```

---

## 💰 Pricing

### Free Tier (Recommended for testing)
- PostgreSQL: Free with limitations
- Web Services: Free with sleep on inactivity
- Static sites: Free
- Good for development and small projects

### Paid Tiers
- Starting at $7/month per service
- No auto-sleep
- Better performance
- SSL included
- Priority support

---

## 🎓 Next Steps

1. **Deploy using Blueprint** (following steps above)
2. **Test all features:**
   - Create a document
   - Add formatting
   - Save document
   - View all documents
   - Edit and delete documents
3. **Monitor logs** for any issues
4. **Share your app** with others!

---

## 📚 Resources

- [Render Documentation](https://render.com/docs)
- [Render Support](https://render.com/support)
- [React Build Guide](https://create-react-app.dev/docs/deployment/)
- [Sequelize Production Tips](https://sequelize.org/docs/v6/)

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] render.yaml exists in root
- [ ] DEPLOY-QUICK.md reviewed
- [ ] Render account created
- [ ] Blueprint deployed
- [ ] All 3 services show as "Live"
- [ ] Environment variables configured
- [ ] Database_URL verified
- [ ] CORS_ORIGIN updated
- [ ] Frontend loads in browser
- [ ] Can create documents
- [ ] Can save documents
- [ ] API health check passes

---

## 🎉 Success!

Once all services are live:

✅ Frontend: **https://inkflow-frontend.onrender.com**  
✅ Backend: **https://inkflow-backend.onrender.com**  
✅ Database: PostgreSQL connected  
✅ App: Full-featured Word-like editor  

---

**Congratulations! Your InkFlow is live! 🚀**

Now go to your frontend URL and start creating documents online! 📝✨
