import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <br /><br />
    <footer className="bg-design flex justify-between items-center p-4">
      <div>
        <p className="text-white">Enigma &copy;2024</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">
          <FaTwitter />
        </a>
        <a href="#" className="text-white">
          <FaFacebook />
        </a>
        <a href="#" className="text-white">
          <FaInstagram />
        </a>
      </div>
    </footer>
    <br /><br />
    </>
  );
};

export default Footer;
