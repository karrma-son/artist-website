import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import type { ArtPiece } from '../types/ArtPiece';

const MotionImage = motion.img
interface ArtCardProps {
  art: ArtPiece;
  onSelect: (art: ArtPiece) => void;
  onAddToCart: (art: ArtPiece) => void;
  linkMode?: boolean
}

const ArtCard: React.FC<ArtCardProps> = ({ 
  art, 
  onSelect, 
  onAddToCart,
  linkMode,
 }) => {
  const CardContent = (
    <>
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
    <p>{art.medium}</p>
    {art.size && <p>{art.size}</p>}
    {art.year && <p>{art.year}</p>}
       </>
  )
    return (
    <div className="bg-linear-to-b from-gray-700 to-gray-900 art-card">
      {linkMode && art.path ? (
        <Link to={art.path} className="block">
          {CardContent}
        </Link>
      ) : (
        <div onClick={() => onSelect?.(art)} className="cursor-pointer">
          {CardContent}
        </div>
      )}

      {!linkMode && art.price !== undefined && (
        <>
          <p>${art.price}</p>
          <button onClick={() => onAddToCart?.(art)}>Add to Cart</button>
        </>
      )}
    </div>
  )
}

export default ArtCard;
