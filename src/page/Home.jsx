import Hero from '../components/Hero.jsx/Hero';
import Navbar from '../components/Navbar/Navbar';
import Popular from '../components/Popular/Popular';
import Footer from '../components/Footer/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Footer />
    </div>
  );
}

export default Home;