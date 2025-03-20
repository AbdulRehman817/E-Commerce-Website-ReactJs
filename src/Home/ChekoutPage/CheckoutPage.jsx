import React from "react";
import { FiCreditCard, FiTruck, FiShield } from "react-icons/fi";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cart = [] } = useSelector((state) => state.allCart) || { cart: [] };

  // Calculate total price from cart
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Shipping, Tax, and Order Summary Calculations
  const shipping = 9.99;
  const tax = (parseFloat(getTotalPrice()) * 0.08).toFixed(2); // 8% tax
  const total = (
    parseFloat(getTotalPrice()) +
    parseFloat(shipping) +
    parseFloat(tax)
  ).toFixed(2);

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Checkout</h2>

        {/* Shipping Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Shipping Information
          </h3>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="New York"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Payment Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Payment Information
          </h3>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="1234 5678 9876 5432"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="123"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span className="text-gray-700">
                  {item.name} x{item.quantity}
                </span>
                <span className="text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Item Total</span>
              <span className="text-gray-800">${getTotalPrice()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-800">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Tax</span>
              <span className="text-gray-800">${tax}</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
              <span className="text-gray-700">Total</span>
              <span className="text-gray-800">${total}</span>
            </div>
          </div>
        </div>

        {/* Checkout Buttons */}
        <div className="flex justify-between items-center">
          <button
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition"
            onClick={() => alert("Continue Shopping")}
          >
            Continue Shopping
          </button>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            onClick={() => alert("Proceed to Payment")}
          >
            Proceed to Payment
          </button>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 flex gap-8">
          <div className="flex items-center gap-3">
            <FiCreditCard size={30} className="text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Secure Payments</h4>
              <p className="text-gray-600 text-sm">
                All payments are encrypted and secure.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiTruck size={30} className="text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Fast Shipping</h4>
              <p className="text-gray-600 text-sm">
                Get your order delivered in 3-5 business days.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiShield size={30} className="text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Privacy Guarantee</h4>
              <p className="text-gray-600 text-sm">
                Your personal data is safe with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
