import { Calendar, Lock, Unlock, Crown, Star, Award, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const tierIcons = {
  free: Shield,
  silver: Star,
  gold: Award,
  platinum: Crown,
}

const tierColors = {
  free: "bg-gray-100 text-gray-800 border-gray-200",
  silver: "bg-slate-100 text-slate-800 border-slate-200",
  gold: "bg-yellow-100 text-yellow-800 border-yellow-200",
  platinum: "bg-purple-100 text-purple-800 border-purple-200",
}

export default function EventCard({ event, accessible, userTier }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const TierIcon = tierIcons[event.tier] || Shield

  return (
    <Card
      className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
        accessible ? "hover:scale-105 border-blue-200" : "opacity-75 border-gray-200"
      }`}
    >
      <div className="relative">
        <Image
          src={event.image_url || "/placeholder.svg"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        
        {/* Accessibility Overlay */}
        {!accessible && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <Lock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium mb-1">Upgrade Required</p>
              <p className="text-xs opacity-90">Upgrade to {event.tier} tier to access this event</p>
            </div>
          </div>
        )}

        {/* Tier Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <Badge className={`${tierColors[event.tier]} capitalize flex items-center gap-1`}>
            <TierIcon className="h-3 w-3" />
            {event.tier}
          </Badge>
        </div>

        {/* Access Status */}
        <div className="absolute top-3 left-3">
          {accessible ? (
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              <Unlock className="h-3 w-3" />
              Accessible
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              <Lock className="h-3 w-3" />
              Locked
            </div>
          )}
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{event.title}</h3>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{event.description}</p>
        
        {/* Tier Access Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>Required Tier: {event.tier}</span>
          <span>Your Tier: {userTier}</span>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          {formatDate(event.event_date)}
        </div>
      </CardFooter>
    </Card>
  )
}
