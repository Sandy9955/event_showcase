import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

export default function DemoModeHeader() {
  return (
    <div className="bg-blue-50 border-b border-blue-200 px-4 py-3">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-blue-800">Demo Mode - This is a preview without authentication</span>
        <Badge variant="outline" className="text-blue-600 border-blue-300">
          Preview
        </Badge>
      </div>
    </div>
  )
}
