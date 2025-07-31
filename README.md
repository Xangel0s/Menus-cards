# 🍽️ Food Menu Cart - Aplicación de Menú con Carrito de Compras

Una aplicación web moderna y responsive para restaurantes que permite a los clientes explorar menús, agregar productos al carrito y realizar pedidos de manera intuitiva.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y responsive con Tailwind CSS
- 🛒 **Carrito de Compras**: Gestión completa de productos con cantidades
- 🌙 **Modo Oscuro/Claro**: Soporte para temas personalizables
- 📱 **Responsive**: Optimizado para dispositivos móviles y desktop
- ⚡ **Rendimiento**: Construido con Next.js 15 para máxima velocidad
- 🎯 **TypeScript**: Código tipado para mayor robustez
- 🎨 **Componentes UI**: Biblioteca completa de componentes con shadcn/ui

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui + Radix UI
- **Gestión de Estado**: React Context API
- **Gestor de Paquetes**: pnpm
- **Iconos**: Lucide React

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Xangel0s/Menus-cards.git
   cd Menus-cards
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
food-menu-cart/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── cart/             # Componentes del carrito
│   ├── menu/             # Componentes del menú
│   ├── ui/               # Componentes UI reutilizables
│   └── theme-provider.tsx # Proveedor de temas
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
└── styles/               # Estilos adicionales
```

## 🛒 Funcionalidades del Carrito

- **Agregar productos**: Click en "Agregar al carrito"
- **Modificar cantidades**: Modal para ajustar cantidades
- **Eliminar productos**: Botón de eliminar en cada item
- **Vista lateral**: Panel deslizable con resumen del carrito
- **Cálculo automático**: Total actualizado en tiempo real

## 🎨 Componentes Principales

### MenuCard
- Muestra información del producto
- Imagen, nombre, descripción y precio
- Botón para agregar al carrito

### CartSidebar
- Lista de productos en el carrito
- Controles de cantidad
- Total del pedido
- Botón de checkout

### CartProvider
- Gestión global del estado del carrito
- Funciones para agregar, eliminar y modificar productos

## 🎯 Scripts Disponibles

```bash
pnpm run dev      # Servidor de desarrollo
pnpm run build    # Construir para producción
pnpm run start    # Servidor de producción
pnpm run lint     # Verificar código
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. ¡Listo! Tu app estará disponible automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `pnpm run build`
3. Directorio de salida: `.next`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Xangel0s**
- GitHub: [@Xangel0s](https://github.com/Xangel0s)

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los componentes UI
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [Next.js](https://nextjs.org/) por el framework de React
- [Radix UI](https://www.radix-ui.com/) por los componentes primitivos

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! 