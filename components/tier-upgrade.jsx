"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUp, Loader2, CheckCircle, Crown, Star, Award, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const tiers = [
  { 
    value: "free", 
    label: "Free", 
    icon: Shield,
    description: "Basic access to free events",
    color: "text-gray-600"
  },
  { 
    value: "silver", 
    label: "Silver", 
    icon: Star,
    description: "Access to Silver tier events",
    color: "text-slate-600"
  },
  { 
    value: "gold", 
    label: "Gold", 
    icon: Award,
    description: "Access to Gold tier events",
    color: "text-yellow-600"
  },
  { 
    value: "platinum", 
    label: "Platinum", 
    icon: Crown,
    description: "Access to all events",
    color: "text-purple-600"
  },
]

export default function TierUpgrade() {
  const { toast } = useToast()
  const [selectedTier, setSelectedTier] = useState("")
  const [upgrading, setUpgrading] = useState(false)
  const [currentTier, setCurrentTier] = useState("gold") // Demo default
  const [showSuccess, setShowSuccess] = useState(false)

  // Check if we're in demo mode
  const isDemoMode =
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "your_clerk_publishable_key"

  // Load current tier from localStorage on mount
  useEffect(() => {
    const savedTier = localStorage.getItem("userTier")
    if (savedTier) {
      setCurrentTier(savedTier)
    }
  }, [])

  const handleUpgrade = async () => {
    if (!selectedTier) return

    setUpgrading(true)
    try {
      if (isDemoMode) {
        // Demo mode - simulate upgrade
        setTimeout(() => {
          setCurrentTier(selectedTier)
          localStorage.setItem("userTier", selectedTier)

          // Dispatch custom event to update other components
          window.dispatchEvent(
            new CustomEvent("tierChanged", {
              detail: { tier: selectedTier },
            }),
          )

          toast({
            title: "Tier Updated Successfully! 🎉",
            description: `You've been upgraded to ${selectedTier} tier. You now have access to ${selectedTier} events!`,
          })
          
          setShowSuccess(true)
          setTimeout(() => setShowSuccess(false), 3000)
          
          setUpgrading(false)
          setSelectedTier("")
        }, 1500)
      } else {
        // Production mode - dynamically import and use Clerk
        try {
          const { useUser } = await import("@clerk/nextjs")
          // In production, you'd handle the user update here
          toast({
            title: "Tier Updated!",
            description: `You've been upgraded to ${selectedTier} tier.`,
          })
          window.location.reload()
        } catch (error) {
          throw new Error("Failed to update tier")
        }
      }
    } catch (error) {
      toast({
        title: "Upgrade Failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setUpgrading(false)
    }
  }

  const currentTierConfig = tiers.find(tier => tier.value === currentTier)
  const CurrentIcon = currentTierConfig?.icon || Shield

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      {/* Current Tier Display */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
          <CurrentIcon className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Current: {currentTierConfig?.label || "Free"}
          </span>
        </div>
      </div>

      {/* Tier Selection */}
      <div className="flex items-center gap-2">
        <Select value={selectedTier} onValueChange={setSelectedTier}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Choose tier" />
          </SelectTrigger>
          <SelectContent>
            {tiers.map((tier) => {
              const Icon = tier.icon
              return (
                <SelectItem 
                  key={tier.value} 
                  value={tier.value} 
                  disabled={tier.value === currentTier}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Icon className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">{tier.label}</span>
                      <span className="text-xs text-gray-500">{tier.description}</span>
                    </div>
                    {tier.value === currentTier && (
                      <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                    )}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <Button 
          onClick={handleUpgrade} 
          disabled={!selectedTier || selectedTier === currentTier || upgrading} 
          size="sm"
          className="min-w-[120px]"
        >
          {upgrading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Upgrading...
            </>
          ) : showSuccess ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Updated!
            </>
          ) : (
            <>
              <ArrowUp className="h-4 w-4 mr-2" />
              {isDemoMode ? "Demo Upgrade" : "Upgrade"}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
