# InkFlow - Development Guide

## Quick Start (Copy & Paste)

### Terminal 1 - Start Database & Backend
```bash
cd /workspaces/InkFlow
docker-compose up -d
cd backend
npm run dev
```

### Terminal 2 - Start Frontend  
```bash
cd /workspaces/InkFlow/frontend
npm start
```

Then open **http://localhost:3000** in your browser!

---

## Useful Commands

### Database
```bash
# Start database
docker-compose up -d

# Check database status
docker-compose ps

# View database logs
docker-compose logs postgres

# Stop database
docker-compose down

# View database contents (if psql installed)
psql postgresql://inkflow:inkflow@localhost:5432/inkflow_db
```

### Backend Development
```bash
cd backend

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Start production server
npm start
```

### Frontend Development
```bash
cd frontend

# Install dependencies
npm install

# Start development server (with auto-reload)
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Project URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

---

## API Documentation

### Create Document
```bash
curl -X POST http://localhost:5000/api/documents \
  -H "Content-Type: application/json" \
  -d '{"title":"My Document","content":"Document content"}'
```

### Get All Documents
```bash
curl http://localhost:5000/api/documents
```

### Get Single Document
```bash
curl http://localhost:5000/api/documents/{id}
```

### Update Document
```bash
curl -X PUT http://localhost:5000/api/documents/{id} \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

### Delete Document
```bash
curl -X DELETE http://localhost:5000/api/documents/{id}
```

---

## Troubleshooting

### Port Already in Use

**Error**: `listen EADDRINUSE: address already in use :::5000`

**Solution**: 
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process (replace PID with actual process ID)
kill -9 PID

# Or change PORT in backend/.env
PORT=5001
```

### Database Connection Failed

**Error**: `Error: connect ECONNREFUSED 127.0.0.1:5432`

**Solution**:
```bash
# Make sure Docker is running
docker ps

# Check if PostgreSQL container is running
docker-compose ps

# Start PostgreSQL
docker-compose up -d

# Check logs
docker-compose logs postgres
```

### React App Won't Load

**Error**: `CORS error` or blank page

**Solution**:
1. Make sure backend is running on port 5000
2. Check REACT_APP_API_URL in frontend/.env
3. Clear browser cache and reload
4. Check browser console for errors

### npm Install Issues

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

---

## File Structure Reference

```
frontend/
├── public/
│   └── index.html           # Main HTML file
├── src/
│   ├── components/
│   │   ├── Editor.js        # Rich text editor component
│   │   ├── DocumentList.js  # Documents view
│   │   └── Navbar.js        # Navigation bar
│   ├── styles/
│   │   ├── Editor.css
│   │   ├── DocumentList.css
│   │   └── Navbar.css
│   ├── App.js               # Main app component
│   ├── App.css              # App styling
│   ├── index.js             # React entry point
│   └── index.css
├── package.json
└── .env

backend/
├── database/
│   └── database.js          # Sequelize config
├── models/
│   └── Document.js          # Document model
├── routes/
│   └── documents.js         # API routes
├── server.js                # Express server
├── package.json
└── .env
```

---

## Development Tips

### Auto-reload for Frontend
The frontend uses react-scripts with built-in auto-reload. Just save a file and the browser refreshes automatically.

### Auto-reload for Backend
The backend uses nodemon for auto-reload. Just save a file and the server restarts automatically.

### Database Inspection
```bash
# Connect to PostgreSQL
docker-compose exec postgres psql -U inkflow -d inkflow_db

# Common commands
\dt                      # List tables
\d documents             # Describe documents table
SELECT * FROM documents; # View all documents
```

### API Testing Tools
- **Postman**: GUI tool for testing APIs
- **curl**: Command line tool (examples above)
- **VS Code REST Client**: Extension for testing APIs in editor
- **Thunder Client**: VS Code extension alternative

---

## Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
DATABASE_URL=postgresql://inkflow:inkflow@localhost:5432/inkflow_db
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment files
3. ✅ Start PostgreSQL
4. ✅ Start backend server
5. ✅ Start frontend server
6. Create your first document!

---

**Happy coding! 🚀**
