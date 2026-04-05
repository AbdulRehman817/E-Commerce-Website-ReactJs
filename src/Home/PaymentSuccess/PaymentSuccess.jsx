import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { clearCart } from "../Redux/cartSlice";
import { toast } from "react-toastify";

const BACKEND_URL = "https://backend-for-e-commerce-website-slnb.vercel.app";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verifying, setVerifying] = useState(true);
  const [order, setOrder] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const sessionId = searchParams.get("session_id");
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${BACKEND_URL}/api/v1/payment/verify?session_id=${sessionId}&order_id=${orderId}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
            credentials: "include",
          }
        );
        const data = await response.json();

        if (data.success) {
          setOrder(data.order);
          setShowConfetti(true);
          dispatch(clearCart());
          localStorage.removeItem("pendingOrderId");
          setTimeout(() => setShowConfetti(false), 5000);
        } else {
          toast.error("Payment verification failed.");
        }
      } catch (err) {
        console.error("Verification error:", err);
        toast.error("Could not verify payment.");
      } finally {
        setVerifying(false);
      }
    };

    if (sessionId && orderId) {
      verifyPayment();
    } else {
      setVerifying(false);
    }
  }, [sessionId, orderId]);

  if (verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          <p className="text-gray-600 text-lg font-semibold">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-extrabold text-green-600 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {order && (
          <div className="bg-gray-50 rounded-lg p-4 text-left text-sm text-gray-700 mb-6">
            <p><span className="font-semibold">Order ID:</span> {order._id}</p>
            <p><span className="font-semibold">Total:</span> ${order.totalPrice}</p>
            <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-bold">{order.status}</span></p>
            {order.shippingDetails?.name && (
              <p><span className="font-semibold">Ship to:</span> {order.shippingDetails.name}, {order.shippingDetails.city}</p>
            )}
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition duration-200"
        >
          Continue Shopping 🛍️
        </button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
