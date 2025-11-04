export type ArtPiece = {
  id: number;
  title: string;
  image: string;
  size?:string;
  price?: number;
  year?: string ;
  medium: string;
  category: string;
  description?: string;
  clickCount: number;
  loading?: 'lazy' | 'eager';
};
