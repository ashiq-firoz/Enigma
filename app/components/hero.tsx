import React from 'react';
import '@fontsource/montserrat';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    const heroStyle: React.CSSProperties = {
        height: '35vh', // Set a constant height of 30% of the viewport height
        display: 'flex',
        flexDirection: 'column', // Set the direction to column
        alignItems: 'center',
        justifyContent: 'center',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Maintain aspect ratio while covering the container
    };

    return (
        
        <section style={heroStyle}>
      <br /><br /><br /><br /><br /><br />
      {/* Your section content goes here */}
      {/* <img src="/HeroStack.png" alt="Hero Image" style={imageStyle} /> */}
      {/* <div className="titleMain text-5xl lg:text-[19rem] p-4 font-bold uppercase">
        ENIGMA
      </div> */}
      {/* <br /> */}
     
      <div className="vibrate-container">
      <img src="/title.png" alt="ENIGMA" className='lg:h-{100} vibrate-img' />
    </div>
      <center>
        <DrawOutlineButton>Let's Go</DrawOutlineButton>
      </center>
    </section>
    
    );
};

interface DrawOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({ children, ...rest }) => {
    return (
        <a href="#letsgo"
    
    className="group relative bg-transparent px-4 py-2 border rounded font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 hover:bg-slate-700 hover:border-transparent"
>
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </a>
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
          backgroundImage: 'url("/logo_fuzz.jpg")',
          height: "1rem",
          // backgroundImage: 'url("/noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
      />
    );
  };
  

export default Hero;
