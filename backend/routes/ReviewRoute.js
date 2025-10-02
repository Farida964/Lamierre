// routes/ReviewRoute.js
import express from "express";
import {
  getReviews,
  createReview,
  deleteReview,
} from "../controller/ReviewController.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);
router.delete("/reviews/:id", deleteReview); // opsional

export default router;
