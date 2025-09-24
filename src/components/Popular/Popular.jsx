import styles from "./Popular.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import DetailProduct from "../DetailProduct/DetailProduct";
import Payment from "../../page/Payment.jsx";

function Popular() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("product");
      if (local) {
        setProducts(JSON.parse(local).slice(0, 4));
      } else {
        try {
          const response = await axios.get("/product.json");
          setProducts(response.data.slice(0, 8));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, []);

  const handleDetailClick = (item) => {
    setSelectedProduct(item); // buka popup
  };

  const handleClosePopup = () => {
    setSelectedProduct(null); // tutup popup
  };

  return (
    <div>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerLeft}></div>
        <span className={styles.text}>Most Popular</span>
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

      {/* POPUP Detail */}
      <DetailProduct
        isOpen={!!selectedProduct}
        onClose={handleClosePopup}
        product={selectedProduct}
      />

      <br />
      <div className={styles.buttonWrapper}>
        {/* <button>
          <Link className={styles.button} to="/product">See More</Link>
        </button> */}
      </div>
    </div>
  );
}

export default Popular;
