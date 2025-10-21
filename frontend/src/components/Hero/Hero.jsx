import { useEffect, useRef } from "react";
import styles from "./hero.module.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const screenWidth = window.innerWidth;

    // Pilih 1 gambar sesuai lebar layar
    if (screenWidth <= 450) {
      hero.dataset.bg = "/5.png";
    } else if (screenWidth <= 757) {
      hero.dataset.bg = "/3.png";
    } else {
      hero.dataset.bg = "/2.png";
    }

    // Lazy load background: baru ganti background-image saat kelihatan di layar
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        hero.style.backgroundImage = `url('${hero.dataset.bg}')`;
        observer.disconnect();
      }
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return <div ref={heroRef} className={styles.hero}></div>;
}

export default Hero;
