import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

// Lazy load komponen berat
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Hero = lazy(() => import("../components/Hero/Hero"));
const Products = lazy(() => import("../components/Product/Products/Products"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function Product() {
  return (
    <>
      <Helmet>
        <title>Produk Koleksi Hijab Lamierre - Aqdisha, Syameera, & Ayubi</title>
        <meta
          name="description"
          content="Lihat berbagai koleksi hijab premium Lamierre seperti Aqdisha, Syameera, dan Ayubi. Setiap koleksi menghadirkan keanggunan, makna, dan kualitas terbaik untuk Muslimah modern."
        />
        <meta
          name="keywords"
          content="Hijab Lamierre, Galeri Hijab, Koleksi Hijab, Aqdisha, Syameera, Ayubi, Hijab Premium, Hijab Palestina, Hijab Modis, Hijab Elegan"
        />
        <link rel="canonical" href="https://lamierre.id/gallery" />
        {/* Open Graph */}
        <meta property="og:title" content="Galeri Hijab Lamierre - Aqdisha, Syameera, & Ayubi" />
        <meta property="og:description" content="Jelajahi Galeri Hijab Lamierre yang berisi koleksi terbaik seperti Aqdisha, Syameera, dan Ayubi. Tersedia hijab premium, modis, dan bermakna spiritual." />
        <meta property="og:image" content="https://lamierre.id/images/og-gallery.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lamierre.id/gallery" />
        <meta property="og:site_name" content="Lamierre Hijab" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri Hijab Lamierre - Aqdisha, Syameera, & Ayubi" />
        <meta name="twitter:description" content="Temukan berbagai koleksi hijab Lamierre seperti Aqdisha, Syameera, dan Ayubi. Koleksi hijab elegan dan bermakna." />
        <meta name="twitter:image" content="https://lamierre.id/images/og-gallery.jpg" />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <Products />
        <Footer />
      </Suspense>
    </>
  );
}

export default Product;
