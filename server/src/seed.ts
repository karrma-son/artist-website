// server/seed.ts
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db();
    const artwork = db.collection("artwork");

   
    console.log("🗑 Clearing old artwork...");
    await artwork.deleteMany({});
 
    const result = await artwork.insertMany([
        {
        id: 1,
        title: 'Space Force One',
        size:   '16" x20"',
        price:  750,
        image: '/images/paintings/2018-spaceforce1.jpg',
        medium: 'Acrylic on canvas',
        category:'paintings'
        
        },
    
        {
        id: 2,
        title: 'Viscordian',
        size:   '16" x20"',
        price: 1100,
        image: '/images/paintings/2018-Viscordian.jpg',
        medium: 'Acrylic on canvas',
        category:'paintings'
    },

        {
        id: 3,
        title: 'Shelter',
        size:   '16" x20"',
        price: 950,
        image: '/images/paintings/2018-Shelter.jpg', 
        medium: 'Acrylic on canvas',
        year: '2020',
        category:'paintings'
        }
    ]);
   
  
    
    console.log(`✅ Inserted ${result.insertedCount} artworks!`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
