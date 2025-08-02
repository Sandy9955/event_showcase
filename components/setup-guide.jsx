import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Key, Database, Settings } from "lucide-react";

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Demo Mode Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">Demo Mode Available</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            You can preview the application functionality without setting up authentication. The demo shows all features
            with sample data.
          </p>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Setup Required</h1>
          <p className="text-gray-600">Configure your environment variables to get started</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Clerk Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Clerk Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge variant="outline">Step 1</Badge>
                <p className="text-sm">
                  Create a free account at{" "}
                  <a
                    href="https://clerk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    clerk.com <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">Step 2</Badge>
                <p className="text-sm">Create a new application in your Clerk dashboard</p>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">Step 3</Badge>
                <p className="text-sm">Copy your API keys and add them to .env.local:</p>
                <div className="bg-gray-100 p-3 rounded-md text-xs font-mono">
                  <div>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...</div>
                  <div>CLERK_SECRET_KEY=sk_test_...</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supabase Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Supabase Database
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge variant="outline">Step 1</Badge>
                <p className="text-sm">
                  Create a free account at{" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    supabase.com <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">Step 2</Badge>
                <p className="text-sm">Create a new project</p>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">Step 3</Badge>
                <p className="text-sm">Add your project URL and anon key to .env.local:</p>
                <div className="bg-gray-100 p-3 rounded-md text-xs font-mono">
                  <div>NEXT_PUBLIC_SUPABASE_URL=https://...</div>
                  <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...</div>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">Step 4</Badge>
                <p className="text-sm">
                  Run the SQL script from scripts/setup-database.sql in your Supabase SQL editor
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complete .env.local example */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Complete .env.local File
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">
              Create a .env.local file in your project root with these variables:
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-md text-sm font-mono">
              <div className="text-gray-500"># Clerk Configuration</div>
              <div>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here</div>
              <div>CLERK_SECRET_KEY=sk_test_your_actual_secret_here</div>
              <div>NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in</div>
              <div>NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up</div>
              <div className="mt-2 text-gray-500"># Supabase Configuration</div>
              <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              After adding these variables, restart your development server with: npm run dev
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
