import React, { useState, useEffect } from "react";
import styles from "./detailproduct.module.css";
import { Link } from "react-router-dom";

function DetailProduct({ isOpen, onClose, product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  // ✅ Reset gambar dan zoom setiap kali produk baru dibuka
  useEffect(() => {
    if (isOpen && product) {
      setCurrentImageIndex(0);
      setZoom(false);
    }
  }, [isOpen, product]);

  // ✅ Jika belum ada produk, jangan render apa pun
  if (!isOpen || !product) return null;

  const handleImageClick = () => setZoom((prev) => !prev);

  const handleNext = () => {
    if (!product.imgs?.length) return;
    setCurrentImageIndex((prev) =>
      prev === product.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!product.imgs?.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.imgs.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={`${styles.popup} ${zoom ? styles.zoomed : ""}`}
        onClick={(e) => e.stopPropagation()} // biar klik dalam popup gak nutup
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.imageWrapper}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={product.imgs?.[currentImageIndex]}
            alt={product.title || "Product"}
            className={`${styles.popupImage} ${zoom ? styles.zoom : ""}`}
            onClick={handleImageClick}
            loading="lazy" // ✅ lebih ringan untuk gambar besar
          />

          <button
            className={styles.navBtn}
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.popupPrice}>Rp. {product.price}</p>
        <p className={styles.popupDetail}>{product.desc}</p>

        <div className={styles.buttonWrapper}>
          <Link className={styles.button} to="/payment">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
