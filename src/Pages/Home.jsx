import React from 'react'
import Header from './../components/Header/Header';
import HeroSection from './../components/HeroSection/HeroSection';
import DeliverySection from './../components/DeliverySection/DeliverySection';
import AboutUsSection from './../components/AboutUsSection/AboutUsSection';
import OrderSection from './../components/OrderSection/OrderSection';
import AppSection from './../components/AppSection/AppSection';
import Footer from './../components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <DeliverySection />
      <AboutUsSection />
      <OrderSection />
      <AppSection />
    </>
  );
}

export default Home