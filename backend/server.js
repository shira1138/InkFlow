const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/database');
const documentRoutes = require('./routes/documents');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database connection
db.authenticate()
  .then(() => {
    console.log('✓ Database connected successfully');
    db.sync({ alter: true });
  })
  .catch((err) => {
    console.error('✗ Database connection failed:', err);
  });

// Routes
app.use('/api/documents', documentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'InkFlow API is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 InkFlow server running on http://localhost:${PORT}`);
});
