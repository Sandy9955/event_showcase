import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowLeft, Calendar, Shield, CheckCircle } from "lucide-react"

export default function SignUpPage() {
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
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Create Your Account</h2>
            <p className="text-sm sm:text-base text-gray-600">Join thousands of members and unlock exclusive events</p>
          </div>

          {/* Password Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-blue-900 mb-1">Password Security</h3>
                <p className="text-xs sm:text-sm text-blue-700">
                  For your security, we check passwords against known data breaches. If you see an error, please choose a different password.
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <SignUp
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
                  formFieldInput__firstName: "placeholder-gray-400",
                  formFieldInput__lastName: "placeholder-gray-400",
                  formFieldError: "text-red-600 text-sm mt-1",
                  formFieldErrorText: "text-red-600 text-sm",
                  formFieldSuccess: "text-green-600 text-sm mt-1",
                  formFieldSuccessText: "text-green-600 text-sm",
                  // Enhanced error styling for password breach
                  formFieldError__password: "text-red-600 text-sm mt-1 bg-red-50 border border-red-200 rounded p-2",
                  formFieldErrorText__password: "text-red-600 text-sm flex items-start space-x-2",
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
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              afterSignInUrl="/"
              afterSignUpUrl="/"
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm sm:text-base text-gray-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
