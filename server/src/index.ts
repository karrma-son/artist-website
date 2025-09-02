import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, Db } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB setup
const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

let db: Db; // will hold reference to your DB

async function startServer() {
  try {
    // Connect the client and keep it open
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    // Choose a default database (replace 'myDatabase' with your DB name)
    db = client.db("myDatabase");

    // Example root route
    app.get("/", (req, res) => {
      res.send("API is running 🚀");
    });

    // Example route using MongoDB
    app.get("/api/art", async (req, res) => {
      try {
        const art = await db.collection("artworks").find({}).toArray();
        res.json(art);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch artworks" });
      }
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// Start the server
startServer();
