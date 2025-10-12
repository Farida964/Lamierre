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
        <title>Hijab Lamierre | Hijab Palestina</title>
        <meta
          name="description"
          content="Lamierre adalah brand hijab yang menyediakan berbagai macam jenis hijab."
        />
        <meta
          name="keywords"
          content="Hijab, Jilbab, Palestina, Lamierre, Toko Hijab, Hijab Bogor, Hijab Premium"
        />
        <meta
          property="og:title"
          content="Lamieere | Hijab Lamierre | Hijab Palestina"
        />
        <meta
          property="og:description"
          content="Menjual Hijab Premium dengan berbagai macam jenis hijab."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Lamierre.id/" />
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