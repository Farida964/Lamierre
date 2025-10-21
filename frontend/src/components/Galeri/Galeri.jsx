import styles from "./galeri.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Galeri() {
  const [artikel, setArtikel] = useState([]);
  const [konten, setKonten] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("/artikel.json", { cache: "force-cache" });
        setArtikel(response.data);
      } catch (error) {
        console.error("Error fetching artikel:", error);
      }
    };

    const fetchKonten = async () => {
      try {
        const local = localStorage.getItem("konten");
        if (local) {
          setKonten(JSON.parse(local));
        } else {
          const response = await axios.get("/konten.json", { cache: "force-cache" });
          setKonten(response.data);
          localStorage.setItem("konten", JSON.stringify(response.data)); 
        }
      } catch (error) {
        console.error("Error fetching konten:", error);
      }
    };

    fetchArtikel();
    fetchKonten();
  }, []);

  // === fungsi helper untuk redirect sesuai JSON ===
  const handleNavigate = (kontenValue) => {
    if (kontenValue.startsWith("http")) {
      window.open(kontenValue, "_blank");
    } else {
      navigate(kontenValue.startsWith("/") ? kontenValue : `/${kontenValue}`);
    }
  };

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerLeft}></div>
        <span className={styles.text}>Gallery</span>
        <div className={styles.bannerRight}></div>
      </div>

      {/* ====== Artikel Atas (index 0) ====== */}
      {artikel.length > 0 && (
        <div className={styles.topRow}>
          <img
            src={artikel[0].img}
            alt="Artikel Atas"
            className={styles.artikelImg}
            loading="lazy" 
            decoding="async"
            style={{ cursor: "pointer" }}
          />
          <p className={styles.artikelDesc}>{artikel[0].desc}</p>
        </div>
      )}

      {/* ====== Konten Bawah ====== */}
      <div className={styles.bottomRow}>
        {konten.slice(0, 4).map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.img}
              alt={item.title}
              className={styles.media}
              onClick={() => handleNavigate(item.konten)}
              loading="lazy" 
              decoding="async"
              style={{ cursor: "pointer" }}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.sub_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeri;
