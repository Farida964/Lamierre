import styles from "./artikel3.module.css";
import { Link } from "react-router-dom";

function Artikel03() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Link className={styles.button} to="/gallery">
          Back
        </Link>
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
            SYAMEERA dari kata <strong>SHAM</strong>, Baitul Maqdis terletak di negeri Syam yang kita
            kenal akan keberkahannya, yang telah menjadi inspirasi dunia. Kisah kedekatannya dengan
            Al-Qur'an, ketangguhannya dalam berjuang, keimanannya yang teguh, dan tawadhu’nya kepada
            Allah telah menjadi inspirasi dan pusat perhatian dunia hingga kini.
          </h5>
        </div>
      </div>

      <span className={styles.detail}>
        Menjadi inspirasi dalam pembuatan scarves "Frau de Lichts series" dengan detail motif khas
        Keffiyeh Palestina dan stilasi kompleks Masjidil Aqsha, bunga-bunga teknik watercolor, serta
        perpaduan warna pastel yang colorful merepresentasikan perempuan ceria, tangguh, namun tetap
        anggun saat digunakan.
      </span>

      <div className={styles.buttonWrapperRight}>
        <Link className={styles.button02} to="/product">
          Product
        </Link>
      </div>
    </div>
  );
}

export default Artikel03;
