import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const cartPage = () => {
    navigate("/Cart");
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-500 px-6 py-4 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">o</span>
            </div>
            <span className="text-white font-bold text-lg">tronmart</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6 text-white text-sm font-medium">
            <a href="#" className="hover:text-lime-300">
              All products
            </a>
            <a href="#" className="hover:text-lime-300">
              Home appliances
            </a>
            <a href="#" className="hover:text-lime-300">
              Audio & video
            </a>
            <a href="#" className="hover:text-lime-300">
              Refrigerator
            </a>
            <a href="#" className="hover:text-lime-300">
              New arrivals
            </a>
            <a href="#" className="hover:text-lime-300">
              Today's deal
            </a>
            <a href="#" className="hover:text-lime-300">
              Gift cards
            </a>
          </div>

          {/* Right Section: Search, Cart, and Login */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 rounded-full text-sm w-48 focus:outline-none border border-gray-300"
              />
              <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l3.789 3.79a1 1 0 01-1.414 1.415l-3.789-3.79zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer" onClick={cartPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"></path>
              </svg>
            </div>

            {/* Login Button */}
            <a
              href="#"
              className="text-white font-medium text-sm hover:text-lime-300 border border-white px-4 py-2 rounded-full"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
