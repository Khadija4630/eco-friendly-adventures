import React from 'react';
import "./Footer.css";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
   const today = new Date ();
    const year = today.getFullYear();
  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-gray-200">
        <div className="footer-area mb-2 pt-5">
          <div className='flex'>
          <img src="/public/logo.png" alt="" className='w-11 rounded-full p-1 border-none mb-2' />
          <h3 className='text-2xl md:text-4xl mb-3 text-black font-bold '> Eco-Friendly Adventure</h3>
          </div>
          <p className="text-sm text-gray-400 text-center font-semibold" >Copyright &copy; {year} Eco-Friendly Adventures</p>
          <p className="text-gray-400 text-center font-semibold mb-2 text-sm ">All rights reserved</p>
        </div>
        <p className='text-xl font-bold text-black pb-2'> My Social Profiles</p>
        <div className=" mb-2">
          <span className='flex flex-row items-center justify-center mb-2 px-2 text-gray-700'>
            <a className='px-2' href="https://www.facebook.com/profile.php?id=100070584511436" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a className='px-2' href="https://x.com/Khadija2120" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> 
            </a>
            <a  className ='px-2' href="https://www.instagram.com/k.hhadija/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> 
            </a>
          </span>
        </div>
      </footer>
    </>

  );
};

export default Footer;