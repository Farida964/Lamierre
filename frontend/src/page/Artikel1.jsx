import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from '../components/Hero.jsx/Hero';
import Artikel01 from "../components/Artikel01/Artikel01";

function Artikel1() {
    return (
        <>
        <div className="container">
            <Navbar />
            <Hero />   
            <Artikel01 />  
            <Footer />

        </div>
        </>

    )
}

export default Artikel1;