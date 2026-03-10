#!/bin/bash

echo ""
echo "🔍 InkFlow Project Verification"
echo "================================"
echo ""

# Check Node.js and npm
echo "📌 Checking Node.js and npm..."
if command -v node &> /dev/null; then
    echo "✓ Node.js: $(node --version)"
else
    echo "❌ Node.js not found"
fi

if command -v npm &> /dev/null; then
    echo "✓ npm: $(npm --version)"
else
    echo "❌ npm not found"
fi

echo ""
echo "📌 Checking project structure..."

# Check directories
DIRS=("frontend" "backend" "frontend/src" "frontend/src/components" "backend/database" "backend/routes" "backend/models")
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "✓ $dir/"
    else
        echo "❌ $dir/ - MISSING"
    fi
done

echo ""
echo "📌 Checking key files..."

# Check files
FILES=("package.json:frontend" "package.json:backend" ".env:frontend" ".env:backend" "docker-compose.yml" "README.md" "SETUP.md")
for file_pair in "${FILES[@]}"; do
    IFS=':' read -r file path <<< "$file_pair"
    if [ -z "$path" ]; then
        if [ -f "$file" ]; then
            echo "✓ $file"
        else
            echo "❌ $file - MISSING"
        fi
    else
        if [ -f "$path/$file" ]; then
            echo "✓ $path/$file"
        else
            echo "❌ $path/$file - MISSING"
        fi
    fi
done

echo ""
echo "📌 Checking npm dependencies..."

if [ -d "frontend/node_modules" ]; then
    echo "✓ Frontend dependencies installed"
else
    echo "❌ Frontend dependencies not found"
fi

if [ -d "backend/node_modules" ]; then
    echo "✓ Backend dependencies installed"
else
    echo "❌ Backend dependencies not found"
fi

echo ""
echo "📌 Checking Docker..."
if command -v docker &> /dev/null; then
    echo "✓ Docker: $(docker --version)"
    if command -v docker-compose &> /dev/null; then
        echo "✓ Docker Compose: $(docker-compose --version)"
    else
        echo "⚠️  Docker Compose not found"
    fi
else
    echo "⚠️  Docker not found (optional but recommended)"
fi

echo ""
echo "================================"
echo "✅ Verification complete!"
echo ""
echo "Next steps:"
echo "1. Start PostgreSQL: bash start.sh"
echo "2. Backend: cd backend && npm run dev"
echo "3. Frontend: cd frontend && npm start"
echo "4. Visit: http://localhost:3000"
