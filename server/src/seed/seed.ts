// server/seed.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import { allArtData } from "./artData.js";
import ArtPiece from "../models/ArtPiece.js";
dotenv.config();


async function seed() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ Connected to MongoDB");


   
    console.log("🗑 Clearing old artwork...");
    await ArtPiece.deleteMany({});
    
    console.log("📦 Inserting new artwork...");
    await ArtPiece.insertMany(allArtData);
    
    console.log(`✅ Inserted ${allArtData.length} artwork successfully!`);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
