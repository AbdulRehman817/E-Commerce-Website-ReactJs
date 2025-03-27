// import React, { useState, useContext, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useAuth } from "../AuthContext/authcontext";
// const Navbar = () => {
//   const { isLoggedIn, LogoutUser, user } = useAuth();
//   const navigate = useNavigate();
//   const [cartCount, setCartCount] = useState(0);
//   const cartPage = () => {
//     navigate("/Cart");
//   };
//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [userdata, setUserData] = useState(true);

//   const SignoutUser = () => {
//     LogoutUser(); // Call the function properly
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav className="bg-blue-500 px-6 py-4 shadow-md sm:w-[690px]">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           {/* Logo Section */}
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-xl">o</span>
//             </div>
//             <span className="text-white font-bold text-lg">tronmart</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden lg:flex space-x-6 text-white text-sm font-medium">
//             <Link href="#" className="hover:text-lime-300">
//               All products
//             </Link>
//             <Link to="/home-appliances" className="hover:text-lime-300">
//               Home appliances
//             </Link>
//             <Link to="#" className="hover:text-lime-300">
//               Audio & video
//             </Link>
//             <Link to="#" className="hover:text-lime-300">
//               Refrigerator
//             </Link>
//             <Link to="#" className="hover:text-lime-300">
//               New arrivals
//             </Link>
//             <Link href="#" className="hover:text-lime-300">
//               Today's deal
//             </Link>
//             <Link to="#" className="hover:text-lime-300">
//               Gift cards
//             </Link>
//           </div>

//           {/* Right Section: Search, Cart, Profile, and Login */}
//           <div className="flex items-center space-x-6">
//             {/* Search Bar */}

//             {/* Cart Icon */}
//             <div className="relative cursor-pointer" onClick={cartPage}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="9" cy="21" r="1"></circle>
//                 <circle cx="20" cy="21" r="1"></circle>
//                 <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"></path>
//               </svg>
//             </div>
//             {/* Profile Section */}
//             {isLoggedIn && user && (
//               <div className="relative">
//                 <div
//                   className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
//                   onClick={() => setIsProfileOpen(!isProfileOpen)}
//                 >
//                   <span className="text-gray-600 font-bold">
//                     {user?.data.email.charAt(0) || "U"}
//                   </span>
//                 </div>
//                 {isProfileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-800 text-white rounded-lg shadow-lg z-10">
//                     <div className="px-4 py-3 border-b border-slate-700">
//                       <p className="font-bold">
//                         {user?.data.name || "Bonnie Green"}
//                       </p>
//                       <p className="text-[12px] text-gray-300">
//                         {user?.data.email || "name@flowbite.com"}
//                       </p>
//                     </div>
//                     <ul className="py-2">
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-700"
//                         >
//                           Dashboard
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-700"
//                         >
//                           Settings
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-700"
//                         >
//                           Earnings
//                         </a>
//                       </li>
//                     </ul>
//                     <div className="border-t border-gray-700">
//                       <button
//                         onClick={SignoutUser}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-700"
//                       >
//                         Sign out
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/authcontext";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { isLoggedIn, LogoutUser, user } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SignoutUser = () => {
    LogoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">o</span>
          </div>
          <span className="text-white font-bold text-lg">tronmart</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-white text-sm font-medium">
          <Link to="#" className="hover:text-lime-300">
            All products
          </Link>
          <Link to="/home-appliances" className="hover:text-lime-300">
            Home appliances
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Audio & video
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Refrigerator
          </Link>
          <Link to="#" className="hover:text-lime-300">
            New arrivals
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Today's deal
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Gift cards
          </Link>
        </div>

        {/* Right Section: Cart, Profile, Mobile Menu */}
        <div className="flex items-center space-x-6">
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
          <Link to="#" className="hover:text-lime-300">
            All products
          </Link>
          <Link to="/home-appliances" className="hover:text-lime-300">
            Home appliances
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Audio & video
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Refrigerator
          </Link>
          <Link to="#" className="hover:text-lime-300">
            New arrivals
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Today's deal
          </Link>
          <Link to="#" className="hover:text-lime-300">
            Gift cards
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
