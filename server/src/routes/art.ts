// routes/art.ts
import { Router } from "express";
import ArtPiece from "../models/ArtPiece.js";

const router = Router();

// GET all art, optional category filter
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category: category.toString().toLowerCase() } : {};
    const art = await ArtPiece.find(filter).exec();
    res.json(art);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch artwork" });
  }
});

// GET single art by numeric id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const artItem = await ArtPiece.findOne({ id }).exec();
    if (!artItem) return res.status(404).json({ error: "Artwork not found" });
    res.json(artItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch artwork" });
  }
});

// POST new artwork
router.post("/", async (req, res) => {
  try {
    const newArt = req.body;
    if (!newArt.id) return res.status(400).json({ error: "Artwork must have an id" });

    const exists = await ArtPiece.findOne({ id: newArt.id }).exec();
    if (exists) return res.status(400).json({ error: "Artwork with this id already exists" });

    const created = await ArtPiece.create(newArt);
    res.status(201).json({ message: "Artwork created", artwork: created });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create artwork" });
  }
});

// PATCH click count
router.patch("/:id/click", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = await ArtPiece.findOneAndUpdate(
      { id },
      { $inc: { clickCount: 1 } },
      { new: true }
    ).exec();

    if (!updated) return res.status(404).json({ error: "Artwork not found" });
    res.json({ success: true, art: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT update artwork
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updateData = req.body;

    const updated = await ArtPiece.findOneAndUpdate({ id }, updateData, { new: true }).exec();
    if (!updated) return res.status(404).json({ error: "Artwork not found" });

    res.json({ message: "Artwork updated", artwork: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update artwork" });
  }
});

// DELETE artwork
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await ArtPiece.deleteOne({ id }).exec();
    if (result.deletedCount === 0) return res.status(404).json({ error: "Artwork not found" });

    res.json({ message: "Artwork deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete artwork" });
  }
});

export default router;
