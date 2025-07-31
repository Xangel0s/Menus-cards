"use client"

import { useState } from "react"
import { X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import Image from "next/image"

interface QuantityModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: number
    name: string
    description: string
    price: number
    image: string
  }
}

export function QuantityModal({ isOpen, onClose, product }: QuantityModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    })
    onClose()
    setQuantity(1) // Reset quantity for next time
  }

  const formatPrice = (price: number) => {
    return `S/ ${price.toFixed(2)}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute top-2 right-2 z-10">
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full bg-white/80">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative h-48 w-full">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          <p className="text-lg font-bold mt-2">{formatPrice(product.price)}</p>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Cantidad:</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-xl font-bold">{formatPrice(product.price * quantity)}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white" onClick={handleAddToCart}>
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
