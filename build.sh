#!/bin/bash

echo "🚀 Building InkFlow for Render..."

# Build Backend
echo "📦 Building Backend..."
cd backend
npm install
npm run build
cd ..

# Build Frontend
echo "📦 Building Frontend..."
cd frontend
npm install
npm run build
cd ..

echo "✅ Build complete!"
