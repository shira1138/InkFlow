# Quick Deploy to Render - 5 Minute Setup

## What You Need
- GitHub account (with InkFlow repository pushed)
- Render account (free at [render.com](https://render.com))

## Quick Steps

### 1️⃣ Push to GitHub
```bash
cd /workspaces/InkFlow
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2️⃣ Create Render Services

Go to [dashboard.render.com](https://dashboard.render.com)

#### Create PostgreSQL Database
- Click **New +** → **PostgreSQL**
- Name: `inkflow-db`
- Create
- Copy the **External Database URL**

#### Create Backend API
- Click **New +** → **Web Service**
- Connect GitHub repository (select your InkFlow repo)
- Settings:
  - Name: `inkflow-backend`
  - Runtime: Node
  - Build: `cd backend && npm install`
  - Start: `cd backend && npm start`
- Environment Variables:
  - `NODE_ENV` = `production`
  - `DATABASE_URL` = (paste PostgreSQL URL from step 2)
  - `CORS_ORIGIN` = `https://inkflow-frontend.onrender.com`
- Create

#### Create Frontend
- Click **New +** → **Static Site**  
- Connect GitHub repo (same)
- Settings:
  - Name: `inkflow-frontend`
  - Build: `cd frontend && npm install && npm run build`
  - Publish: `frontend/build`
- Create

### 3️⃣ Wait for Deployment
- Each service takes 2-7 minutes
- Check logs if something fails
- Green = Success ✅

### 4️⃣ Get Your URLs
- Backend: `https://inkflow-backend.onrender.com`
- Frontend: `https://inkflow-frontend.onrender.com`

### 5️⃣ Test It
Visit frontend URL in browser - should see InkFlow! 🎉

---

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Frontend shows 404 | Check `frontend/build` exists; verify publish directory |
| API errors | Verify DATABASE_URL; check CORS_ORIGIN matches domain |
| Slow loading | Free tier sleeps after 15 min; takes ~30s to wake |
| Build fails | Check build logs; ensure Node dependencies are correct |

## Update Your Site

Just push to GitHub:
```bash
# Make changes
git add .
git commit -m "My changes"
git push origin main

# Render deploys automatically!
```

---

**That's it! Your InkFlow is live on Render! 🚀**
