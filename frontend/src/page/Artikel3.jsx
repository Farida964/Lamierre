import { Suspense, lazy } from "react";
import Artikel03 from "../components/Artikel/Artikel03/Artikel03";
import { Helmet } from "react-helmet-async";

// Dynamic import
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Hero = lazy(() => import("../components/Hero/Hero"));

function Artikel3() {
  return (
    <>
      <Helmet>
        <title>Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre</title>
        <meta
          name="description"
          content="Syameera terinspirasi dari kata Syam — negeri penuh berkah tempat Baitul Maqdis berdiri. Koleksi hijab Lamierre ini mencerminkan keanggunan dan makna spiritual dari sejarah para pejuang Islam."
        />
        <meta
          name="keywords"
          content="Syameera, Hijab Syameera, Hijab Lamierre, Hijab Palestina, Baitul Maqdis, Syam, Hijab Premium, Hijab Muslimah, Hijab Inspiratif"
        />
        <link rel="canonical" href="https://lamierre.id/artikel/syameera" />

        {/* Open Graph */}
        <meta property="og:title" content="Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre" />
        <meta
          property="og:description"
          content="Syameera adalah simbol keanggunan dan keberkahan yang terinspirasi dari Syam — negeri tempat berdirinya Baitul Maqdis. Temukan makna dan kisahnya hanya di Lamierre.id."
        />
        <meta property="og:image" content="https://lamierre.id/images/artikel/syameera-og.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lamierre.id/artikel/syameera" />
        <meta property="og:site_name" content="Lamierre Hijab" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre" />
        <meta
          name="twitter:description"
          content="Kisah Syameera: Hijab dengan makna dari Syam, negeri penuh berkah tempat berdirinya Baitul Maqdis. Temukan koleksinya di Lamierre.id."
        />
        <meta name="twitter:image" content="https://lamierre.id/images/artikel/syameera-og.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Syameera - Terinspirasi dari Negeri Syam",
            description:
              "Syameera terinspirasi dari kata Syam — negeri penuh berkah tempat Baitul Maqdis berdiri. Koleksi hijab Lamierre ini mencerminkan keanggunan dan makna spiritual.",
            image: "https://lamierre.id/images/artikel/syameera-og.jpg",
            author: {
              "@type": "Organization",
              name: "Lamierre Hijab",
              url: "https://lamierre.id/",
            },
            publisher: {
              "@type": "Organization",
              name: "Lamierre",
              logo: {
                "@type": "ImageObject",
                url: "https://lamierre.id/images/logo.png",
              },
            },
            url: "https://lamierre.id/artikel/syameera",
            mainEntityOfPage: "https://lamierre.id/artikel/syameera",
            datePublished: "2025-10-15",
            dateModified: "2025-10-15",
          })}
        </script>
      </Helmet>

      {/* Suspense untuk dynamic import */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Navbar />
          <Hero />
          <Artikel03 />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Artikel3;
