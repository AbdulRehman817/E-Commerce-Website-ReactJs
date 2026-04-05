import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcStripe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-600">tronmart</h2>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg text-gray-800">Shop</h3>
            <ul className="text-blue-600 space-y-2 mt-2">
              <li>
                <a href="#">Hot deals</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Rebates</a>
              </li>
              <li>
                <a href="#">Weekly deals</a>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="font-bold text-lg text-gray-800">Need help?</h3>
            <ul className="text-blue-600 space-y-2 mt-2">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Order tracking</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Return policy</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-gray-800">Contact</h3>
            <p className="text-gray-600 mt-2">
              123 Fifth Avenue, New York, NY 10160
            </p>
            <p className="text-blue-600 mt-1">contact@info.com</p>
            <p className="text-blue-600 mt-1">929-242-6868</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-gray-400 py-4 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
          <p>© 2025 Electronic Store. Powered by Electronic Store</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcStripe size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
