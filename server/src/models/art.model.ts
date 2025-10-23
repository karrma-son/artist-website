import mongoose, { Schema, Document } from "mongoose";

export interface ArtPiece extends Document {
  id?: number;
  title: string;
  size?: string;
  price?: number;
  image: string;
  medium: string;
  description?: string;
  year?: string;
  category: string;
  clickCount: number;
}

const artSchema = new Schema<ArtPiece>({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  medium: String,
  description: String,
  year: String,
  price: Number,
  clickCount: { type: Number, default: 0 },
});

export default mongoose.model<ArtPiece>("Art", artSchema);
