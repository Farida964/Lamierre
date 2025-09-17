import styles from "./voucher.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailVoucher from "../DetailVoucher/DetailVoucher";

function Voucher() {
  const [voucher, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("voucher");
      if (local) {
        const parsed = JSON.parse(local);
        setDatas(parsed.slice(0, 3)); 
      } else {
        try {
          const response = await axios.get("/voucher.json");
          setDatas(response.data.slice(0, 3)); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    const handleStorage = () => {
      const local = localStorage.getItem("voucher");
      if (local) setDatas(JSON.parse(local).slice(0, 3));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleDetailClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.voucher}>
      {voucher.map((voucher, index) => (
        <div className={styles.voucher_card} key={index}>
          <h2 className={styles.title_voucher}>{voucher.title}</h2>
          <p className={styles.p_voucher}>{voucher.subtitle}</p>
          <p className={styles.p_voucher}>{voucher.condition}</p>
          <button
            className={styles.button_detail}
            onClick={() => handleDetailClick(voucher)}
          >
            Detail
          </button>
        </div>
      ))}

      {/* Popup Detail Voucher */}
      <DetailVoucher isOpen={isOpen} onClose={closePopup} voucher={selectedItem} />
    </div>
  );
}

export default Voucher;
