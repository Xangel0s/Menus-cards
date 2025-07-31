"use client"

import { useState, useEffect, useRef } from "react"
import { CartButton } from "@/components/cart/cart-button"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { QuantityModal } from "@/components/cart/quantity-modal"
import { CartProvider } from "@/components/cart/cart-provider"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, X } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isQuantityModalOpen, setIsQuantityModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categoryRef = useRef<HTMLDivElement>(null)

  const carouselItems = [
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "Pollo a la Brasa",
      description: "Nuestro plato estrella con papas y ensalada",
      category: "Combos de Pollo a la Brasa",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "Combos Familiares",
      description: "Perfectos para compartir con toda la familia",
      category: "Combos de Pollo a la Brasa",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      title: "Platos Criollos",
      description: "Auténtica sazón peruana en cada bocado",
      category: "Platos Principales",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleAddToCart = (product: any) => {
    setSelectedProduct(product)
    setIsQuantityModalOpen(true)
  }

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)

    // Scroll to the category section if it's not already visible
    if (activeCategory !== category && categoryRef.current) {
      setTimeout(() => {
        categoryRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const handleCarouselItemClick = (category: string) => {
    setActiveCategory(category)

    // Find the section in the page and scroll to it
    const element = document.getElementById(category.replace(/\s+/g, "-").toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Additional menu items for more variety
  const menuItems = [
    {
      category: "Entradas",
      items: [
        {
          id: 1,
          name: "Tequeños",
          description: "6 unidades de tequeños rellenos de queso con salsa guacamole",
          price: 15.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 2,
          name: "Causa Limeña",
          description: "Tradicional causa rellena de pollo con mayonesa",
          price: 18.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 101,
          name: "Anticuchos",
          description: "Brochetas de corazón de res marinadas y a la parrilla",
          price: 22.0,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 102,
          name: "Ceviche de Champiñones",
          description: "Alternativa vegetariana de nuestro ceviche tradicional",
          price: 19.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 113,
          name: "Papa a la Huancaína",
          description: "Papas cocidas bañadas en salsa de ají amarillo y queso",
          price: 16.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 114,
          name: "Choritos a la Chalaca",
          description: "Mejillones frescos con salsa criolla picante",
          price: 24.0,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      category: "Platos Principales",
      items: [
        {
          id: 3,
          name: "Lomo Saltado",
          description: "Clásico lomo saltado con papas fritas y arroz",
          price: 32.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 4,
          name: "Ají de Gallina",
          description: "Cremoso ají de gallina acompañado de arroz blanco",
          price: 28.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 5,
          name: "Ceviche Mixto",
          description: "Ceviche de pescado y mariscos con camote y choclo",
          price: 35.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 103,
          name: "Arroz con Mariscos",
          description: "Arroz cremoso con variedad de mariscos frescos",
          price: 38.0,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 104,
          name: "Tacu Tacu con Lomo",
          description: "Tradicional tacu tacu acompañado de lomo fino",
          price: 36.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 110,
          name: "Seco de Cordero",
          description: "Tradicional seco de cordero con frejoles y arroz",
          price: 34.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 111,
          name: "Pescado a lo Macho",
          description: "Filete de pescado bañado en salsa de mariscos",
          price: 39.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 112,
          name: "Carapulcra",
          description: "Guiso tradicional de papa seca con carne de cerdo",
          price: 28.9,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      category: "Combos de Pollo a la Brasa",
      items: [
        {
          id: 10,
          name: "1/4 Pollo a la Brasa",
          description: "Cuarto de pollo a la brasa con papas fritas y ensalada criolla",
          price: 22.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 11,
          name: "1/2 Pollo a la Brasa",
          description: "Medio pollo a la brasa con papas fritas, ensalada y cremas",
          price: 39.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 12,
          name: "Pollo Entero",
          description: "Pollo entero a la brasa con papas fritas, ensalada grande y 4 cremas",
          price: 69.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 13,
          name: "Combo Familiar",
          description: "Pollo entero, porción grande de papas, ensalada familiar, gaseosa de 1.5L y 4 cremas",
          price: 89.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 14,
          name: "Combo Personal Especial",
          description: "1/4 de pollo a la brasa, papas fritas, ensalada, chicha morada y cremas",
          price: 29.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 105,
          name: "Combo Dúo",
          description: "1/2 pollo a la brasa, papas medianas, ensalada, 2 bebidas y 2 cremas",
          price: 49.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 115,
          name: "Combo Ejecutivo",
          description: "1/4 de pollo a la brasa, arroz chaufa, papas fritas y ensalada",
          price: 32.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 116,
          name: "Combo Parrillero",
          description: "1/4 de pollo a la brasa, chorizo, anticucho y papas fritas",
          price: 38.5,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      category: "Postres",
      items: [
        {
          id: 6,
          name: "Suspiro a la Limeña",
          description: "Tradicional postre limeño con manjar blanco y merengue",
          price: 12.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 7,
          name: "Tres Leches",
          description: "Bizcocho bañado en tres tipos de leche con cobertura de merengue",
          price: 14.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 106,
          name: "Picarones",
          description: "Tradicionales donuts peruanos con miel de chancaca",
          price: 10.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 107,
          name: "Mazamorra Morada",
          description: "Postre típico a base de maíz morado y frutas",
          price: 9.9,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      category: "Bebidas",
      items: [
        {
          id: 8,
          name: "Chicha Morada",
          description: "Refrescante bebida de maíz morado con frutas",
          price: 8.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 9,
          name: "Limonada",
          description: "Limonada fresca con hierba buena",
          price: 7.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 108,
          name: "Maracuyá Frozen",
          description: "Bebida helada de maracuyá",
          price: 9.5,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 109,
          name: "Inca Kola",
          description: "La bebida tradicional peruana de 500ml",
          price: 5.0,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  ]

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-10 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-rose-600">Sabores Peruanos</h1>
            <CartButton onClick={() => setIsCartOpen(true)} />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Logo and social section with background banner */}
          <div className="relative mb-10">
            {/* Background banner */}
            <div className="absolute inset-0 h-96 overflow-hidden -z-10">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Banner Background"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
            </div>

            <div className="flex flex-col items-center pt-8 pb-16">
              {/* Larger round logo image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-rose-600 mb-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sabores Peruanos Logo"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>

              {/* Restaurant name and type */}
              <h2 className="text-3xl font-bold text-rose-600 mb-1">Sabores Peruanos</h2>
              <p className="text-xl font-medium text-gray-700 mb-4">Pollería & Restaurante</p>

              {/* Food phrase */}
              <p className="text-lg italic text-gray-700 mb-8">
                "El sabor auténtico de la cocina peruana en cada bocado"
              </p>

              {/* Larger and longer social media buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  variant="outline"
                  className="rounded-full h-14 px-6 border-2 border-rose-600 text-rose-600 hover:bg-rose-100 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-14 px-6 border-2 border-rose-600 text-rose-600 hover:bg-rose-100 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-14 px-6 border-2 border-rose-600 text-rose-600 hover:bg-rose-100 flex items-center gap-2"
                >
                  <svg
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
                    <path d="M9 12.2L11 14.75L15 9.75" />
                    <path d="M12 2c-3.69 0-5.11.46-5.73.65a3.25 3.25 0 0 0-2.5 2.84c-.08 1.43-.2 4.04.4 6.78.6 2.74 4.47 5.64 5.63 6.67a1.21 1.21 0 0 0 1.5 0c1.16-1.03 5.02-3.93 5.62-6.67.6-2.74.49-5.35.4-6.78a3.25 3.25 0 0 0-2.5-2.84C13.11 2.46 15.69 2 12 2Z" />
                  </svg>
                  TikTok
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-14 px-6 border-2 border-rose-600 text-rose-600 hover:bg-rose-100 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Ubicación
                </Button>
              </div>

              {/* Call button */}
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-14 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Llamar
              </Button>
            </div>
          </div>

          {/* Carousel section */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className="relative h-64 md:h-80 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCarouselItemClick(item.category)
                      }}
                    >
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 hover:from-black/80 transition-all">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <p className="text-white/90">{item.description}</p>
                        <Button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white w-fit">Ver más</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border-none shadow-md hover:bg-white"
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border-none shadow-md hover:bg-white"
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente</span>
            </Button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "w-8 bg-rose-600" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Categories section */}
          <div className="mb-16" ref={categoryRef}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Categorías</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {menuItems.map((category) => (
                <div
                  key={category.category}
                  className={`rounded-lg p-4 text-center cursor-pointer transition-all ${
                    activeCategory === category.category
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-white hover:bg-rose-100 shadow"
                  }`}
                  onClick={() => handleCategoryClick(category.category)}
                >
                  <h3 className="font-bold">{category.category}</h3>
                  <p className="text-sm mt-1">{category.items.length} platos</p>
                </div>
              ))}
            </div>

            {/* Category preview modal */}
            {activeCategory && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50" onClick={() => setActiveCategory(null)} />

                {/* Modal */}
                <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                  <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{activeCategory}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setActiveCategory(null)}
                      className="h-8 w-8 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {menuItems
                        .find((cat) => cat.category === activeCategory)
                        ?.items.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
                            onClick={() => handleAddToCart(item)}
                          >
                            <div className="relative h-40 w-full">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex justify-between">
                                <h4 className="font-bold">{item.name}</h4>
                                <span className="font-bold text-rose-600">S/ {item.price.toFixed(2)}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                              <Button
                                className="w-full mt-3 bg-rose-600 hover:bg-rose-700 text-white"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleAddToCart(item)
                                }}
                              >
                                Agregar
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestro Menú</h2>

          {menuItems.map((section) => (
            <div id={section.category.replace(/\s+/g, "-").toLowerCase()} key={section.category} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">{section.category}</h3>

              {/* Category slider */}
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-[280px] max-w-[280px] snap-start bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
                      onClick={() => handleAddToCart(item)}
                    >
                      <div className="relative h-40 w-full">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between">
                          <h4 className="font-bold">{item.name}</h4>
                          <span className="font-bold text-rose-600">S/ {item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                        <Button
                          className="w-full mt-3 bg-rose-600 hover:bg-rose-700 text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(item)
                          }}
                        >
                          Agregar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 bottom-4 bg-gradient-to-l from-white via-white/80 to-transparent pr-2 pl-10 py-2">
                  <span className="text-sm text-gray-500">Desliza para ver más →</span>
                </div>
                <Button
                  variant="outline"
                  className="absolute right-0 top-[-50px] bg-white"
                  onClick={() => setActiveCategory(section.category)}
                >
                  Ver todos
                </Button>
              </div>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sabores Peruanos</h3>
                <p className="mb-4">
                  El auténtico sabor de la cocina peruana en cada bocado. Disfruta de nuestros platos tradicionales
                  preparados con los mejores ingredientes.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-rose-400">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-rose-400">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="hover:text-rose-400">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-rose-400">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Horarios</h3>
                <ul className="space-y-2">
                  <li>Lunes - Jueves: 12:00 - 22:00</li>
                  <li>Viernes - Sábado: 12:00 - 23:00</li>
                  <li>Domingo: 12:00 - 21:00</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin size={16} className="mr-2" /> Av. Principal 123, Lima
                  </li>
                  <li className="flex items-center">
                    <Phone size={16} className="mr-2" /> +51 999 888 777
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2" /> info@saboresperuanos.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Sabores Peruanos. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        {selectedProduct && (
          <QuantityModal
            isOpen={isQuantityModalOpen}
            onClose={() => setIsQuantityModalOpen(false)}
            product={selectedProduct}
          />
        )}
      </div>
    </CartProvider>
  )
}
