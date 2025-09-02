import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Painting 1", price: 200 },
    { id: 2, title: "Illustration 2", price: 150 }
  ]);
});

export default router;