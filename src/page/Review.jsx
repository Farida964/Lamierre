import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from '../components/Hero.jsx/Hero';

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
      {/* Navbar */}
      <Navbar />
      <Hero />

      {/* Main Container */}
      <div style={styles.container}>
        {/* Review List Section */}
        <section style={styles.reviewSection}>
          <h2 style={styles.sectionTitle}>What Our Clients Say About Us</h2>
          <div style={styles.reviewGrid}>
            {reviews.map((r, index) => (
              <div key={index} style={styles.reviewCard}>
                <p style={styles.stars}>{"★".repeat(r.rating)}</p>
                <p style={styles.text}>{r.text}</p>
                <p style={styles.name}>- {r.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add Review Section */}
        <section style={styles.addReview}>
          <button style={styles.backBtn}>← Back</button>
          <h3 style={styles.addTitle}>Apakah kamu puas dengan Lamierrè?</h3>

          {/* Rating */}
          <div style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                style={{
                  ...styles.star,
                  color: rating >= num ? "#e91e63" : "#ccc",
                }}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <textarea
              style={styles.textarea}
              placeholder="Tulis pengalaman kamu di sini..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <button type="submit" style={styles.submitBtn}>
              Save
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff5f7",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
  },
  reviewSection: {
    marginBottom: "3rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#b23a48",
    marginBottom: "1rem",
  },
  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  reviewCard: {
    background: "#fff",
    padding: "1.2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  stars: {
    fontSize: "1.2rem",
    color: "#e91e63",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.95rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  name: {
    fontSize: "0.85rem",
    fontStyle: "italic",
    color: "#666",
  },
  addReview: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  backBtn: {
    background: "#f4d6d9",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  addTitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#b23a48",
    fontWeight: "600",
  },
  starRow: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  star: {
    margin: "0 5px",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    height: "100px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    padding: "0.8rem",
    marginBottom: "1rem",
    fontSize: "0.95rem",
  },
  submitBtn: {
    background: "#e91e63",
    color: "#fff",
    padding: "0.7rem 1.5rem",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
};

export default Review;
