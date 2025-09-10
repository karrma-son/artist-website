// src/types/ArtPiece.ts
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
};
