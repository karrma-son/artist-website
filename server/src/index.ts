import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import artRoutes from "./routes/art";
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
    console.log("⏳ Connecting to MongoDB...");
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

   db = client.db("art-database");
   

    // Example root route
    app.get("/", (_, res) => {
      res.send("API is running 🚀");
    });

    app.use("/api/art", artRoutes(db));
    

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// Start the server
startServer();
