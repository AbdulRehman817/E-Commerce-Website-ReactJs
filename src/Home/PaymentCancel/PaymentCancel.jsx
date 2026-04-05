import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center"
      >
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-extrabold text-red-500 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges were made. Your cart is still saved.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/CheckoutPage")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
          >
            Try Again 🔄
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition duration-200"
          >
            Back to Cart 🛒
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCancel;
