import {  useState, useEffect, useRef, type ReactNode } from 'react'
import { CartContext, type CartContent } from './CartContext'
import type { ArtPiece } from '../types/ArtPiece'


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ArtPiece[]>([])
  const debounceTimer = useRef<NodeJS.Timeout | null>(null) 

  
  useEffect(() => {
    const savedCart = localStorage.getItem('art_cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCart(parsed);
          console.log('[Cart] Loaded from localStorage:', parsed);
        }
      } catch (error) {
        console.error('Error parsing saved cart:', error);
      }
    }
  }, []);


  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current)

    debounceTimer.current = setTimeout(() => {
    localStorage.setItem('art_cart', JSON.stringify(cart))
    console.log('[Cart] Saved to localStorage:', cart)
      }, 500) 
  }, [cart]);

  const logCart = (action: string, updatedCart: ArtPiece[]) => {
    console.log(`[Cart] ${action}`)
    console.table(
      updatedCart.map((item) => ({
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

  const value: CartContent = { cart, addToCart, removeFromCart, clearCart }

  return (
    <CartContext.Provider 
    value=
    {value}>
    {children}
    </CartContext.Provider>
  )
}
