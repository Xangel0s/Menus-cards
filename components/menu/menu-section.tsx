import { MenuCard } from "./menu-card"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  onAddToCart: (product: MenuItem) => void
}

export function MenuSection({ title, items, onAddToCart }: MenuSectionProps) {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={() => onAddToCart(item)} />
        ))}
      </div>
    </section>
  )
}
