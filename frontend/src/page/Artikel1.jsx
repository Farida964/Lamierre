import styles from "./artikel1.module.css";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

// Dynamic import komponen umum
const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Hero = lazy(() => import("../../components/Hero/Hero"));

function Artikel1() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />

      <div className={styles.container}>
        <div className={styles.buttonWrapper}>
          <Link className={styles.button} to="/gallery">Back</Link>
        </div>

        <div className={styles.bannerWrapper}>
          <img
            src="/artikel aqdisha.png"
            alt="Scarves Aqdisha"
            className={styles.imgkiri}
            loading="lazy"
            width="500"
            height="auto"
          />
          <div className={styles.textkanan}>
            <h2 className={styles.title}>AQDISHA</h2>
            <h5 className={styles.isi}>
              AQDISHA, dari kata Baitul Maqdis, yang menjadi saksi bisu kisah pembebasan al-Aqsa...
            </h5>
          </div>
        </div>

        <span className={styles.detail}>
          Menjadi inspirasi dalam pembuatan scarves "Frau de Lichts series", detail motif stilasi Dome of Rock...
        </span>

        <div className={styles.buttonWrapperRight}>
          <Link className={styles.button02} to="/product">Product</Link>
        </div>
      </div>

      <Footer />
    </Suspense>
  );
}

export default Artikel1;
