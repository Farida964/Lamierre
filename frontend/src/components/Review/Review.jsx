import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styles from "./Review.module.css"; // ⬅️ import CSS terpisah

function Review() {
  const [reviews, setReviews] = useState([
    { name: "Ayu", text: "Kualitas kerudungnya bagus banget 💖", rating: 5 },
    { name: "Siti", text: "Nyaman dipakai seharian, bahan adem!", rating: 4 },
  ]);

  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim() || rating === 0) return;

    setReviews([...reviews, { name: "Anonymous", text: newReview, rating }]);
    setNewReview("");
    setRating(0);
  };

  return (
    <div>
      <div className={styles.container}>
        {/* Review List Section */}
        <section className={styles.reviewSection}>
          <h2 className={styles.sectionTitle}>What Our Clients Say About Us</h2>
          <div className={styles.reviewGrid}>
            {reviews.map((r, index) => (
              <div key={index} className={styles.reviewCard}>
                <p className={styles.stars}>{"★".repeat(r.rating)}</p>
                <p className={styles.text}>{r.text}</p>
                <p className={styles.name}>- {r.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add Review Section */}
        <section className={styles.addReview}>
          <h3 className={styles.addTitle}>Apakah kamu puas dengan Lamierrè?</h3>

          {/* Rating */}
          <div className={styles.starRow}>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`${styles.star} ${rating >= num ? styles.activeStar : ""}`}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <textarea
              className={styles.textarea}
              placeholder="Tulis pengalaman kamu di sini..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <button type="submit" className={styles.submitBtn}>
              Share
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Review;
