#!/bin/bash

echo "🚀 Event Showcase - Deployment Script"
echo "====================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Event Showcase"
    git branch -M main
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local file not found!"
    echo "Please create .env.local with your API keys before deploying"
    exit 1
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo "1. Create GitHub repository: https://github.com/new"
echo "2. Push your code:"
echo "   git remote add origin https://github.com/yourusername/event-showcase.git"
echo "   git push -u origin main"
echo ""
echo "3. Set up Clerk: https://clerk.dev"
echo "   - Create account and application"
echo "   - Get API keys"
echo ""
echo "4. Set up Supabase: https://supabase.com"
echo "   - Create account and project"
echo "   - Run setup-database.sql"
echo "   - Get API keys"
echo ""
echo "5. Deploy to Vercel: https://vercel.com"
echo "   - Import GitHub repository"
echo "   - Add environment variables"
echo "   - Deploy!"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "🎉 Good luck with your deployment!" 