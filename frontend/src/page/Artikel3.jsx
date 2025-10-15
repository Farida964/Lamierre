import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from '../components/Hero/Hero';
import Artikel03 from "../components/Artikel/Artikel03/Artikel03";
import { Helmet } from "react-helmet-async";

function Artikel3() {
    return (
        <>
            <Helmet>
                {/* 🔹 Title dan Meta Description */}
                <title>Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre</title>
                <meta
                    name="description"
                    content="Syameera terinspirasi dari kata Syam — negeri penuh berkah tempat Baitul Maqdis berdiri. Koleksi hijab Lamierre ini mencerminkan keanggunan dan makna spiritual dari sejarah para pejuang Islam."
                />

                {/* 🔹 Kata kunci SEO */}
                <meta
                    name="keywords"
                    content="Syameera, Hijab Syameera, Hijab Lamierre, Hijab Palestina, Baitul Maqdis, Syam, Hijab Premium, Hijab Muslimah, Hijab Inspiratif"
                />

                {/* 🔹 Canonical URL */}
                <link rel="canonical" href="https://lamierre.id/artikel/syameera" />

                {/* 🔹 Open Graph (Facebook, WhatsApp, dsb) */}
                <meta property="og:title" content="Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre" />
                <meta
                    property="og:description"
                    content="Syameera adalah simbol keanggunan dan keberkahan yang terinspirasi dari Syam — negeri tempat berdirinya Baitul Maqdis. Temukan makna dan kisahnya hanya di Lamierre.id."
                />
                <meta property="og:image" content="https://lamierre.id/images/artikel/syameera-og.jpg" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://lamierre.id/artikel/syameera" />
                <meta property="og:site_name" content="Lamierre Hijab" />

                {/* 🔹 Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Syameera - Terinspirasi dari Negeri Syam | Hijab Lamierre" />
                <meta
                    name="twitter:description"
                    content="Kisah Syameera: Hijab dengan makna dari Syam, negeri penuh berkah tempat berdirinya Baitul Maqdis. Temukan koleksinya di Lamierre.id."
                />
                <meta name="twitter:image" content="https://lamierre.id/images/artikel/syameera-og.jpg" />

                {/* 🔹 Structured Data (schema.org) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Syameera - Terinspirasi dari Negeri Syam",
                        "description":
                            "Syameera terinspirasi dari kata Syam — negeri penuh berkah tempat Baitul Maqdis berdiri. Koleksi hijab Lamierre ini mencerminkan keanggunan dan makna spiritual.",
                        "image": "https://lamierre.id/images/artikel/syameera-og.jpg",
                        "author": {
                            "@type": "Organization",
                            "name": "Lamierre Hijab",
                            "url": "https://lamierre.id/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Lamierre",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://lamierre.id/images/logo.png"
                            }
                        },
                        "url": "https://lamierre.id/artikel/syameera",
                        "mainEntityOfPage": "https://lamierre.id/artikel/syameera",
                        "datePublished": "2025-10-15",
                        "dateModified": "2025-10-15"
                    })}
                </script>
            </Helmet>

            <div className="container">
                <Navbar />
                <Hero />
                <Artikel03 />
                <Footer />
            </div>
        </>
    );
}

export default Artikel3;
