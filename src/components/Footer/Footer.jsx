import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h3>Customer Info</h3>
          <ul>
            <li><a href="/carabeli">Cara Beli</a></li>
            <li><a href="/pembayaran">Informasi Pembayaran</a></li>
            <li><a href="/pengiriman">Pengiriman</a></li>
          </ul>
        </div>
        <div>
          <h3>Information</h3>
          <ul>
            <li><a href="/tentang">Tentang Kami</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privasi">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/lamierre.id" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@lamierre.id" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png" alt="TikTok" />
            </a>
            <a href="https://wa.me/628xxxxxx" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div>
          <h3>Sign Up</h3>
          <p>Dapatkan promo & info eksklusif langsung ke email kamu.</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.paymentLogos}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Paypal_2014_logo.png" alt="Paypal" />
        </div>
        <p>
          © {new Date().getFullYear()} <strong>L@mierrè</strong> – All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
