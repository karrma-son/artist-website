import React from 'react';
import type { ArtPiece } from '../types/ArtPiece';

interface ArtModalContentProps {
  art: ArtPiece;
  onAddToCart: (art: ArtPiece) => void;
  onImageClick?: (id: string | number) => void;
}

const ArtModalContent: React.FC<ArtModalContentProps> = ({ art, onAddToCart }) => (
  <div className="text-center">
    <img
      src={art.image}
      alt={art.title}
      onClick={() => console.log(`[ArtCardGrid] Image clicked with id: ${art.id}`)}
      className="max-h-[70vh] mx-auto rounded-lg"
    />
    <h2 className="text-xl font-bold mb-4">{art.title}</h2>
    <p className="mt-4 text-gray-700 dark:text-gray-300">
      {art.description || 'No description available.'}
    </p>
    <p className="text-sm text-gray-400">
      Viewed {art.clickCount ?? 0} times
    </p>
    {art.price !== undefined && (
      <button className="mt-4" onClick={() => onAddToCart(art)}>
        Add to Cart
      </button>
    )}
  </div>
);

export default ArtModalContent;
