"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface MenuCardProps {
  item: MenuItem
  onAddToCart: () => void
}

export function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-bold">{item.name}</h4>
          <span className="font-bold text-rose-600">S/ {item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
        <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700 text-white" onClick={onAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}
