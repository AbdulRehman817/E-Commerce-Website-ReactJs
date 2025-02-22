import React from "react";
import { useSelector } from "react-redux";
import { FiTrash } from "react-icons/fi";

const CartPage = () => {
  const { cart = [] } = useSelector((state) => state.allCart) || { cart: [] };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shopping Cart ({cart.length} items)
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            Your cart is empty. Start shopping! 🛍️
          </p>
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
                        <p className="text-gray-500 text-sm">Size: XL</p>
                      </div>
                    </td>
                    <td className="text-center text-gray-800">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2 border p-2 rounded-lg">
                        <button className="px-3 py-1 bg-gray-200 rounded-md">
                          −
                        </button>
                        <span className="text-gray-800">{item.quantity}</span>
                        <button className="px-3 py-1 bg-gray-200 rounded-md">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button className="text-gray-500 hover:text-red-500">
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
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-red-600 transition">
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
