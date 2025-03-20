import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCart,
} from "../Redux/cartSlice"; // assuming you have a setCart action
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart = [] } = useSelector((state) => state.allCart) || { cart: [] };

  // Get Total Price
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Save cart to localStorage whenever the cart state changes

  // Load cart from localStorage on page load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      // Parse the saved cart and set it in Redux
      dispatch(setCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shopping Cart ({cart.length} items)
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Your cart is empty. Start shopping! 🛍️
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Go to Shop
            </button>
          </div>
        ) : (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-gray-600 text-left">
                  <th className="py-3">Product</th>
                  <th className="py-3 text-center">Price</th>
                  <th className="py-3 text-center">Quantity</th>
                  <th className="py-3 text-center">Total</th>
                  <th className="py-3 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="flex items-center gap-4 py-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {item.name}
                        </p>
                        {item.size && (
                          <p className="text-gray-500 text-sm">
                            Size: {item.size}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="text-center text-gray-800">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2 border p-2 rounded-lg">
                        <button
                          className="px-3 py-1 bg-gray-200 rounded-md"
                          onClick={() => dispatch(decreaseItemQuantity(item))}
                        >
                          −
                        </button>
                        <span className="text-gray-800">{item.quantity}</span>
                        <button
                          className="px-3 py-1 bg-gray-200 rounded-md"
                          onClick={() => dispatch(increaseItemQuantity(item))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => {
                          dispatch(removeItem(item._id)); // use item._id or item.id depending on your item structure
                        }}
                      >
                        <FiTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <button className="text-gray-600 font-semibold hover:underline">
                CONTINUE SHOPPING
              </button>
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Sub Total: ${getTotalPrice()}
                </p>
                <p className="text-gray-500 text-sm">
                  Excluding taxes & shipping
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition ease-in-out duration-300"
                onClick={() => navigate("/CheckoutPage")}
              >
                GO TO CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
