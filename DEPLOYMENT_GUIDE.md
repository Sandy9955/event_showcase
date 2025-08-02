# 🚀 Event Showcase - Complete Deployment Guide

## 📋 Prerequisites

Before deploying, make sure you have:
- [ ] GitHub account
- [ ] Vercel account (free at vercel.com)
- [ ] Clerk account (free at clerk.dev)
- [ ] Supabase account (free at supabase.com)

---

## 🔧 Step 1: Set Up Clerk Authentication

### 1.1 Create Clerk Account
1. Go to [clerk.dev](https://clerk.dev)
2. Click "Get Started" and create a free account
3. Sign in to your dashboard

### 1.2 Create New Application
1. Click "Add Application"
2. Choose "Next.js" as your framework
3. Name your app: "Event Showcase"
4. Click "Create Application"

### 1.3 Get API Keys
1. Go to "API Keys" in the sidebar
2. Copy your **Publishable Key** (starts with `pk_test_`)
3. Copy your **Secret Key** (starts with `sk_test_`)

### 1.4 Configure URLs
1. Go to "User & Authentication" → "Paths"
2. Set Sign-in URL: `/sign-in`
3. Set Sign-up URL: `/sign-up`
4. Save changes

---

## 🗄️ Step 2: Set Up Supabase Database

### 2.1 Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" and create a free account
3. Sign in to your dashboard

### 2.2 Create New Project
1. Click "New Project"
2. Choose your organization
3. Name: "event-showcase-db"
4. Set a secure database password
5. Choose a region close to you
6. Click "Create new project"

### 2.3 Get Database Credentials
1. Go to "Settings" → "API"
2. Copy your **Project URL** (looks like: `https://your-project-id.supabase.co`)
3. Copy your **anon public key** (starts with `eyJ...`)

### 2.4 Set Up Database Schema
1. Go to "SQL Editor" in the sidebar
2. Click "New Query"
3. Copy and paste the SQL from `scripts/setup-database.sql`
4. Click "Run" to create the events table

---

## 🌐 Step 3: Deploy to Vercel

### 3.1 Prepare Your Repository
1. Create a new GitHub repository
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/event-showcase.git
   git push -u origin main
   ```

### 3.2 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 3.3 Add Environment Variables
In Vercel project settings, add these environment variables:

#### Clerk Variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
CLERK_SECRET_KEY=sk_test_your_actual_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

#### Supabase Variables:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at: `https://your-project-name.vercel.app`

---

## ✅ Step 4: Verify Deployment

### 4.1 Test Authentication
1. Visit your deployed URL
2. Click "Sign Up" and create a test account
3. Verify email (check your inbox)
4. Sign in successfully

### 4.2 Test Database
1. Sign in to your app
2. Check if events are loading
3. Test tier upgrades
4. Verify all functionality works

### 4.3 Check Vercel Dashboard
1. Go to your Vercel project dashboard
2. Check "Functions" tab for any errors
3. Monitor "Analytics" for performance
4. Check "Logs" for any issues

---

## 🔍 Step 5: Troubleshooting

### Common Issues:

#### Build Errors
- **Missing API Keys**: Make sure all environment variables are set in Vercel
- **Clerk Errors**: Verify your Clerk API keys are correct
- **Supabase Errors**: Check your database connection

#### Runtime Errors
- **Authentication Issues**: Verify Clerk URLs are correct
- **Database Issues**: Check Supabase connection and table structure
- **Environment Variables**: Ensure all variables are set in Vercel

### Debug Steps:
1. Check Vercel build logs
2. Verify environment variables
3. Test locally with production keys
4. Check browser console for errors

---

## 🎯 Step 6: Production Checklist

- [ ] Authentication working (Clerk)
- [ ] Database connected (Supabase)
- [ ] Events loading correctly
- [ ] Tier system functional
- [ ] Responsive design working
- [ ] No console errors
- [ ] Performance optimized
- [ ] SSL certificate active
- [ ] Custom domain (optional)

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test locally with production keys
4. Check browser console for errors
5. Review this guide step by step

---

## 🎉 Congratulations!

Your Event Showcase application is now live and fully functional with:
- ✅ Secure authentication via Clerk
- ✅ Database storage via Supabase
- ✅ Tier-based event access
- ✅ Responsive design
- ✅ Production deployment

**Your live URL**: `https://your-project-name.vercel.app` 