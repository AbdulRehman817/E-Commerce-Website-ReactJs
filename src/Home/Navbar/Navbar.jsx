import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/authcontext";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, fetchProducts } from "../Redux/cartSlice";
import {
  FaTimes,
  FaArrowLeft,
  FaShoppingCart,
  FaSearch,
  FaBars,
} from "react-icons/fa";

import SearchModal from "./searchModal";

const Navbar = () => {
  const { isLoggedIn, LogoutUser, user } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart?.items || []);
  const products = useSelector((state) => state.allCart?.items || []);
  const searchTerm = useSelector((state) => state.allCart?.searchTerm || "");
  const [showModal, setShowModal] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search term
  const filteredProducts = items
    .filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .slice(0, 5);

  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  const SignoutUser = () => {
    LogoutUser();
    localStorage.removeItem("cart");
    localStorage.removeItem("shippingDetails");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setIsSearchOpen(false);
    dispatch(setSearchTerm(""));
  };
  return (
    <nav className="bg-blue-500 px-4 py-4 shadow-md w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto relative">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">o</span>
          </div>
          <Link to="/" className="text-white font-bold text-lg">
            tronmart
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-white text-sm font-medium">
          <Link to="/" className="hover:text-lime-300">
            All Products
          </Link>
          <Link to="/home-appliances" className="hover:text-lime-300">
            Home appliances
          </Link>
          <Link to="/audio-video" className="hover:text-lime-300">
            Audio & video
          </Link>

          <Link to="/new-arrivals" className="hover:text-lime-300">
            New arrivals
          </Link>
          <Link to="/today-deals" className="hover:text-lime-300">
            Today's deal
          </Link>
          <Link to="/gift-cards" className="hover:text-lime-300">
            Gift cards
          </Link>
        </div>

        {/* Right Section: Cart, Profile, Mobile Menu */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FaSearch
              className="text-white text-xl cursor-pointer"
              onClick={handleSearchIconClick}
            />
          </div>
          {showModal && (
            <SearchModal
              filteredProducts={filteredProducts}
              closeModal={handleCloseModal}
            />
          )}
          <div
            className={`w-full lg:hidden absolute top-12 left-0 z-50 transition-all duration-300 ${
              isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <input
              onChange={(e) => {
                handleSearchInputChange(e);
              }}
              type="text"
              placeholder="Search products..."
              className={`w-full p-2 border border-gray-300 rounded-md`}
            />
          </div>
          {/* Search Bar  */}
          <div className="hidden lg:block relative">
            <input
              onChange={(e) => {
                handleSearchInputChange(e);
                setShowModal(true);
              }}
              type="text"
              placeholder="Search products..."
              className="p-2 border border-gray-300 rounded-md w-64"
            />
          </div>

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/Cart")}
          >
            <FaShoppingCart className="text-white text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Profile Section */}
          {isLoggedIn && user && (
            <div className="relative">
              <div
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <span className="text-gray-600 font-bold">
                  {user?.data.email.charAt(0) || "U"}
                </span>
              </div>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 text-white rounded-lg shadow-lg z-10">
                  <div className="px-4 py-3 border-b border-slate-700">
                    <p className="font-bold">
                      {user?.data.name || "Bonnie Green"}
                    </p>
                    <p className="text-[12px] text-gray-300">
                      {user?.data.email || "name@flowbite.com"}
                    </p>
                  </div>
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="border-t border-gray-700">
                    <button
                      onClick={SignoutUser}
                      className="w-full text-left px-4 py-2 hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-blue-600 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col space-y-4 p-6 mt-12 text-white font-medium">
          <Link to="/" className="hover:text-lime-300">
            All Products
          </Link>
          <Link to="/home-appliances" className="hover:text-lime-300">
            Home appliances
          </Link>
          <Link to="/audio-video" className="hover:text-lime-300">
            Audio & video
          </Link>
          <Link to="/refrigerator" className="hover:text-lime-300">
            Refrigerator
          </Link>
          <Link to="/new-arrivals" className="hover:text-lime-300">
            New arrivals
          </Link>
          <Link to="/today-deals" className="hover:text-lime-300">
            Today's deal
          </Link>
          <Link to="/gift-cards" className="hover:text-lime-300">
            Gift cards
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
