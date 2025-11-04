// src/data/artData.ts
import { paintingData } from './paintings/paintingData';
import {digitalArtData } from './digital/digitalArtData';
import { printData } from './printmaking/2011-2015';
import type { ArtPiece } from '../types/ArtPiece';


export const allArtData: ArtPiece[] = [
  ...paintingData,
  ...digitalArtData,
  ... printData,
];

