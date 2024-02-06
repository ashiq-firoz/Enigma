export default function About() {
    const sectionStyle = {
        backgroundImage: `url('/section.png')`,
        backgroundSize: 'cover',  // Adjust this property based on your design requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '800px',  // Adjust the height based on your design requirements
    };

    return (
        <section style={sectionStyle} id="about">
            {/* Your section content goes here */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 grid-flow-row-dense">
                    <div className="mb-4  md:col-span-2 lg:col-span-2 lg:row-span-3">
                    <h1 className="text-yellow-600 py-10 px-4 text-5xl hover:transform transition-transform hover:opacity-100 opacity-0 w-full h-full">Services</h1>
                            <p>
                            Embark on a journey with Enigma IIITK - a dynamic space where data transforms into knowledge and ideas come to life. From deciphering patterns to predicting the future, we explore the vast landscape of Artificial Intelligence and Machine Learning. Join us in unravelling the mysteries, crafting solutions, and being at the forefront of innovation.
                            </p>
                    </div>
                    <div className="mb-4  md:col-span-2 lg:col-span-2 lg:row-span-3">
                    <h1 className="text-yellow-600 py-10 px-4 text-5xl hover:transform transition-transform hover:opacity-100 opacity-0 w-full h-full">Services</h1>
                            <p>
                            Embark on a journey with Enigma IIITK - a dynamic space where data transforms into knowledge and ideas come to life. From deciphering patterns to predicting the future, we explore the vast landscape of Artificial Intelligence and Machine Learning. Join us in unravelling the mysteries, crafting solutions, and being at the forefront of innovation.
                            </p>
                    </div>
            </div>
        </section>
    );
}
