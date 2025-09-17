import styles from "./galeri.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import Artikel1 from "../page/Artikel1";

function Galeri() {
  const [artikel, setArtikel] = useState([]);
  const [konten, setKonten] = useState([]);

  useEffect(() => {
    // Ambil artikel.json
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("/artikel.json");
        setArtikel(response.data);
      } catch (error) {
        console.error("Error fetching artikel:", error);
      }
    };

    // Ambil konten.json
    const fetchKonten = async () => {
      try {
        const local = localStorage.getItem("konten");
        if (local) {
          setKonten(JSON.parse(local));
        } else {
          const response = await axios.get("/konten.json");
          setKonten(response.data);
        }
      } catch (error) {
        console.error("Error fetching konten:", error);
      }
    };

    fetchArtikel();
    fetchKonten();
  }, []);

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
            onClick={() => window.open('/artikel1', '_self')}
            style={{ cursor: "pointer" }}
          />
          <p className={styles.artikelDesc}>{artikel[0].desc}</p>
        </div>
      )}

      <div className={styles.bottomRow}>
        {konten.slice(0, 4).map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.img}
              alt={item.title}
              className={styles.media}
              onClick={() => window.open(item.video, "_blank")}
              style={{ cursor: "pointer" }}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.sub_title}</p>
          </div>
        ))}
      </div>

      {/* ====== Artikel Bawah (index 1) ====== */}
      {artikel.length > 1 && (
        <div className={styles.topRow}>
          <img
            src={artikel[1].img}
            alt="Artikel Bawah"
            className={styles.artikelImg}
          />
          <p className={styles.artikelDesc}>{artikel[1].desc}</p>
        </div>
      )}
    </div>
  );
}

export default Galeri;