import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tier Event Showcase",
  description: "A showcase of tier-based events and features",
}

export default function RootLayout({ children }) {
  // Check if Clerk is properly configured
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const isClerkConfigured = clerkPublishableKey && 
    clerkPublishableKey !== "your_clerk_publishable_key" &&
    clerkPublishableKey !== "pk_test_your_actual_publishable_key_here"

  // Conditionally import and use ClerkProvider
  if (isClerkConfigured) {
    const { ClerkProvider } = require("@clerk/nextjs")
    return (
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    )
  }

  // Fallback without ClerkProvider for demo mode
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
