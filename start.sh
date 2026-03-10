#!/bin/bash

echo "🚀 InkFlow Startup Script"
echo "========================="
echo ""

# Check if Docker is running
if ! command -v docker &> /dev/null; then
    echo "⚠️  Docker is not installed. Please install Docker first."
    exit 1
fi

# Start PostgreSQL container
echo "📦 Starting PostgreSQL database..."
docker-compose up -d

if [ $? -eq 0 ]; then
    echo "✓ PostgreSQL started successfully"
    echo ""
    
    # Wait for database to be ready
    echo "⏳ Waiting for database to be ready..."
    sleep 5
    
    # Check database connectivity
    echo "🔍 Checking database connection..."
    docker-compose exec -T postgres pg_isready -U inkflow > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✓ Database is ready"
    else
        echo "⚠️  Database might not be ready yet. Check logs with: docker-compose logs postgres"
    fi
else
    echo "❌ Failed to start PostgreSQL"
    exit 1
fi

echo ""
echo "📝 Configuration Summary:"
echo "========================"
echo "Database: postgresql://inkflow:inkflow@localhost:5432/inkflow_db"
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""
echo "✅ Setup complete! You can now:"
echo "   1. In terminal 1: cd backend && npm run dev"
echo "   2. In terminal 2: cd frontend && npm start"
echo ""
echo "Then open http://localhost:3000 in your browser"
