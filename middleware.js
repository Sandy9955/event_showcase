// Check if Clerk is properly configured
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
const isClerkConfigured = clerkPublishableKey && 
  clerkPublishableKey !== "your_clerk_publishable_key" &&
  clerkPublishableKey !== "pk_test_your_actual_publishable_key_here"

// Export the appropriate middleware
export default isClerkConfigured 
  ? require('@clerk/nextjs/server').clerkMiddleware()
  : function middleware(request) {
      return
    }

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
} 