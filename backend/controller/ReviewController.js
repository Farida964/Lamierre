// controller/ReviewController.js
import Review from "../models/ReviewModel.js";

// GET all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({ order: [["createdAt", "DESC"]] });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// POST create review
export const createReview = async (req, res) => {
  try {
    const { name, text, rating } = req.body;

    if (!text || !rating) {
      return res.status(400).json({ msg: "Review dan rating wajib diisi" });
    }

    const review = await Review.create({
      name: name?.trim() || "Anonymous",
      text,
      rating,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE review (optional)
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) return res.status(404).json({ msg: "Review tidak ditemukan" });

    await review.destroy();
    res.json({ msg: "Review berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
