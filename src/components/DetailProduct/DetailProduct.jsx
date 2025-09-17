import React, { useState, useEffect } from "react";
import styles from "./detailproduct.module.css";
import { Link } from "react-router-dom";

function DetailProduct({ isOpen, onClose, product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  // reset index tiap kali popup dibuka produk baru
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setZoom(false);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleImageClick = () => {
    setZoom(!zoom);
  };

  const handleNext = () => {
    if (!product.imgs) return;
    setCurrentImageIndex((prev) =>
      prev === product.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!product.imgs) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.imgs.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={`${styles.popup} ${zoom ? styles.zoomed : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.imageWrapper}>
          <button className={styles.navBtn} onClick={handlePrev}>‹</button>
          <img
            src={product.imgs && product.imgs[currentImageIndex]}
            alt={product.title}
            className={`${styles.popupImage} ${zoom ? styles.zoom : ""}`}
            onClick={handleImageClick}
          />
          <button className={styles.navBtn} onClick={handleNext}>›</button>
        </div>

        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.popupPrice}>Rp. {product.price}</p>
        <p className={styles.popupDetail}>{product.desc}</p>
        <div className={styles.buttonWrapper}>
          <Link className={styles.button} to="/product">See More</Link>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
