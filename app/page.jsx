import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import EventGrid from "@/components/event-grid"
import UserTierBadge from "@/components/user-tier-badge"
import TierUpgrade from "@/components/tier-upgrade"
import ProductionUserBadge from "@/components/production-user-badge"
import ProductionTierUpgrade from "@/components/production-tier-upgrade"
import SetupGuide from "@/components/setup-guide"
import DemoModeHeader from "@/components/demo-mode-header"
import AuthNav from "@/components/auth-nav"
import LandingPage from "@/components/landing-page"

export default async function HomePage() {
  // Check if environment variables are properly configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  const isClerkConfigured = clerkPublishableKey && clerkPublishableKey !== "your_clerk_publishable_key"
  const isSupabaseConfigured = supabaseUrl && supabaseUrl !== "your_supabase_url"

  // Demo mode - show the app without authentication if neither is configured
  const isDemoMode = !isClerkConfigured

  // Show setup guide if trying to use production mode but not fully configured
  if (!isDemoMode && !isSupabaseConfigured) {
    return <SetupGuide />
  }

  // Demo mode - show the app without authentication
  if (isDemoMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <DemoModeHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Showcase</h1>
              <p className="text-gray-600">Discover exclusive events based on your membership tier</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <UserTierBadge />
              <TierUpgrade />
              <AuthNav />
            </div>
          </div>

          <EventGrid />
        </div>
      </div>
    )
  }

  // Production mode with authentication
  const { userId } = await auth()

  if (!userId) {
    return <LandingPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Showcase</h1>
            <p className="text-gray-600">Discover exclusive events based on your membership tier</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <ProductionUserBadge />
            <ProductionTierUpgrade />
          </div>
        </div>

        <EventGrid />
      </div>
    </div>
  )
}
