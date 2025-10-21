import { Suspense, lazy } from "react";
import Artikel01 from "../components/Artikel/Artikel01/Artikel01";
import { Helmet } from "react-helmet-async";

// Dynamic import
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Hero = lazy(() => import("../components/Hero/Hero"));

function Artikel1() {
  return (
    <>
      <Helmet>
        <title>
          Aqdisha Lamierre | Makna dan Asal Kata Baitul Maqdis | Hijab Lamierre
        </title>

        <meta
          name="description"
          content="Temukan kisah di balik nama Aqdisha yang terinspirasi dari Baitul Maqdis. Artikel penuh makna dari Hijab Lamierre."
        />
        <meta
          name="keywords"
          content="Aqdisha, Baitul Maqdis, hijab lamierre, hijab premium, hijab muslimah, hijab elegan, hijab syar'i, hijab modern"
        />
        <link
          rel="canonical"
          href="https://lamierre.id/artikel/aqdisha-baitul-maqdis"
        />

        {/* 🔹 OPEN GRAPH */}
        <meta
          property="og:title"
          content="Aqdisha Lamierre | Kisah dari Baitul Maqdis"
        />
        <meta
          property="og:description"
          content="Pelajari asal-usul nama Aqdisha yang diambil dari kata suci Baitul Maqdis. Temukan inspirasi hijabmu bersama Lamierre."
        />
        <meta
          property="og:image"
          content="https://lamierre.id/images/artikel/aqdisha-lamierre.jpg"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://lamierre.id/artikel/aqdisha-baitul-maqdis"
        />
        <meta property="og:site_name" content="Hijab Lamierre" />

        {/* 🔹 TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aqdisha Lamierre | Makna Baitul Maqdis"
        />
        <meta
          name="twitter:description"
          content="Cerita penuh makna dari Hijab Lamierre tentang Aqdisha, yang terinspirasi dari Baitul Maqdis."
        />
        <meta
          name="twitter:image"
          content="https://lamierre.id/images/artikel/aqdisha-lamierre.jpg"
        />

        {/* 🔹 STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Aqdisha Lamierre | Makna dan Asal Kata Baitul Maqdis",
            author: {
              "@type": "Organization",
              name: "Hijab Lamierre",
              url: "https://lamierre.id",
            },
            publisher: {
              "@type": "Organization",
              name: "Hijab Lamierre",
              logo: {
                "@type": "ImageObject",
                url: "https://lamierre.id/images/logo.png",
              },
            },
            datePublished: "2025-10-01",
            image: "https://lamierre.id/images/artikel/aqdisha-lamierre.jpg",
            url: "https://lamierre.id/artikel/aqdisha-baitul-maqdis",
            description:
              "Aqdisha berasal dari kata Baitul Maqdis yang berarti kesucian. Nama ini menjadi simbol hijab Lamierre—elegan, bermakna, dan penuh nilai spiritual.",
            articleSection: "Inspirasi Hijab & Sejarah",
            mainEntityOfPage:
              "https://lamierre.id/artikel/aqdisha-baitul-maqdis",
          })}
        </script>
      </Helmet>

      {/* 🔹 Suspense untuk dynamic import */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Navbar />
          <Hero />
          <Artikel01 />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Artikel1;
