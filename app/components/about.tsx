import React from 'react';

const About = () => {
  const sectionStyle = {
    backgroundImage: `url('/section.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '800px',
  };

  return (
    <section style={sectionStyle} id="about" className="flex justify-center items-center">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 p-2">
        <div className="mb-4 px-8">
          
          <p>
            Embark on a journey with Enigma IIITK - a dynamic space where data transforms into knowledge and ideas come to
            life. From deciphering patterns to predicting the future, we explore the vast landscape of Artificial
            Intelligence and Machine Learning. Join us in unravelling the mysteries, crafting solutions, and being at the
            forefront of innovation.
          </p>
        </div>
        <div className="mb-4 px-8">
          <p>
            Embark on a journey with Enigma IIITK - a dynamic space where data transforms into knowledge and ideas come to
            life. From deciphering patterns to predicting the future, we explore the vast landscape of Artificial
            Intelligence and Machine Learning. Join us in unravelling the mysteries, crafting solutions, and being at the
            forefront of innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
