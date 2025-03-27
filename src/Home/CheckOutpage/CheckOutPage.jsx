import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import carImage from "../Image/car.png"; // Ensure car.png is placed in the correct directory
import "./CheckOutPage.css";

const CheckOut = () => {
  const [shippingDetails, setShippingDetails] = useState(
    JSON.parse(localStorage.getItem("shippingDetails")) || {
      name: "",
      address: "",
      city: "",
      country: "",
    }
  );
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
    setSubmitted(true);
    setShowConfetti(true);

    // Smoothly fade out confetti
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Restore shipping details when the user revisits
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("shippingDetails"));
    if (savedDetails) {
      setShippingDetails(savedDetails);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      {showConfetti && (
        <Confetti className="transition-opacity duration-1000 ease-in-out" />
      )}

      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full"
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            🚀 Enter Shipping Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "address", "city", "country"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={shippingDetails[field]}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
            >
              Confirm Shipping
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center"
        >
          <h2 className="text-3xl font-bold text-green-600">
            🎉 Order Confirmed, {shippingDetails.name}!
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Your order will be shipped to:
          </p>
          <p className="font-semibold mt-2 text-gray-800">
            {shippingDetails.address}, {shippingDetails.city},{" "}
            {shippingDetails.country}
          </p>

          {/* 🚗 Moving Car Animation */}
          <div className="road mt-6 relative">
            <img src={carImage} alt="Delivery Car" className="moving-car" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
          >
            Edit Details
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default CheckOut;
