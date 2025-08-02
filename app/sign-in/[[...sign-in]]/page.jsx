import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowLeft, Calendar, Shield } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-2 sm:mr-3" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Event Showcase</h1>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Welcome Back</h2>
            <p className="text-sm sm:text-base text-gray-600">Sign in to access your exclusive events and content</p>
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-green-900 mb-1">Secure Sign In</h3>
                <p className="text-xs sm:text-sm text-green-700">
                  Your account is protected with enterprise-grade security. Sign in safely with your credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none p-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors w-full sm:w-auto",
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm w-full",
                  footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
                  formFieldInput: "border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg py-3 px-4 transition-colors text-sm sm:text-base",
                  formFieldLabel: "text-gray-700 font-medium text-sm",
                  formFieldLabelRow: "mb-2",
                  formField: "mb-4 sm:mb-6",
                  form: "space-y-4",
                  dividerLine: "bg-gray-300",
                  dividerText: "text-gray-500 font-medium text-sm",
                  formFieldAction: "text-blue-600 hover:text-blue-700 text-sm",
                  formFieldActionLink: "text-blue-600 hover:text-blue-700 font-medium",
                  formFieldInputShowPasswordButton: "text-gray-500 hover:text-gray-700",
                  formFieldInputShowPasswordIcon: "text-gray-500",
                  formResendCodeLink: "text-blue-600 hover:text-blue-700",
                  formFieldInput__identifier: "placeholder-gray-400",
                  formFieldInput__password: "placeholder-gray-400",
                  formFieldInput__phoneNumber: "placeholder-gray-400",
                  formFieldInput__username: "placeholder-gray-400",
                  formFieldError: "text-red-600 text-sm mt-1",
                  formFieldErrorText: "text-red-600 text-sm",
                  formFieldSuccess: "text-green-600 text-sm mt-1",
                  formFieldSuccessText: "text-green-600 text-sm",
                },
                variables: {
                  colorPrimary: "#2563eb",
                  colorText: "#374151",
                  colorTextSecondary: "#6b7280",
                  colorBackground: "#ffffff",
                  colorInputBackground: "#ffffff",
                  colorInputText: "#374151",
                },
              }}
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              afterSignInUrl="/"
              afterSignUpUrl="/"
            />
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm sm:text-base text-gray-600">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
