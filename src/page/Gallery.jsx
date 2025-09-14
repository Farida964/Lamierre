import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from '../components/Hero.jsx/Hero';
import Galeri from '../components/Galeri/Galeri';

function Gallery() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Galeri />

      {/* <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <p className="gallery-subtitle">
          Thank you to our customers who have trusted Lamierrè.
        </p>

        <div className="gallery-grid">
          Gambar bisa ganti sesuai mood board
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
        </div>
      </div> */}

      <Footer />

      <style>{`
        .gallery-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1rem;
          text-align: center;
        }

        .gallery-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #b45c5c;
        }

        .gallery-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          background: #e9a6a6;
          border-radius: 12px;
          height: 200px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;
