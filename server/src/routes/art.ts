// routes/art.ts
import { Router } from "express";
import { Db } from "mongodb";
import { ArtPiece } from "../models/ArtPiece";



export default function artRoutes(db: Db) {
const router = Router();

 
  router.get("/", async (_, res) => {
    try {
      const art = await db.collection<ArtPiece>("artwork").find({}).toArray();
      res.json(art);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch artwork" });
    }
  });

 
  router.get("/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const artItem = await db.collection("artwork").findOne({ id });
      if (!artItem) return res.status(404).json({ error: "Artwork not found" });
      res.json(artItem);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch artwork" });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const newArt = req.body;
      if (!newArt.id) return res.status(400).json({ error: "Artwork must have an id" });

      const exists = await db.collection("artwork").findOne({ id: newArt.id });
      if (exists) return res.status(400).json({ error: "Artwork with this id already exists" });

      await db.collection("artwork").insertOne(newArt);
      res.status(201).json({ message: "Artwork created", artwork: newArt });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create artwork" });
    }
  });

  router.patch("/:id/click", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await db.collection("artwork").findOneAndUpdate(
        { id },
        { $inc: { clickCount: 1 } },
        { returnDocument: "after" }
      );

      if (!result || !result.value)
        return res.status(404).json({ error: "Artwork not found" });

      res.json({ success: true, art: result.value });
    } catch (error) {
      console.error("Error updating click count:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updateData = req.body;

      const result = await db.collection("artwork").updateOne(
        { id },
        { $set: updateData }
      );

      if (result.matchedCount === 0) return res.status(404).json({ error: "Artwork not found" });

      const updatedArt = await db.collection("artwork").findOne({ id });
      res.json({ message: "Artwork updated", artwork: updatedArt });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update artwork" });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const result = await db.collection("artwork").deleteOne({ id });
      if (result.deletedCount === 0) return res.status(404).json({ error: "Artwork not found" });

      res.json({ message: "Artwork deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete artwork" });
    }
  });

  return router;
}
