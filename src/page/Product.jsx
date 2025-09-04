import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("product");
      if (local) {
        setProducts(JSON.parse(local));
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
    setCurrentImageIndex(0);
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
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.bannerWrapper}>
          <div style={styles.bannerLeft}></div>
          <span style={styles.text}>Our Product</span>
          <div style={styles.bannerRight}></div>
        </div>

        <div style={styles.cardWrapper}>
          {products.map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.imgs[0]}
                alt={item.title}
                style={styles.image}
              />
              <h3 style={styles.title}>{item.title}</h3>
              <button
                style={styles.button_detail}
                onClick={() => handleDetailClick(item)}
              >
                Detail
              </button>
              <p style={styles.price}>Rp. {item.price}</p>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {selectedProduct && (
          <div style={styles.popupOverlay} onClick={handleClosePopup}>
            <div
              style={{
                ...styles.popup,
                ...(zoom ? styles.zoomed : {}),
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button style={styles.closeBtn} onClick={handleClosePopup}>
                ✕
              </button>

              <div style={styles.imageWrapper}>
                <button style={styles.navBtn} onClick={handlePrev}>‹</button>
                <img
                  src={selectedProduct.imgs[currentImageIndex]}
                  alt={selectedProduct.title}
                  style={{
                    ...styles.popupImage,
                    ...(zoom ? styles.zoom : {}),
                  }}
                  onClick={handleImageClick}
                />
                <button style={styles.navBtn} onClick={handleNext}>›</button>
              </div>

              <h2>{selectedProduct.title}</h2>
              <p style={styles.popupPrice}>Rp. {selectedProduct.price}</p>
              <p style={styles.popupDetail}>{selectedProduct.detail}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#fff5f7",
    fontFamily: "Arial, sans-serif",
  },
  bannerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  },
  bannerLeft: {
    flex: 1,
    height: "40px",
    backgroundColor: "#c96f68",
    borderRadius: "40px 5px 40px 5px",
  },
  bannerRight: {
    flex: 1,
    height: "40px",
    backgroundColor: "#c96f68",
    borderRadius: "5px 40px 5px 40px",
  },
  text: {
    fontWeight: "bold",
    margin: "0 15px",
    whiteSpace: "nowrap",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  card: {
    background: "#f2a6a6",
    borderRadius: "20px",
    width: "200px",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  cardHover: {
    transform: "translateY(-5px)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
  },
  title: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  button_detail: {
    marginTop: "10px",
    background: "#d46a6a",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  price: {
    marginTop: "8px",
    fontWeight: "bold",
    color: "#fff",
    background: "#e07b7b",
    padding: "5px 10px",
    borderRadius: "12px",
    display: "inline-block",
  },
  /* POPUP */
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    width: "450px",
    maxWidth: "90%",
    position: "relative",
    textAlign: "center",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "15px",
    border: "none",
    background: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  imageWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popupImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "zoom-in",
    transition: "transform 0.3s ease-in-out",
  },
  zoom: {
    transform: "scale(1.8)",
    cursor: "zoom-out",
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "50%",
  },
  navBtnLeft: { left: "10px" },
  navBtnRight: { right: "10px" },
  popupPrice: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  popupDetail: {
    fontSize: "14px",
    color: "#333",
  },
};

export default Product;
