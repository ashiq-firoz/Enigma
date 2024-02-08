'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import About from './components/about';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { HoverImageLinks } from './components/linkHover';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      {!isSmallScreen && <br />}
      <Hero />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {!isSmallScreen && <br />}
      <HoverImageLinks/>
      <About /> 
      <Footer/>
    </>
  );
}
