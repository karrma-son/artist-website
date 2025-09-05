// src/pages/ArtCategoryPage.tsx
import { useParams } from 'react-router-dom';
import ArtCardGrid from '../components/ArtCardGrid';
import allArtData from '../data/artData'; // Your art list source
import type { ArtPiece } from '../types/ArtPiece';

const ArtCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

 const filteredData: ArtPiece[] = category
    ? allArtData.filter(
        art => art.category.toUpperCase() === category.toUpperCase()
      )
    : allArtData;

  return (
    <div className="flex flex-wrap content-center mx-auto p-4">
      <div></div>
      <h1 className= "  text-center font-bold text-white capitalize">
        {category || 'All Art'}
      </h1>
      <ArtCardGrid artData={filteredData} />
    </div>
  );
};

export default ArtCategoryPage;
