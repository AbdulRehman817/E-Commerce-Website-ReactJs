import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../Redux/cartSlice";
import "./CheckOutPage.css";

const BACKEND_URL = "https://backend-for-e-commerce-website-slnb.vercel.app";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart = [] } = useSelector((state) => state.allCart) || { cart: [] };

  const [shippingDetails, setShippingDetails] = useState(
    JSON.parse(localStorage.getItem("shippingDetails")) || {
      name: "",
      address: "",
      city: "",
      country: "",
    }
  );
  const [loading, setLoading] = useState(false);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleStripeCheckout = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const { name, address, city, country } = shippingDetails;
    if (!name || !address || !city || !country) {
      toast.error("Please fill in all shipping details.");
      return;
    }

    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${BACKEND_URL}/api/v1/payment/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          credentials: "include",
          body: JSON.stringify({ cartItems: cart, shippingDetails }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create payment session");
      }

      localStorage.setItem("pendingOrderId", data.orderId);
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("shippingDetails"));
    if (savedDetails) setShippingDetails(savedDetails);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          🛒 Checkout
        </h2>

        {/* Order Summary */}
        <div className="mb-6 bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700 mb-3">Order Summary</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">
              Your cart is empty.{" "}
              <span
                className="text-blue-500 cursor-pointer underline"
                onClick={() => navigate("/")}
              >
                Go shopping
              </span>
            </p>
          ) : (
            <>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md border"
                        />
                      )}
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 pt-2 border-t font-bold text-gray-800">
                <span>Total</span>
                <span>${getTotalPrice()}</span>
              </div>
            </>
          )}
        </div>

        {/* Shipping Form */}
        <form onSubmit={handleStripeCheckout} className="space-y-4">
          <h3 className="text-lg font-bold text-gray-700">Shipping Details</h3>
          {[
            { field: "name", placeholder: "Full Name" },
            { field: "address", placeholder: "Street Address" },
            { field: "city", placeholder: "City" },
            { field: "country", placeholder: "Country" },
          ].map(({ field, placeholder }) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={placeholder}
              value={shippingDetails[field]}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}

          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Redirecting to Stripe...
              </>
            ) : (
              <> 💳 Pay with Stripe — ${getTotalPrice()} </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            🔒 Secure payment powered by Stripe. Your card details are never stored.
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default CheckOut;
