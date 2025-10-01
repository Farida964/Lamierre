import styles from "./artikel2.module.css";
import { Link } from "react-router-dom";

function Artikel02() {
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                      <Link className={styles.button} to="/gallery">Back</Link>
                    </div>
            <div className={styles.bannerWrapper}>
                <img src="/Ayubi_TN.png" alt="Aqdisha" className={styles.imgkiri}/>

                <div className={styles.textkanan}>
                    <h2 className={styles.title}>AYYUBI</h2>
                    <h5 className={styles.isi}>AYYUBI, Kisah Generasi Salahuddin Al-Ayuhi menjadi saksi lahirnya para pembebas Al-Agaha, 
                        hasil dari peran serta wanita-wanita yang tangguh imannya, penuh kesabaran dan kebijaksanaan dalam mendidik dan 
                        membentuk generasi ini.</h5>
                </div>
                
            </div>
            <span className={styles.detail}>Menjadi inspirasi dalam pembuatan searves "Frau de Lichts series" detail moti! Keffiyeh khas 
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