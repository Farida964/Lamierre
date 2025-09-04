import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import CaraBeli from './page/CaraBeli';
import Faq from './page/Faq';
import Pembayaran from './page/Pembayaran';
import Pengiriman from './page/Pengiriman';
import Privasi from './page/Privasi';
import TentangKami from './page/TentangKami';
import Gallery from './page/Gallery';
import Review from './page/Review';
import Product from './page/Product';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carabeli" element={<CaraBeli />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/pengiriman" element={<Pengiriman />} />
      <Route path="/privasi" element={<Privasi />} />
      <Route path="/tentang" element={<TentangKami />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/review" element={<Review />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    
    
    </>
  )
}

export default App
