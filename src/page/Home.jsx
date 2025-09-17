import Hero from '../components/Hero.jsx/Hero';
import Navbar from '../components/Navbar/Navbar';
import Popular from '../components/Popular/Popular';
import Voucher from '../components/Voucher/Voucher';
import Footer from '../components/Footer/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Voucher />
      <Footer />
    </div>
  );
}

export default Home;