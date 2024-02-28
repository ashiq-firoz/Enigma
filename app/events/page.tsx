'use client'
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Error404: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
        <Navbar/>
      <ExampleContent />
      <FuzzyOverlay />
      <Footer/>
    </div>
  );
};

const FuzzyOverlay: React.FC = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/error.jpg")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent: React.FC = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Events Page Under Construction...
      </p>
     
      
    </div>
  );
};

export default Error404;
