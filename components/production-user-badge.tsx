"use client"

import { useUser } from "@clerk/nextjs"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Award, Shield } from "lucide-react"

const tierConfig = {
  free: {
    icon: Shield,
    color: "bg-gray-100 text-gray-800 border-gray-200",
    label: "Free",
  },
  silver: {
    icon: Star,
    color: "bg-slate-100 text-slate-800 border-slate-200",
    label: "Silver",
  },
  gold: {
    icon: Award,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    label: "Gold",
  },
  platinum: {
    icon: Crown,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    label: "Platinum",
  },
}

export default function ProductionUserBadge() {
  const { user } = useUser()

  if (!user) return null

  const userTier = (user.publicMetadata?.tier as string) || "free"
  const config = tierConfig[userTier as keyof typeof tierConfig]
  const Icon = config.icon

  return (
    <Badge className={`${config.color} px-3 py-1 text-sm font-medium`}>
      <Icon className="h-4 w-4 mr-1" />
      {config.label} Member
    </Badge>
  )
}
