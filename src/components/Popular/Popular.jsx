import styles from "./popular.module.css";

function Popular() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerLeft}></div>
      <span className={styles.text}>Most Popular</span>
      <div className={styles.bannerRight}></div>
    </div>
  );
}

export default Popular;
