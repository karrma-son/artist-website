import React from 'react';
import type { ArtPiece } from '../types/ArtPiece';

interface ArtCardProps {
  art: ArtPiece;
  onSelect: (art: ArtPiece) => void;
  onAddToCart: (art: ArtPiece) => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ art, onSelect, onAddToCart }) => (
  <div className="bg-gradient-to-b from-gray-700 to-gray-900 art-card">
    <div onClick={() => onSelect(art)} className="cursor-pointer">
      <h3>{art.title}</h3>
      <img className="border-indigo-950" src={art.image} alt={art.title} />
    </div>
    <p>{art.medium}</p>
    {art.size && <p>{art.size}</p>}
    {art.year && <p>{art.year}</p>}
    {art.price !== undefined && (
      <button onClick={() => onAddToCart(art)}>Add to Cart</button>
    )}
  </div>
);

export default ArtCard;
