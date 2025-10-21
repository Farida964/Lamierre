import styles from "./artikel3.module.css";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Hero = lazy(() => import("../../components/Hero/Hero"));

function Artikel3() {
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
            src="/artikel syameera.png"
            alt="Scarves Syameera"
            className={styles.imgkiri}
            loading="lazy"
            width="500"
            height="auto"
          />
          <div className={styles.textkanan}>
            <h2 className={styles.title}>SYAMEERA</h2>
            <h5 className={styles.isi}>
              SYAMEERA dari kata <strong>SHAM</strong>, Baitul Maqdis terletak di negeri Syam...
            </h5>
          </div>
        </div>

        <span className={styles.detail}>
          Menjadi inspirasi dalam pembuatan scarves "Frau de Lichts series" dengan detail motif khas Keffiyeh Palestina...
        </span>

        <div className={styles.buttonWrapperRight}>
          <Link className={styles.button02} to="/product">Product</Link>
        </div>
      </div>

      <Footer />
    </Suspense>
  );
}

export default Artikel3;
