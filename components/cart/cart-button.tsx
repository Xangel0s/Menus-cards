"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useState, useEffect } from "react"

interface CartButtonProps {
  onClick: () => void
}

export function CartButton({ onClick }: CartButtonProps) {
  const { totalItems } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)
  const [prevCount, setPrevCount] = useState(totalItems)

  useEffect(() => {
    if (totalItems > prevCount) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
    setPrevCount(totalItems)
  }, [totalItems, prevCount])

  return (
    <div className="relative">
      <Button
        onClick={onClick}
        variant="ghost"
        size="icon"
        className="relative bg-rose-100 hover:bg-rose-200 text-rose-600 h-12 w-12 rounded-full"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {isAnimating && <span className="absolute -top-4 -right-2 text-rose-600 font-bold animate-bounce">+1</span>}
    </div>
  )
}
