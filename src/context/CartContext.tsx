import { createContext, useContext, useState, type ReactNode } from 'react'
import type { ArtPiece } from '../types/ArtPiece'



type CartContent = {
  cart: ArtPiece[]
  addToCart: (item: ArtPiece) => void
  removeFromCart: (id: string | number) => void
  clearCart: () => void
};

const CartContext = createContext<CartContent>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
})

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ArtPiece[]>([])

  const logCart = (action: string, updatedCart: ArtPiece[]) => {
    console.log(`[Cart] ${action}`)
    console.table(updatedCart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    })))
  }

  const addToCart = (item: ArtPiece) => {
    setCart((prev) => {
      const updated = [...prev, item]
      logCart(`Added: ${item.title} (${item.id})`, updated)
      return updated
    })
  }

  const removeFromCart = (id: string | number) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== id)
      logCart(`Removed item with id: ${id}`, updated)
      return updated
    })
  }

  const clearCart = () => {
    setCart([])
    console.log(`[Cart] Cleared all items`)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
