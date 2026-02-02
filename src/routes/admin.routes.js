import express from "express";
import { getStats } from "../services/admin.service.js";

const router = express.Router();

router.get("/stats", (req, res) => {
  const stats = getStats();
  res.json(stats);
});

export default router;
