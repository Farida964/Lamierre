import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar__list_container}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><Link to="/">Home</Link></li>
                <li className={styles.navbar__item}><Link to="/product">Product</Link></li>
                <li className={styles.navbar__item}><Link to="/gallery">Gallery</Link></li>
                <li className={styles.navbar__item}><Link to="/review">Review</Link></li>
            </ul>
        </div>

    </nav>

  );
}

export default Navbar