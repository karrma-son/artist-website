import express from "express";
import ArtPiece from "../models/ArtPiece.js";

const router = express.Router();

// Increment click count
router.patch("/art/:id/click", async (req, res) => {
  try {
    const art = await ArtPiece.findByIdAndUpdate(
      req.params.id,
      { $inc: { clickCount: 1 } },
      { new: true }
    );

    if (!art) return res.status(404).json({ message: "Art not found" });

    res.json({ success: true, art });
  } catch (error) {
    console.error("Error updating click count:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
