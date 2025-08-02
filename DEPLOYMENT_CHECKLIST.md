# ✅ Deployment Checklist

## 🔧 Pre-Deployment Setup

### GitHub Repository
- [ ] Create GitHub account (if not exists)
- [ ] Create new repository: `event-showcase`
- [ ] Push code to GitHub

### Clerk Authentication
- [ ] Create Clerk account at [clerk.dev](https://clerk.dev)
- [ ] Create new application: "Event Showcase"
- [ ] Get Publishable Key: `pk_test_...`
- [ ] Get Secret Key: `sk_test_...`
- [ ] Configure URLs:
  - Sign-in: `/sign-in`
  - Sign-up: `/sign-up`

### Supabase Database
- [ ] Create Supabase account at [supabase.com](https://supabase.com)
- [ ] Create new project: "event-showcase-db"
- [ ] Get Project URL: `https://your-project-id.supabase.co`
- [ ] Get Anon Key: `eyJ...`
- [ ] Run database setup script (`scripts/setup-database.sql`)

## 🌐 Vercel Deployment

### Project Setup
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "New Project"
- [ ] Import GitHub repository
- [ ] Configure settings:
  - Framework: Next.js
  - Root Directory: `./`
  - Build Command: `npm run build`
  - Output Directory: `.next`

### Environment Variables
Add these in Vercel project settings:

#### Clerk Variables
- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_test_your_key`
- [ ] `CLERK_SECRET_KEY` = `sk_test_your_key`
- [ ] `NEXT_PUBLIC_CLERK_SIGN_IN_URL` = `/sign-in`
- [ ] `NEXT_PUBLIC_CLERK_SIGN_UP_URL` = `/sign-up`

#### Supabase Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = `https://your-project-id.supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `your_anon_key`

### Deploy
- [ ] Click "Deploy"
- [ ] Wait for build completion
- [ ] Get live URL: `https://your-project.vercel.app`

## ✅ Post-Deployment Testing

### Authentication
- [ ] Visit deployed URL
- [ ] Test sign-up functionality
- [ ] Verify email confirmation
- [ ] Test sign-in functionality
- [ ] Test password reset

### Database & Events
- [ ] Check if events are loading
- [ ] Test tier upgrade functionality
- [ ] Verify event filtering by tier
- [ ] Test responsive design

### Performance
- [ ] Check Vercel dashboard for errors
- [ ] Monitor function logs
- [ ] Test on mobile devices
- [ ] Verify SSL certificate

## 🎯 Final Steps

- [ ] Update README.md with live URL
- [ ] Test all user flows
- [ ] Monitor for any issues
- [ ] Share your live application!

---

## 📞 If You Get Stuck

1. Check the detailed `DEPLOYMENT_GUIDE.md`
2. Verify all environment variables are set
3. Check Vercel build logs for errors
4. Test locally with production keys
5. Review browser console for errors

**Your Event Showcase will be live at**: `https://your-project.vercel.app` 