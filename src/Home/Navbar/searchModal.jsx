import React from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ filteredProducts, closeModal }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/SingleProduct/${id}`);
    closeModal();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">Search Results</h2>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => handleProductClick(product._id)}
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
