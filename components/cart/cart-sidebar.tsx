"use client"

import { useState } from "react"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "./cart-provider"
import Image from "next/image"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [customerName, setCustomerName] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [observations, setObservations] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("efectivo")

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity)
    }
  }

  const formatPrice = (price: number) => {
    return `S/ ${price.toFixed(2)}`
  }

  const handleSubmitOrder = () => {
    if (!customerName || !customerAddress) {
      alert("Por favor complete los campos obligatorios: Nombre y Dirección")
      return
    }

    // Prepare WhatsApp message
    let message = `*NUEVO PEDIDO*\n\n`
    message += `*Cliente:* ${customerName}\n`
    message += `*Dirección:* ${customerAddress}\n`

    if (observations) {
      message += `*Observaciones:* ${observations}\n`
    }

    message += `*Método de pago:* ${paymentMethod}\n\n`

    message += `*PRODUCTOS:*\n`
    items.forEach((item) => {
      message += `- ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`
    })

    message += `\n*TOTAL:* ${formatPrice(totalPrice)}`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the message
    window.open(`https://wa.me/51999999999?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">Carrito de Compras</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <ShoppingCart className="h-16 w-16 mb-4" />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 min-h-[300px] md:min-h-[400px]">
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 p-2 border rounded-lg">
                      <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{formatPrice(item.price)} c/u</p>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 flex items-center gap-1"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4" />
                    Vaciar carrito
                  </Button>
                  <div className="text-xl font-bold">Total: {formatPrice(totalPrice)}</div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Datos de entrega</h3>

                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      placeholder="Ingresa tu nombre completo"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección de entrega *</Label>
                    <Input
                      id="address"
                      placeholder="Ingresa tu dirección"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations">Observaciones</Label>
                    <Textarea
                      id="observations"
                      placeholder="Instrucciones especiales para tu pedido"
                      value={observations}
                      onChange={(e) => setObservations(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Método de pago</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="yape" id="yape" />
                        <Label htmlFor="yape">Yape</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="plin" id="plin" />
                        <Label htmlFor="plin">Plin</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="bcp" id="bcp" />
                        <Label htmlFor="bcp">BCP</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-2">
                        <RadioGroupItem value="efectivo" id="efectivo" />
                        <Label htmlFor="efectivo">Efectivo</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleSubmitOrder}>
                    Enviar pedido por WhatsApp
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function ShoppingCart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
