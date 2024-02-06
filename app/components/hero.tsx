import React from 'react';
import '@fontsource/montserrat';

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
            {/* Your section content goes here */}
            <img src="/HeroStack.png" alt="Hero Image" style={imageStyle} />
            <br />
            <center>
                <a href='#about' className='className="bg-slate hover:bg-slate-600 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>Let's go</a>
            </center>
            
        </section>
    );
}

export default Hero;
