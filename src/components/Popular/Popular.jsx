import styles from "./popular.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Popular() {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("product");
      if (local) {
        const parsed = JSON.parse(local);
        setProduct(parsed.slice(0, 4)); // ambil 4 data teratas
      } else {
        try {
          const response = await axios.get("/product.json");
          setProduct(response.data.slice(0, 4)); // ambil 4 data teratas
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (item) => {
    setSelectedProduct(item);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerLeft}></div>
        <span className={styles.text}>Most Popular</span>
        <div className={styles.bannerRight}></div>
      </div>

      <div className={styles.cardWrapper}>
        {product.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.img} alt={item.title} className={styles.image} />
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
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={handleClosePopup}>
              ✕
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className={styles.popupImage}
            />
            <h2>{selectedProduct.title}</h2>
            <p className={styles.popupPrice}>Rp. {selectedProduct.price}</p>
            <p className={styles.popupDetail}>{selectedProduct.detail}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popular;
