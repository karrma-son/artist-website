import express from "express";
import Art from "../models/art.model";
const router = express.Router();

// GET all art
router.get("/", async (req, res) => {
  try {
    const artworks = await Art.find();
    console.log("Fetched artwork from DB:", artworks.length);
    res.json(artworks);
  } catch (err) {
    console.error("Error fetching artworks:", err);
    res.status(500).json({ message: "Failed to fetch artworks" });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const art = await Art.findById(req.params.id);
    if (!art) return res.status(404).json({ message: "Not found" });
    res.json(art);
  } catch (err) {
    console.error("Error fetching art:", err);
    res.status(500).json({ message: "Error fetching art" });
  }
});

// PATCH click count
router.patch("/:id/click", async (req, res) => {
  try {
    const art = await Art.findByIdAndUpdate(
      req.params.id,
      { $inc: { clickCount: 1 } },
      { new: true }
    );
    res.json(art);
  } catch (err) {
     console.error("Error updating click count:", err);
    res.status(500).json({ message: "Error updating click count" });
  }
});

export default router;
