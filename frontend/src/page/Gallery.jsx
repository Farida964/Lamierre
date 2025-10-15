import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from '../components/Hero/Hero';
import Galeri from '../components/Galeri/Galeri';
import { Helmet } from "react-helmet-async";

function Gallery() {
  return (
    <div>
      <Helmet>
        {/* 🔹 Title & Meta Description */}
        <title>Galeri Koleksi Hijab Lamierre - Aqdisha, Syameera, & Ayubi</title>
        <meta
          name="description"
          content="Lihat berbagai koleksi hijab premium Lamierre seperti Aqdisha, Syameera, dan Ayubi. Setiap koleksi menghadirkan keanggunan, makna, dan kualitas terbaik untuk Muslimah modern."
        />

        {/* 🔹 Kata Kunci */}
        <meta
          name="keywords"
          content="Hijab Lamierre, Galeri Hijab, Koleksi Hijab, Aqdisha, Syameera, Ayubi, Hijab Premium, Hijab Palestina, Hijab Modis, Hijab Elegan"
        />

        {/* 🔹 Canonical URL */}
        <link rel="canonical" href="https://lamierre.id/gallery" />

        {/* 🔹 Open Graph (Facebook, WhatsApp, Instagram preview) */}
        <meta property="og:title" content="Galeri Hijab Lamierre - Aqdisha, Syameera, & Ayubi" />
        <meta
          property="og:description"
          content="Jelajahi Galeri Hijab Lamierre yang berisi koleksi terbaik seperti Aqdisha, Syameera, dan Ayubi. Tersedia hijab premium, modis, dan bermakna spiritual."
        />
        <meta property="og:image" content="https://lamierre.id/images/og-gallery.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lamierre.id/gallery" />
        <meta property="og:site_name" content="Lamierre Hijab" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri Hijab Lamierre - Aqdisha, Syameera, & Ayubi" />
        <meta
          name="twitter:description"
          content="Temukan berbagai koleksi hijab Lamierre seperti Aqdisha, Syameera, dan Ayubi. Koleksi hijab elegan dan bermakna."
        />
        <meta name="twitter:image" content="https://lamierre.id/images/og-gallery.jpg" />

        {/* 🔹 Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Galeri Hijab Lamierre",
            "description":
              "Lihat berbagai koleksi hijab Lamierre seperti Aqdisha, Syameera, dan Ayubi. Hijab premium dengan desain elegan dan makna inspiratif.",
            "url": "https://lamierre.id/gallery",
            "image": "https://lamierre.id/images/og-gallery.jpg",
            "publisher": {
              "@type": "Organization",
              "name": "Lamierre Hijab",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lamierre.id/images/logo.png"
              }
            },
            "mainEntity": [
              {
                "@type": "Product",
                "name": "Hijab Aqdisha",
                "image": "https://lamierre.id/images/produk/aqdisha.jpg",
                "description": "Hijab elegan dengan desain khas Lamierre yang menonjolkan keanggunan Muslimah."
              },
              {
                "@type": "Product",
                "name": "Hijab Syameera",
                "image": "https://lamierre.id/images/produk/syameera.jpg",
                "description": "Hijab terinspirasi dari negeri Syam dan makna spiritual Baitul Maqdis."
              },
              {
                "@type": "Product",
                "name": "Hijab Ayubi",
                "image": "https://lamierre.id/images/produk/ayubi.jpg",
                "description": "Koleksi hijab yang merefleksikan semangat generasi Salahuddin Al-Ayubi."
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <Galeri />
      <Footer />
    </div>
  );
}

export default Gallery;
