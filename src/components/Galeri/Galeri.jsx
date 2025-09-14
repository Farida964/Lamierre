import styles from "./galeri.module.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";


function Galeri() {
  const [artikel, setArtikel] = useState([]); // simpan semua artikel.json
  const [konten, setKonten] = useState([]); // simpan semua konten.json
  const videoRefs = useRef([]); // untuk kontrol video play/pause
  const [playingIndex, setPlayingIndex] = useState(null); 

  useEffect(() => {
    // Ambil artikel.json
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("/artikel.json");
        setArtikel(response.data); // simpan semua artikel
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

  const handlePlay = (index) => {
  setPlayingIndex(index); // ubah ke mode video
  setTimeout(() => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play(); // langsung play setelah render
    }
  }, 0);
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
          />
          <p className={styles.artikelDesc}>{artikel[0].desc}</p>
        </div>
      )}

     <div className={styles.bottomRow}>
  {konten.slice(0, 4).map((item, index) => (
    <div key={index} className={styles.card}>
      {playingIndex === index ? (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className={styles.media}
          controls
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={item.img}
          alt={item.title}
          className={styles.media}
          onClick={() => handlePlay(index)}
          style={{ cursor: "pointer" }}
        />
      )}

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
