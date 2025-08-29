import Hero from '../components/Hero.jsx/Hero';
import Navbar from '../components/Navbar/Navbar';
import Popular from '../components/Popular/Popular';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
    </div>
  );
}

export default Home;