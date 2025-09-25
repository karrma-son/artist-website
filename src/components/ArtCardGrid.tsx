// src/components/ArtCardGrid.tsx
import React, { useState, useEffect} from 'react'
import { useCart } from '../context/CartContext'
import type { ArtPiece } from '../types/ArtPiece'
import Modal from './Modal'




type ArtCardGridProps = {
  artData: ArtPiece[]
}

const ArtCardGrid: React.FC<ArtCardGridProps> = ({ artData }) => {
  const { addToCart } = useCart()
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null)

  const handleImageClick = (id: string) => {
    console.log(`[ArtCardGrid] Image clicked with id: ${id}`)
  }

useEffect(() => {
  if (selectedArt) {
    console.log(`[Modal] OPENED for ${selectedArt.title}`)
  } else {
    console.log('[Modal] CLOSED')
  }
}, [selectedArt])

  return (
    <section className="gallery">
      {artData.map((art) => (
        <div className=" bg-gradient-to-b from-gray-700 to-gray-900 art-card" key={art.id}>
          <div onClick={() => setSelectedArt(art)} className="cursor-pointer">
            <h3>{art.title}</h3>
            <img className=' border-indigo-950' src={art.image} alt={art.title} />
          </div>
            <p>{art.medium}</p>
            {art.size && <p>{art.size}</p>}
            {art.year && <p>{art.year}</p>}
            {art.price !== undefined && (
    <button
      onClick={() => {
        console.log(`[Cart] Adding to cart: ${art.title} (${art.id})`);
        addToCart(art);
    }}
  >
    Add to Cart
  </button>
)}
        </div>
      ))}

      <Modal isOpen={!!selectedArt} onClose={() => setSelectedArt(null)}>
        {selectedArt && (
          <div className="text-center">

            <img
              src={selectedArt.image}
              alt={selectedArt.title}
              onClick={() => handleImageClick(selectedArt.image)} 
              className="max-h-[70vh] mx-auto rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">{selectedArt.title}</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {selectedArt.description || 'No description available.'}
            </p>
              {selectedArt.price !== undefined && (
                <button
                  className="mt-4"
                  onClick={() => {
                    console.log(`[Cart] Adding to cart: ${selectedArt.title} (${selectedArt.id})`);
                    addToCart(selectedArt);
                  }}
        >
          Add to Cart
        </button>
      )}
          </div>
        )}
      </Modal>
    </section>
  )
}

export default ArtCardGrid
