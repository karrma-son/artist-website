import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import artRoutes from "./routes/art";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("API is running 🚀");
});

app.use("/api", artRoutes);


async function startServer() {
  try {
  
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}


startServer();
