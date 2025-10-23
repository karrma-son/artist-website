import { createContext  } from 'react'
import type { ArtPiece } from '../types/ArtPiece'




export type CartContent = {
  cart: ArtPiece[]
  addToCart: (item: ArtPiece) => void
  removeFromCart: (id: string | number) => void
  clearCart: () => void
};


export const CartContext = createContext<CartContent | undefined>(undefined);


