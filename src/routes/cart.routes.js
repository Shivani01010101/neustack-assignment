import express from "express";
import { addToCart } from "../services/cart.service.js";

const router = express.Router();

router.post("/add", (req, res) => {
  const cartItems = addToCart(req.body);
  res.json({
    message: "Item added to cart",
    cart: cartItems,
  });
});

export default router;
