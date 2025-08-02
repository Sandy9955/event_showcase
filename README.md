# Tier-Based Event Showcase

A responsive web application that displays events based on user membership tiers using Next.js 14, Clerk.dev, and Supabase.

## 🚀 Quick Start

### 1. Clone and Install
\`\`\`bash
git clone <repository-url>
cd tier-event-showcase
npm install
\`\`\`

### 2. Set Up Clerk Authentication

1. Go to [clerk.com](https://clerk.com) and create a free account
2. Create a new application
3. In your Clerk dashboard, go to "API Keys"
4. Copy your Publishable Key and Secret Key

### 3. Set Up Supabase Database

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Settings → API to find your Project URL and anon public key
4. In the SQL Editor, run the script from `scripts/setup-database.sql`

### 4. Configure Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
# Clerk Configuration (Replace with your actual keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase Configuration (Replace with your actual values)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key_here
\`\`\`

### 5. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` - you should see the setup guide if environment variables aren't configured, or the sign-in page if they are.

## 🚀 Features

- **Authentication**: Secure login/signup with Clerk.dev
- **Tier-Based Access**: Events filtered by user membership tier
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Dynamic tier upgrades with immediate effect
- **Database Integration**: PostgreSQL with Supabase
- **Modern UI**: Clean, professional design with loading states

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui

## 📋 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Clerk.dev account
- Supabase account

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd tier-event-showcase
npm install
\`\`\`

### 2. Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 3. Database Setup

1. Create a new Supabase project
2. Run the SQL script from \`scripts/setup-database.sql\` in your Supabase SQL editor
3. This will create the events table and seed it with sample data

### 4. Clerk Configuration

1. Create a new Clerk application
2. Configure the sign-in and sign-up URLs:
   - Sign-in URL: \`/sign-in\`
   - Sign-up URL: \`/sign-up\`
3. Add the environment variables to your \`.env.local\`

### 5. Run the Application

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to see the application.

## 👥 Demo User Credentials

Since this uses Clerk.dev authentication, you'll need to create accounts through the sign-up process. Here are the recommended test scenarios:

### Testing Different Tiers

1. **Free Tier User**: Sign up normally (default tier is 'free')
2. **Silver Tier User**: Sign up, then use the tier upgrade feature to upgrade to 'silver'
3. **Gold Tier User**: Sign up, then upgrade to 'gold'
4. **Platinum Tier User**: Sign up, then upgrade to 'platinum'

## 🎯 Key Features Explained

### Tier-Based Filtering

- **Free**: Can see only Free tier events
- **Silver**: Can see Free + Silver tier events
- **Gold**: Can see Free + Silver + Gold tier events
- **Platinum**: Can see all events

### Event Display

- **Accessible Events**: Full color, interactive cards
- **Locked Events**: Grayed out with lock icon and upgrade message
- **Tier Badges**: Color-coded badges for each tier level

### Tier Upgrade System

- Dropdown to select new tier
- Instant upgrade via Clerk metadata
- Page refresh to show newly accessible events

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Main dashboard
│   ├── sign-in/                 # Clerk sign-in page
│   ├── sign-up/                 # Clerk sign-up page
│   └── layout.tsx               # Root layout with Clerk provider
├── components/
│   ├── event-grid.tsx           # Main event display component
│   ├── event-card.tsx           # Individual event card
│   ├── user-tier-badge.tsx      # User tier display
│   ├── tier-upgrade.tsx         # Tier upgrade functionality
│   └── loading-spinner.tsx      # Loading state component
├── lib/
│   └── supabase.ts              # Supabase client configuration
└── scripts/
    └── setup-database.sql       # Database schema and seed data
\`\`\`

## 🔒 Security Features

- Authentication required for all event pages
- Tier-based access control
- Secure environment variable handling
- Input validation and error handling

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

Make sure to add all environment variables from \`.env.local\` to your Vercel project settings.

## 🎨 Customization

### Adding New Tiers

1. Update the \`tierHierarchy\` object in \`event-grid.tsx\`
2. Add new tier colors in \`event-card.tsx\`
3. Update the tier configuration in \`user-tier-badge.tsx\`
4. Modify the database enum if needed

### Styling Changes

The project uses Tailwind CSS with shadcn/ui components. Customize:

- Colors in \`tailwind.config.ts\`
- Component styles in individual component files
- Global styles in \`app/globals.css\`

## 🐛 Troubleshooting

### Common Issues

**"Invalid publishable key" error:**
- Make sure you've replaced `your_clerk_publishable_key` with your actual Clerk publishable key
- Ensure the key starts with `pk_test_` or `pk_live_`
- Restart your development server after adding environment variables

**"Missing Supabase URL" error:**
- Replace `your_supabase_url` with your actual Supabase project URL
- The URL should look like: `https://abcdefghijklmnop.supabase.co`

**Events not loading:**
- Make sure you've run the database setup script in Supabase
- Check that your Supabase anon key is correct

### Getting Your Keys

**Clerk Keys:**
1. Dashboard → API Keys
2. Copy "Publishable key" → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
3. Copy "Secret key" → `CLERK_SECRET_KEY`

**Supabase Keys:**
1. Project Settings → API
2. Copy "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
3. Copy "anon public" key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📄 License

This project is created for the Psypher AI technical assessment.

## 🤝 Support

For questions or issues, please reach out to the development team.

## 🎯 Testing the Application

1. **Sign Up**: Create a new account (starts with 'free' tier)
2. **View Events**: See free tier events only
3. **Upgrade Tier**: Use the upgrade dropdown to change to silver/gold/platinum
4. **See More Events**: Notice how more events become available

## 📱 Features

- ✅ Clerk.dev authentication
- ✅ Tier-based event filtering
- ✅ Responsive design
- ✅ Real-time tier upgrades
- ✅ Loading states and error handling
- ✅ Mobile-friendly interface

## 🚀 Deployment

Ready to deploy to Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The application will show helpful setup instructions if environment variables are missing.
