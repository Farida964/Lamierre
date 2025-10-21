import styles from "./products.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailProduct from "../DetailProduct/DetailProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ tambahkan indikator loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const local = localStorage.getItem("product");
        if (local) {
          setProducts(JSON.parse(local));
        } else {
          const response = await axios.get("/product.json");
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // ✅ pastikan loading selesai
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (item) => setSelectedProduct(item);
  const handleClosePopup = () => setSelectedProduct(null);

  return (
    <div>
      {/* Banner */}
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerLeft}></div>
        <span className={styles.text}>Our Product</span>
        <div className={styles.bannerRight}></div>
      </div>

      {/* ✅ Loading State */}
      {loading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.loader}></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {products.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => handleDetailClick(item)}
            >
              <img
                src={item.imgs[0]}
                alt={item.title}
                className={styles.image}
                loading="lazy" // ✅ hemat performa
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.price}>Rp. {item.price}</p>
              <button className={styles.button_detail}>Detail</button>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Popup detail produk */}
      {selectedProduct && (
        <DetailProduct
          isOpen={!!selectedProduct}
          onClose={handleClosePopup}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default Products;
