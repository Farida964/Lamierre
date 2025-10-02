import styles from "./artikel3.module.css";
import { Link } from "react-router-dom";

function Artikel03() {
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                      <Link className={styles.button} to="/gallery">Back</Link>
                    </div>
            <div className={styles.bannerWrapper}>
                <img src="/artikel syameera.png" alt="Syameera" className={styles.imgkiri}/>

                <div className={styles.textkanan}>
                    <h2 className={styles.title}>SYAMEERA</h2>
                    <h5 className={styles.isi}>SYAMEERA dari kata SHAM, Baitul Maqdis terletak di negeri Syam yang kita kenal akan keberkahannya, 
                        yang telah menjadi inspirasi dunia. Kisah kedekatannya dengan Al-Qur'an, ketangguhannya dalam berjuang, 
                        keimanannya yang teguh, dan tawadhu'nya kepada Allah telah menjadi inspirasi dan pusat perhatian dunia hingga 
                        kini.</h5>
                </div>
                
            </div>
            <span className={styles.detail}>Menjadi inspirasi dalam pembuatan acarves "Frau de Lichts series" detail motif khas Kefiyyeh Palestina 
                dan stiasi komplek Masjidil Aqsha, bunga dengan teknik watercolor dan perpaduan warna pastel yang colorful 
                merepresentasikan perempuan ceria. tangguh namun tetap anggun saat digunakan.</span>

                <div className={styles.buttonWrapperRight}>
  <Link className={styles.button02} to="/product">Product</Link>
</div>

        </div>
    )
}

export default Artikel03;