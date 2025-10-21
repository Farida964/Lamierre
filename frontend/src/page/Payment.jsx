import { Suspense, lazy } from "react";

// Lazy load komponen besar supaya initial load lebih ringan
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Hero = lazy(() => import("../components/Hero/Hero"));
const Payments = lazy(() => import("../components/Product/Payments/Payments"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function Payment() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <Payments />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Payment;
