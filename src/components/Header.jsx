"use client";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white md:bg-black md:bg-opacity-30 shadow sticky md:fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-black md:text-white">Web Wonders</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-white hover:text-blue-600">Home</a>
          <a href="#services" className="text-white hover:text-blue-600">Services</a>
          <a href="#how-it-works" className="text-white hover:text-blue-600">How It Works</a>
          <a href="#testimonials" className="text-white hover:text-blue-600">Testimonials</a>
          <a href="#contact-us" className="text-white hover:text-blue-600">Contact</a>
        </nav>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black md:text-white" aria-label="Open Menu">
            {
              !isMenuOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              :
              <div>X</div>
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled with smooth transition) */}
      <div 
        className={`md:hidden bg-white text-black absolute top-16 h-screen right-0 flex flex-col space-y-4 transition-all duration-500 ease-in-out  ${isMenuOpen ? "px-10 w-full" : "px-0 w-0 overflow-hidden"}`}
        // style={{ height: '100vh' }}
      >
        <a href="#" className=" hover:text-blue-600" onClick={toggleMenu}>Home</a>
        <a href="#services" className=" hover:text-blue-600" onClick={toggleMenu}>Services</a>
        <a href="#how-it-works" className=" hover:text-blue-600" onClick={toggleMenu}>How It Works</a>
        <a href="#testimonials" className=" hover:text-blue-600" onClick={toggleMenu}>Testimonials</a>
        <a href="#contact-us" className=" hover:text-blue-600" onClick={toggleMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
