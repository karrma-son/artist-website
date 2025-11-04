import React from 'react';
import { motion } from "framer-motion";
import type { ArtPiece } from '../types/ArtPiece';

const MotionImage = motion.img
interface ArtCardProps {
  art: ArtPiece;
  onSelect: (art: ArtPiece) => void;
  onAddToCart: (art: ArtPiece) => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ art, onSelect, onAddToCart }) => (
  <div className="bg-linear-to-b from-gray-700 to-gray-900 art-card">
    <div onClick={() => onSelect(art)} className="cursor-pointer">
      <h3>{art.title}</h3>
      <MotionImage
      className="border-indigo-950" 
      src={art.image} 
      alt={art.title}  
      loading={art.loading|| "lazy"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
    <p>{art.medium}</p>
    {art.size && <p>{art.size}</p>}
    {art.year && <p>{art.year}</p>}
    {art.price !== undefined && (
      <>
      <p>${art.price}</p>
      <button onClick={() => onAddToCart(art)}>Add to Cart</button>
      </>
    )}
  </div>
);

export default ArtCard;
