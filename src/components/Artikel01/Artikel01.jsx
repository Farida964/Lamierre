import styles from "./artikel1.module.css";
import { Link } from "react-router-dom";

function Artikel01() {
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                      <Link className={styles.button} to="/gallery">Back</Link>
                    </div>
            <div className={styles.bannerWrapper}>
                <img src="/Aqdisha_TN.png" alt="Aqdisha" className={styles.imgkiri}/>

                <div className={styles.textkanan}>
                    <h2 className={styles.title}>AQDISHA</h2>
                    <h5 className={styles.isi}>AQDISHA, dari kata Baitul Maqdis, yang menjadi saksi bisu kisah pembebasan al-Aqsa dari tangan Tentara 
                Salto oleh Salahuddin Al-Ayubi. Seorang wanita mulia yang terkenal tak pernah putus menempa spiritualitasnya. 
                Sering membaca Al-Qur'an, salat tahajud di malam hari. Buah hati seorang wanita dan istri yang memiliki impian besar 
                dalam hidup, namanya Ismatuddin Khatun.</h5>
                </div>
                
            </div>
            <span className={styles.detail}>Menjadi inspirasi dalam pembuatan scarves "Frau de Lichts series", detail motif stilasi Dome of rock, 
                bunga tulip dengan teknik watercolor&perpaduan warna pastel yang senada merepresentasikan perempuan 
                cerulas, visimer namun tetap menawan saat digunakan, cocok digunakan untuk perempuan yang ingin tampil 
                kesan cerdas, impian besar penuh keanggunan.</span>

                <div className={styles.buttonWrapperRight}>
  <Link className={styles.button02} to="/product">Product</Link>
</div>

        </div>
    )
}

export default Artikel01;