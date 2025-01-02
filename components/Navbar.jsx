"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <nav className="w-full h-16 bg- text-white flex items-center justify-between px-6 md:px-16 relative z-50 bg-black">

        {/* Logo */}
        <div className="flex items-center">
        <div className="w-20 h-10  md:block">
         <img src="Echo.png" alt="" />
        </div>
      </div>


      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {["Home", "Blog", "Services","About", "Contact"].map((link) => (
          <li
            key={link}
            className="relative group overflow-hidden h-6 w-20 text-center"
          >
            <Link
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="absolute top-0 left-0 font-semibold w-full h-full transition-transform duration-300 transform group-hover:-translate-y-full"
            >
              {link}
            </Link>

            <Link
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="absolute top-full left-0 w-full h-full text-blue-500 transition-transform duration-300 transform group-hover:-translate-y-full"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div
        className="md:hidden flex items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-6 bg-white flex flex-col justify-between items-center space-y-1">
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-800 bg-opacity-50 backdrop-blur-lg text-white p-6">
            <ul className="flex flex-col gap-6">
            {["Home", "Blog", "Services", "About", "Contact"].map(
              (link) => (
                <li key={link} className="text-center">
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="font-semibold w-full block text-lg"
                    onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Get Started Button */}
      
    </nav>
  );
}
