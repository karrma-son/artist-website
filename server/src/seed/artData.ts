import { paintingData } from "./paintingData";
import { designData } from "./designData";
import { printData } from "./printData"; 
import { ArtPiece } from "../models/art.model";

export const allArtData: ArtPiece[] = [
  ...paintingData,
  ...designData,
  ...printData,
];