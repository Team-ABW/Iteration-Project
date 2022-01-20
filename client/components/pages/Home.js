import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home({isLoggedIn}, {setIsLoggedIn}) {
  return (
    <>
      <HeroSection />
      <Cards isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </>
  );
}

export default Home;
