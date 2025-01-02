"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="flex justify-center md:justify-start items-center">
            <div className="w-40 h-10">
                <img src="Echo.png" alt="" />
            </div>
          </div>
          <p className="mt-16 sm:text-sm text-gray-400">
            Your web solutions come alive.
          </p>
        </div>


        {/* Support */}
        <div>
          <h1 className="text-2xl font-bold text-center md:text-left mb-4">Support</h1>
          <div className="flex flex-col space-y-2  ">
            <a href="/" className="text-gray-400 hover:text-blue-400">
              Help Center
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-400">
              FAQ
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-400">
              Terms of Use
            </a>
            <a href="/contact" className="text-gray-400 hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h1 className="text-2xl font-bold text-center md:text-left mb-4">Company</h1>
          <div className="flex flex-col space-y-2">
            <a href="/blog" className="text-gray-400  hover:text-blue-400">Blog</a>
            <a href="/services" className="text-gray-400  hover:text-blue-400">Services</a>
            <a href="/about" className="text-gray-400  hover:text-blue-400">About</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} EchoBoost Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
