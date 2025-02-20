import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch all products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/getProduct"
        );
        setProducts(response.data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Navigate to the single product page when a product is clicked
  const handleProductClick = (id) => {
    navigate(`/SingleProduct/${id}`);
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.Category || "Uncategorized"; // Ensure category exists
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="bg-[#f7fbfc] py-10">
      <div className="container mx-auto px-6">
        {/* Loop through each category */}
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div
            key={category}
            className="mb-20 p-6 bg-white shadow-md rounded-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              <button className="text-blue-600 hover:underline">
                See More
              </button>
            </div>

            {/* Display products in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categoryProducts.map((product) => (
                <div
                  key={product._id}
                  className="relative cursor-pointer"
                  onClick={() => handleProductClick(product._id)}
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-sm bg-gray-100"
                  />

                  {/* Product Details */}
                  <div className="mt-4">
                    <div className="flex items-center text-yellow-500">
                      ★★★★★
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mt-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {product.description}
                    </p>
                    <div className="mt-3">
                      <span className="text-red-500 font-bold text-lg">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to get product data (moved outside Product component)

export default Product;
