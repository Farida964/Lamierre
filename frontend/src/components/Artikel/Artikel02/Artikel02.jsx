import styles from "./artikel2.module.css";
import { Link } from "react-router-dom";

function Artikel02() {
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                      <Link className={styles.button} to="/gallery">Back</Link>
                    </div>
            <div className={styles.bannerWrapper}>
                <img src="/artikel ayubi.png" alt="Ayubi" className={styles.imgkiri}/>

                <div className={styles.textkanan}>
                    <h2 className={styles.title}>AYUBI</h2>
                    <h5 className={styles.isi}>AYUBI, Kisah Generasi Salahuddin Al-Ayubi menjadi saksi lahirnya para pembebas Al-Aqsha, 
                        hasil dari peran serta wanita-wanita yang tangguh imannya, penuh kesabaran dan kebijaksanaan dalam mendidik dan 
                        membentuk generasi ini.</h5>
                </div>
                
            </div>
            <span className={styles.detail}>Menjadi inspirasi dalam pembuatan searves "Frau de Lichts series" detail motif Keffiyeh khas 
                Palestine, bunga bunga teknik watercolor dan perpaduan warna pastel yang kontras merepresentasikan perempuan 
                yang tangguh namun tetap anggun penuh kelembutan dan keceriaan seperti para perempuan hebat. pencetak Generasi 
                Shalahuddin.</span>

                <div className={styles.buttonWrapperRight}>
  <Link className={styles.button02} to="/product">Product</Link>
</div>

        </div>
    )
}

export default Artikel02;