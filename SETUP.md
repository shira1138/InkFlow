# InkFlow - Complete Document Editor Setup

This project is a full-stack document editor similar to Microsoft Word.

## Quick Start

### 1. Start PostgreSQL Database
```bash
docker-compose up -d
```

### 2. Start Backend Server
```bash
cd backend
npm install
npm run dev
```

Backend runs on: http://localhost:5000

### 3. Start Frontend Application (in a new terminal)
```bash
cd frontend
npm install
npm start
```

Frontend runs on: http://localhost:3000

## Project Structure

- **frontend/** - React application with rich text editor
- **backend/** - Node.js/Express API server
- **database/** - PostgreSQL database configuration
- **docker-compose.yml** - Docker setup for PostgreSQL

## Features Implemented

✓ Create, read, update, delete documents
✓ Rich text editor with formatting toolbar
✓ Document list view
✓ Responsive design
✓ PostgreSQL database integration
✓ RESTful API

## Environment Setup

### Backend (.env)
```
DATABASE_URL=postgresql://inkflow:inkflow@localhost:5432/inkflow_db
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Database Credentials

- **Host**: localhost:5432
- **User**: inkflow
- **Password**: inkflow
- **Database**: inkflow_db

## Troubleshooting

**Port already in use?**
- Change PORT in backend/.env
- Change port in frontend/package.json start script

**Database connection failed?**
- Make sure PostgreSQL is running: `docker-compose ps`
- Check connection string in backend/.env

**CORS errors?**
- Ensure CORS_ORIGIN in backend/.env matches frontend URL
- Check that backend server is running on port 5000

## Next Steps

1. Install dependencies: `npm install` in both frontend and backend directories
2. Start PostgreSQL: `docker-compose up -d`
3. Run backend: `cd backend && npm run dev`
4. Run frontend: `cd frontend && npm start`
5. Create your first document!

Happy editing! 📝✨
