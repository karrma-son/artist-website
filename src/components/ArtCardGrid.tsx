// src/components/ArtCardGrid.tsx
import React, { useState, useEffect} from 'react'
import { useCart } from '../context/CartContext'
import type { ArtPiece } from '../types/ArtPiece'
import Modal from './Modal'
import ArtCard from './ArdCard'
import ArtModalContent from './ArtModalContent'





type ArtCardGridProps = {
  artData: ArtPiece[]
}

const ArtCardGrid: React.FC<ArtCardGridProps> = ({ artData }) => {
const { addToCart } = useCart()
const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null)


const handleImageClick = async (id: string | number) => {
  try {
    console.log(`[ArtCardGrid] Image clicked with id: ${id}`);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/art/${id}/click`,
      { method: "PATCH" }
    );

    if (!response.ok) {
      throw new Error(`Failed to increment click count for ${id}`);
    }

    const data = await response.json();
    console.log("[ClickCount Updated]", data);
  } catch (error) {
    console.error("Error updating click count:", error);
  }
};

  
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
        <ArtCard
          key={art.id}
          art={art}
          onSelect={(art) => {
          handleImageClick(art.id);
          setSelectedArt(art);
         }}
          onAddToCart={addToCart}
        />
      ))}

      <Modal isOpen={!!selectedArt} onClose={() => setSelectedArt(null)}>
        {selectedArt && (
          <ArtModalContent 
            art={selectedArt} 
            onAddToCart={addToCart}
            onImageClick={handleImageClick} 
           />
        )}
      </Modal>
    </section>
  )
}

export default ArtCardGrid
