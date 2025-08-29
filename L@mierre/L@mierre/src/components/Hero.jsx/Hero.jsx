import styles from "./hero.module.css";

function Hero() {
    return (
        <div className={styles.hero}>
            <span className={styles.span01}>Hijab</span>
            <span className={styles.span02}>L@mierrè</span>
        </div>
    )
}

export default Hero;