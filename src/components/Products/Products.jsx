import styles from "./products.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("product");
      if (local) {
        setProducts(JSON.parse(local).slice(0, 4));
      } else {
        try {
          const response = await axios.get("/product.json");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (item) => {
    setSelectedProduct(item);
    setCurrentImageIndex(0); // reset gambar pertama
    setZoom(false);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setZoom(false);
  };

  const handleImageClick = () => {
    setZoom(!zoom);
  };

  const handleNext = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProduct.imgs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProduct.imgs.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerLeft}></div>
        <span className={styles.text}>Our Product</span>
        <div className={styles.bannerRight}></div>
      </div>

     <div className={styles.cardWrapper}>
        {products.map((item) => (
          <div className={styles.card} key={item.id}>
            <img
              src={item.imgs[0]}
              alt={item.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <button
              className={styles.button_detail}
              onClick={() => handleDetailClick(item)}
            >
              Detail
            </button>
            <p className={styles.price}>Rp. {item.price}</p>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedProduct && (
        <div className={styles.popupOverlay} onClick={handleClosePopup}>
          <div
            className={`${styles.popup} ${zoom ? styles.zoomed : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={handleClosePopup}>
              ✕
            </button>

            <div className={styles.imageWrapper}>
              <button className={styles.navBtn} onClick={handlePrev}>‹</button>
              <img
                src={selectedProduct.imgs[currentImageIndex]}
                alt={selectedProduct.title}
                className={`${styles.popupImage} ${zoom ? styles.zoom : ""}`}
                onClick={handleImageClick}
              />
              <button className={styles.navBtn} onClick={handleNext}>›</button>
            </div>

            <h2>{selectedProduct.title}</h2>
            <p className={styles.popupPrice}>Rp. {selectedProduct.price}</p>
            <p className={styles.popupDetail}>{selectedProduct.detail}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;