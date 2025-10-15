import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Popular from '../components/Home/Popular/Popular';
import Voucher from '../components/Home/Voucher/Voucher';
import Footer from '../components/Footer/Footer';
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        {/* 🔹 Title — penting untuk Google & CTR */}
        <title>Hijab Lamierre | Hijab Premium & Hijab Palestina Elegan</title>

        {/* 🔹 Meta Description — ringkas, deskriptif, <155 karakter */}
        <meta
          name="description"
          content="Hijab Lamierre menjual hijab premium & hijab Palestina elegan dengan bahan berkualitas, nyaman dipakai, dan penuh makna. Temukan gaya berhijab terbaikmu di Lamierre.id."
        />

        {/* 🔹 Keywords — variasi alami */}
        <meta
          name="keywords"
          content="hijab lamierre, hijab premium, hijab palestina, hijab bogor, toko hijab, hijab syar'i, hijab modis, hijab elegan"
        />

        {/* 🔹 Canonical URL */}
        <link rel="canonical" href="https://lamierre.id/" />

        {/* 🔹 Open Graph (Facebook, WhatsApp, dsb) */}
        <meta property="og:title" content="Hijab Lamierre | Hijab Premium & Hijab Palestina Elegan" />
        <meta
          property="og:description"
          content="Temukan koleksi hijab premium & hijab Palestina terbaru dari Lamierre. Nyaman, stylish, dan bermakna."
        />
        <meta property="og:image" content="https://lamierre.id/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lamierre.id/" />
        <meta property="og:site_name" content="Hijab Lamierre" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hijab Lamierre | Hijab Premium & Hijab Palestina Elegan" />
        <meta
          name="twitter:description"
          content="Lamierre.id - Koleksi hijab premium & hijab Palestina berkualitas tinggi, nyaman, dan elegan."
        />
        <meta name="twitter:image" content="https://lamierre.id/images/og-image.jpg" />

        {/* 🔹 Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hijab Lamierre",
            "url": "https://lamierre.id/",
            "logo": "https://lamierre.id/images/logo.png",
            "description": "Hijab Lamierre adalah brand hijab premium dan hijab Palestina yang mengutamakan kenyamanan, keanggunan, dan nilai spiritual.",
            "sameAs": [
              "https://www.instagram.com/lamierre.id",
              "https://www.tiktok.com/@lamierre.id"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@lamierre.id",
              "areaServed": "ID"
            }
          })}
        </script>

        {/* 🔹 Schema WebSite (untuk meningkatkan discoverability di hasil Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Hijab Lamierre",
            "url": "https://lamierre.id/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://lamierre.id/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <Popular />
      <Voucher />
      <Footer />
    </div>
  );
}

export default Home;
