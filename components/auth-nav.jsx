import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogIn } from "lucide-react"

export default function AuthNav() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/sign-in">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LogIn className="h-4 w-4" />
          Sign In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button size="sm" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Sign Up
        </Button>
      </Link>
    </div>
  )
} 