"use client"

import { useEffect, useState } from "react"
import EventCard from "./event-card"
import LoadingSpinner from "./loading-spinner"
import { Calendar, AlertCircle, Lock, Unlock } from "lucide-react"
import { createClient } from "@/lib/supabase"

const tierHierarchy = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
}

const demoEvents = [
  {
    id: "1",
    title: "Community Meetup",
    description: "Join our monthly community gathering to network with fellow members and share experiences.",
    event_date: "2024-09-15T18:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Community+Meetup",
    tier: "free",
  },
  {
    id: "2",
    title: "Beginner Workshop",
    description: "Learn the basics in this introductory workshop designed for newcomers to our platform.",
    event_date: "2024-09-22T14:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Beginner+Workshop",
    tier: "free",
  },
  {
    id: "3",
    title: "Advanced Training Session",
    description: "Deep dive into advanced techniques and strategies with our expert instructors.",
    event_date: "2024-09-18T16:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Advanced+Training",
    tier: "silver",
  },
  {
    id: "4",
    title: "Silver Member Exclusive",
    description: "Special event exclusively for Silver tier members featuring guest speakers and networking.",
    event_date: "2024-09-25T19:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Silver+Exclusive",
    tier: "silver",
  },
  {
    id: "5",
    title: "VIP Masterclass",
    description: "Exclusive masterclass with industry leaders sharing insider knowledge and strategies.",
    event_date: "2024-09-20T15:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=VIP+Masterclass",
    tier: "gold",
  },
  {
    id: "6",
    title: "Gold Summit Conference",
    description: "Annual summit featuring keynote speakers, workshops, and premium networking opportunities.",
    event_date: "2024-10-05T09:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Gold+Summit",
    tier: "gold",
  },
  {
    id: "7",
    title: "Platinum Gala Dinner",
    description: "Exclusive black-tie gala dinner with celebrity guests and premium entertainment.",
    event_date: "2024-10-12T19:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Platinum+Gala",
    tier: "platinum",
  },
  {
    id: "8",
    title: "Executive Retreat",
    description: "Ultra-exclusive retreat for Platinum members featuring private consultations and luxury amenities.",
    event_date: "2024-10-20T10:00:00Z",
    image_url: "/placeholder.svg?height=200&width=400&text=Executive+Retreat",
    tier: "platinum",
  },
]

export default function EventGrid() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userTier, setUserTier] = useState("gold")
  const supabase = createClient()

  const isDemoMode =
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "your_clerk_publishable_key"

  useEffect(() => {
    // Load user tier from localStorage
    const savedTier = localStorage.getItem("userTier")
    if (savedTier) {
      setUserTier(savedTier)
    }

    async function fetchEvents() {
      try {
        setLoading(true)

        if (isDemoMode) {
          setTimeout(() => {
            setEvents(demoEvents)
            setLoading(false)
          }, 1000)
        } else {
          const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("event_date", { ascending: true })

          if (error) throw error
          setEvents(data || [])
          setLoading(false)
        }
      } catch (err) {
        console.error("Error fetching events:", err)
        setError("Failed to load events")
        setLoading(false)
      }
    }

    fetchEvents()
  }, [isDemoMode, supabase])

  useEffect(() => {
    if (isDemoMode) {
      const handleTierChange = (event) => {
        setUserTier(event.detail.tier)
      }

      window.addEventListener("tierChanged", handleTierChange)
      return () => {
        window.removeEventListener("tierChanged", handleTierChange)
      }
    }
  }, [isDemoMode])

  const isEventAccessible = (eventTier) => {
    return tierHierarchy[userTier] >= tierHierarchy[eventTier]
  }

  const getAccessibleEventsCount = () => {
    return events.filter(event => isEventAccessible(event.tier)).length
  }

  const getTotalEventsCount = () => {
    return events.length
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Events</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Events Summary */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Available Events</h2>
              <p className="text-sm text-gray-600">
                Showing {getAccessibleEventsCount()} of {getTotalEventsCount()} events for your tier
              </p>
            </div>
          </div>
          
          {/* Tier Access Summary */}
          <div className="flex items-center gap-2 text-sm">
            <Unlock className="h-4 w-4 text-green-500" />
            <span className="text-gray-600">
              Access: {getAccessibleEventsCount()}/{getTotalEventsCount()} events
            </span>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => {
          const accessible = isEventAccessible(event.tier)
          return (
            <div key={event.id} className={`transition-all duration-300 ${accessible ? '' : 'opacity-60'}`}>
              <EventCard 
                event={event} 
                accessible={accessible}
                userTier={userTier}
              />
            </div>
          )
        })}
      </div>

      {/* No Events Message */}
      {events.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Available</h3>
          <p className="text-gray-600">Check back later for upcoming events.</p>
        </div>
      )}
    </div>
  )
}
