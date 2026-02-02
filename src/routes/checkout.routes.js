import express from "express";
import { checkout } from "../services/checkout.service.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { discountCode } = req.body;
    const result = checkout(discountCode);

    res.json({
      message: "Checkout successful",
      ...result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
