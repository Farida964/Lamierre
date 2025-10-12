// Payments.jsx
import styles from "./payments.module.css";
function Payments() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose Your Payment Method</h2>
      <div className={styles.options}>
        <a
          href="https://wa.me/6285210080013?text=L@mierre!%20Halo%20saya%20ingin%20beli%20produk%20[fill]"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          WhatsApp
        </a>
        <a
          href="https://shopee.co.id/ail_9_hil2"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Shopee
        </a>
      </div>
    </div>
  );
}

export default Payments;
