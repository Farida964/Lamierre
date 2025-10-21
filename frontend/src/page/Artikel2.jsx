import styles from "./artikel2.module.css";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Hero = lazy(() => import("../../components/Hero/Hero"));

function Artikel2() {
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
            src="/artikel ayubi.png"
            alt="Scarves Ayubi"
            className={styles.imgkiri}
            loading="lazy"
            width="500"
            height="auto"
          />
          <div className={styles.textkanan}>
            <h2 className={styles.title}>AYUBI</h2>
            <h5 className={styles.isi}>
              AYUBI, Kisah Generasi Salahuddin Al-Ayubi menjadi saksi lahirnya para pembebas Al-Aqsha...
            </h5>
          </div>
        </div>

        <span className={styles.detail}>
          Menjadi inspirasi dalam pembuatan scarves "Frau de Lichts series", detail motif Keffiyeh khas Palestina...
        </span>

        <div className={styles.buttonWrapperRight}>
          <Link className={styles.button02} to="/product">Product</Link>
        </div>
      </div>

      <Footer />
    </Suspense>
  );
}

export default Artikel2;
