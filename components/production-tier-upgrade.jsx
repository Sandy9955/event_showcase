"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const tiers = [
  { value: "free", label: "Free", price: "$0" },
  { value: "silver", label: "Silver", price: "$9.99/month" },
  { value: "gold", label: "Gold", price: "$19.99/month" },
  { value: "platinum", label: "Platinum", price: "$49.99/month" },
]

export default function ProductionTierUpgrade() {
  const { user, isLoaded } = useUser()
  const [selectedTier, setSelectedTier] = useState("")
  const [isUpgrading, setIsUpgrading] = useState(false)
  const { toast } = useToast()

  if (!isLoaded) {
    return <div className="animate-pulse h-8 bg-gray-200 rounded"></div>
  }

  if (!user) {
    return null
  }

  const handleUpgrade = async () => {
    if (!selectedTier) {
      toast({
        title: "Please select a tier",
        description: "Choose a tier to upgrade to.",
        variant: "destructive",
      })
      return
    }

    setIsUpgrading(true)

    try {
      // In a real application, you would make an API call here
      // to update the user's tier in your database
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call

      toast({
        title: "Tier upgraded successfully!",
        description: `You are now a ${selectedTier} member.`,
      })

      // Refresh the page to show updated tier
      window.location.reload()
    } catch (error) {
      toast({
        title: "Upgrade failed",
        description: "There was an error upgrading your tier. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpgrading(false)
    }
  }

  const currentTier = (user?.publicMetadata?.tier) || "free"

  return (
    <div className="flex items-center gap-2">
      <Select value={selectedTier} onValueChange={setSelectedTier}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select tier" />
        </SelectTrigger>
        <SelectContent>
          {tiers.map((tier) => (
            <SelectItem key={tier.value} value={tier.value}>
              {tier.label} - {tier.price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        onClick={handleUpgrade}
        disabled={isUpgrading || selectedTier === currentTier}
        size="sm"
      >
        {isUpgrading ? "Upgrading..." : "Upgrade"}
      </Button>
    </div>
  )
}
