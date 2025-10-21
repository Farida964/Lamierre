import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero.jsx";
import Artikel02 from "../components/Artikel/Artikel02/Artikel02.jsx";
import { Helmet } from "react-helmet-async";

function Artikel2() {
  return (
    <>
      <Helmet>
        <title>
          AYUBI Lamierre | Kisah Generasi Salahuddin Al-Ayubi & Pembebasan Al-Aqsha
        </title>

        <meta
          name="description"
          content="Temukan kisah inspiratif generasi Salahuddin Al-Ayubi yang menjadi saksi lahirnya para pembebas Al-Aqsha. Artikel penuh makna dari Hijab Lamierre."
        />
        <meta
          name="keywords"
          content="Ayubi, Salahuddin Al-Ayubi, generasi pembebas, Al-Aqsha, hijab lamierre, hijab premium, inspirasi islami, kisah muslimah, sejarah islam"
        />
        <link
          rel="canonical"
          href="https://lamierre.id/artikel/ayubi-generasi-pembebas-al-aqsha"
        />

        {/* 🔹 OPEN GRAPH */}
        <meta
          property="og:title"
          content="AYUBI Lamierre | Kisah Generasi Salahuddin Al-Ayubi & Pembebasan Al-Aqsha"
        />
        <meta
          property="og:description"
          content="Kisah inspiratif generasi Salahuddin Al-Ayubi yang menjadi saksi lahirnya para pembebas Al-Aqsha. Temukan maknanya bersama Hijab Lamierre."
        />
        <meta
          property="og:image"
          content="https://lamierre.id/images/artikel/ayubi-lamierre.jpg"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://lamierre.id/artikel/ayubi-generasi-pembebas-al-aqsha"
        />
        <meta property="og:site_name" content="Hijab Lamierre" />

        {/* 🔹 TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AYUBI Lamierre | Kisah Generasi Salahuddin Al-Ayubi & Pembebasan Al-Aqsha"
        />
        <meta
          name="twitter:description"
          content="Artikel inspiratif dari Hijab Lamierre tentang generasi Salahuddin Al-Ayubi yang meneladani perjuangan membebaskan Al-Aqsha."
        />
        <meta
          name="twitter:image"
          content="https://lamierre.id/images/artikel/ayubi-lamierre.jpg"
        />

        {/* 🔹 STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "AYUBI Lamierre | Kisah Generasi Salahuddin Al-Ayubi & Pembebasan Al-Aqsha",
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
            datePublished: "2025-10-15",
            image: "https://lamierre.id/images/artikel/ayubi-lamierre.jpg",
            url: "https://lamierre.id/artikel/ayubi-generasi-pembebas-al-aqsha",
            description:
              "AYUBI adalah simbol semangat generasi Salahuddin Al-Ayubi — para pembebas Al-Aqsha. Sebuah kisah inspiratif dari Hijab Lamierre tentang keteguhan, iman, dan perjuangan yang abadi.",
            articleSection: "Inspirasi Islam & Sejarah",
            mainEntityOfPage:
              "https://lamierre.id/artikel/ayubi-generasi-pembebas-al-aqsha",
          })}
        </script>
      </Helmet>

      <div className="container">
        <Navbar />
        <Hero />
        <Artikel02 />
        <Footer />
      </div>
    </>
  );
}

export default Artikel2;
