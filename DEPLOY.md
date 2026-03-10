# Deploy InkFlow to Render

This guide will help you deploy InkFlow to Render - a modern cloud platform for hosting web applications.

## Prerequisites

- GitHub account (repository pushed to GitHub)
- Render account (free tier available at [render.com](https://render.com))
- Your `InkFlow` repository pushed to GitHub

## Step 1: Prepare Your Repository

1. **Ensure all changes are committed:**
```bash
cd /workspaces/InkFlow
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

2. **Verify files are present:**
   - `render.yaml` - Deployment configuration
   - `build.sh` - Build script
   - `.renderignore` - Files to exclude from deployment
   - `backend/package.json` - With proper start script
   - `frontend/package.json` - With build script

## Step 2: Create Render Services

### Option A: Using Render Dashboard (GUI)

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Fill in the details:
   - **Name:** `inkflow-backend`
   - **Branch:** `main`
   - **Runtime:** Node
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** Free

5. **Add environment variables:**
   - `NODE_ENV` = `production`
   - `CORS_ORIGIN` = `https://inkflow-frontend.onrender.com`
   - `DATABASE_URL` = (will get from PostgreSQL service)

6. **Create Database:**
   - Click **New +** → **PostgreSQL**
   - **Name:** `inkflow-db`
   - **Plan:** Free
   - Note the connection string

7. **Copy DATABASE_URL from PostgreSQL service:**
   - Go to PostgreSQL service → Info tab
   - Copy the **External Database URL**
   - Add to Backend service environment variables

8. **Create Frontend (Static):**
   - Click **New +** → **Static Site**
   - Connect your GitHub repository
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish directory:** `frontend/build`
   - **Plan:** Free

### Option B: Using render.yaml (Recommended)

1. In Render Dashboard, click **New +** → **Blueprint**
2. Connect your GitHub repository
3. Select the repository containing `render.yaml`
4. Render will automatically create all services from the blueprint

## Step 3: Configure Environment Variables

### Backend Service - Environment Variables:

```
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-frontend-url.onrender.com
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
```

### Frontend Service - Environment Variables:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

## Step 4: Deploy

1. **Push to GitHub:**
```bash
git push origin main
```

2. In Render Dashboard:
   - Services will automatically redeploy on push
   - Monitor deployment logs in the service dashboard
   - Check "Logs" tab for any errors

3. **Wait for deployment:**
   - Backend: 2-5 minutes
   - Frontend: 3-7 minutes
   - Database: 1-2 minutes

## Step 5: Verify Deployment

1. **Backend health check:**
```bash
curl https://your-backend.onrender.com/api/health
```

Should return:
```json
{"status":"OK","message":"InkFlow API is running"}
```

2. **Frontend access:**
- Visit `https://your-frontend.onrender.com`
- Should load InkFlow editor

3. **Full workflow:**
- Create a new document
- Add some text
- Click Save
- Check if document ap in the list
- Edit and delete documents

## Service URLs

Replace with your actual Render service names:

- **Frontend:** `https://inkflow-frontend.onrender.com`
- **Backend API:** `https://inkflow-backend.onrender.com`
- **API Health:** `https://inkflow-backend.onrender.com/api/health`
- **API Docs:** `https://inkflow-backend.onrender.com/api/documents`

## Troubleshooting

### Services won't deploy

1. **Check build logs:**
   - Go to service → Logs tab
   - Look for error messages

2. **Common issues:**
   - Missing environment variables
   - Incorrect database URL
   - Port already in use
   - Node version mismatch

### Database connection errors

1. **Verify DATABASE_URL:**
   - Should be: `postgresql://user:password@host:port/dbname`
   - Get from PostgreSQL service info

2. **Check CORS_ORIGIN:**
   - Must match your frontend URL exactly
   - Include `https://` but no trailing slash
   - Example: `https://inkflow-frontend.onrender.com`

### Frontend shows 404 errors

1. **Verify build directory:**
   - Check that `frontend/build` folder exists after build
   - Publish directory should be `frontend/build`

2. **Check REACT_APP_API_URL:**
   - Must point to backend service
   - Example: `https://inkflow-backend.onrender.com/api`

### Slow deployment or timeouts

- Free tier services sleep after 15 minutes of inactivity
- Takes ~30 seconds to wake up
- Consider upgrading plan if needed

## Scaling Tips

### Add Custom Domain

1. In Render service → Settings
2. Add custom domain (e.g., `inkflow.yourdomain.com`)
3. Update DNS records as instructed
4. Update CORS_ORIGIN and REACT_APP_API_URL

### Upgrade Plan (paid)

- Faster deployments
- No auto-sleep
- Better performance
- SSL certificate included

### Environment-specific configs

Create different branches for:
- `staging` - Test deployments
- `production` - Live deployments

## CI/CD Workflow

1. Push to GitHub
2. Render detects changes
3. Runs build command
4. Deploys automatically
5. Services restart
6. Health checks pass

## Monitoring

1. **Check service status:**
   - Dashboard shows online/offline status
   - Green = running, Red = error

2. **View logs:**
   - Service → Logs tab
   - Real-time log streaming

3. **Monitor usage:**
   - Dashboard shows CPU, memory, disk
   - Free tier has limitations

## Updating Your Deployment

To update production:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Render deploys automatically!
```

## Rollback

If deployment fails:

1. Go to service → Logs
2. Find the last successful build
3. Click "Deploy" next to that version
4. Service redeploys with previous version

## Support

- **Render Docs:** https://render.com/docs
- **Render Support:** https://render.com/support
- **GitHub Issues:** Open issue in your repository

---

**Happy deploying! 🚀**
