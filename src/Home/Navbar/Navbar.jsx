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
  const searchTerm = useSelector((state) => state.allCart?.searchTerm || "");
  const [showModal, setShowModal] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileSearchTerm, setMobileSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on search term
  const filteredProducts = items.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  const SignoutUser = () => {
    LogoutUser();
    navigate("/login");
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
        {/* Search Bar (Mobile) */}
        <div className="lg:hidden relative">
          {isSearchOpen ? (
            <div className="flex items-center gap-3">
              <button onClick={() => setIsSearchOpen(false)}>
                <FaArrowLeft className="text-white text-xl" />
              </button>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                value={mobileSearchTerm}
                onChange={(e) => setMobileSearchTerm(e.target.value)}
              />
            </div>
          ) : (
            <FaSearch
              className="text-white text-xl"
              onClick={() => setIsSearchOpen(true)}
            />
          )}

          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full z-50">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
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

        {/* Right Section: Cart, Profile, Mobile Menu */}
        <div className="flex items-center space-x-6">
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:block relative">
            {showModal && (
              <SearchModal
                filteredProducts={filteredProducts}
                closeModal={() => setShowModal(false)}
              />
            )}
            <input
              onChange={(e) => {
                handleSearchInputChange(e);
                setShowModal(true);
                if (!e.target.value) setShowModal(false);
              }}
              type="text"
              placeholder="Search products..."
              ref={searchInputRef}
              className="p-2 border border-gray-300 rounded-md w-64"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/Cart")}
          >
            <FaShoppingCart className="text-white text-xl" />
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
      {/* Search Bar (Desktop) */}
      {isSearchOpen && (
        <div className="lg:hidden flex justify-center p-2 w-full">
          <input
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
