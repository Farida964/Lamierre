import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Popular from '../components/Home/Popular/Popular';
import Voucher from '../components/Home/Voucher/Voucher';
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