"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Award, Shield, CheckCircle } from "lucide-react";

const tierConfig = {
  free: {
    icon: Shield,
    color: "bg-gray-100 text-gray-800 border-gray-200",
    label: "Free",
    description: "Basic Member"
  },
  silver: {
    icon: Star,
    color: "bg-slate-100 text-slate-800 border-slate-200",
    label: "Silver",
    description: "Silver Member"
  },
  gold: {
    icon: Award,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    label: "Gold",
    description: "Gold Member"
  },
  platinum: {
    icon: Crown,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    label: "Platinum",
    description: "Platinum Member"
  },
};

export default function UserTierBadge() {
  const [userTier, setUserTier] = useState("gold"); // Demo default
  const [isUpdating, setIsUpdating] = useState(false);

  const isDemoMode =
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "your_clerk_publishable_key";

  useEffect(() => {
    // Load tier from localStorage on mount
    const savedTier = localStorage.getItem("userTier");
    if (savedTier) {
      setUserTier(savedTier);
    }

    if (isDemoMode) {
      const handleTierChange = (event) => {
        setIsUpdating(true);
        setUserTier(event.detail.tier);
        
        // Show updating animation briefly
        setTimeout(() => {
          setIsUpdating(false);
        }, 1000);
      };

      window.addEventListener("tierChanged", handleTierChange);
      return () => {
        window.removeEventListener("tierChanged", handleTierChange);
      };
    } else {
      const loadClerkUser = async () => {
        try {
          const { useUser } = await import("@clerk/nextjs");
          // In a real app, you'd fetch and apply user tier here
        } catch (error) {
          console.error("Failed to load Clerk:", error);
        }
      };
      loadClerkUser();
    }
  }, [isDemoMode]);

  const config = tierConfig[userTier] || tierConfig["free"];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-2">
      <Badge className={`${config.color} px-3 py-1.5 text-sm font-medium transition-all duration-300 ${isUpdating ? 'scale-105' : ''}`}>
        <Icon className="h-4 w-4 mr-2" />
        {config.label} Member
        {isUpdating && <CheckCircle className="h-4 w-4 ml-2 animate-pulse" />}
      </Badge>
      
      {/* Tier Description */}
      <div className="hidden sm:block">
        <span className="text-xs text-gray-500">
          {config.description}
        </span>
      </div>
    </div>
  );
}
