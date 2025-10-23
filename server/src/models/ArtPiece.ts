import mongoose from "mongoose";

const ArtPieceSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  medium: String,
  size: String,
  year: Number,
  clickCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("ArtPiece", ArtPieceSchema);