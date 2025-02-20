import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/getBestDealProduct"
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleProductClick = (_id) => {
    navigate(`SingleBestDealProducts/${_id}`); // Redirect to product details page
  };

  return (
    <div className="bg-white border-10 mx-6 border border-gray-300 shadow-lg">
      <div className="container mx-auto  m-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left ml-5">
          Today's Best Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product, index) => (
            <div
              key={index}
              className=" p-4 relative"
              onClick={() => handleProductClick(product._id)}
            >
              <span
                className="absolute font-medium shadow-md
 top-7 left-8 text-[#646e79] min-w-fit px-[0.8em] bg-white border text-sm   py-1 rounded-[20px] z-[5]"
              >
                Sale!
              </span>
              <img
                src={product.image}
                className="w-full h-64 object-cover rounded-sm bg-gray-100 "
              />
              <div className="mt-4">
                <div className="flex items-center text-yellow-500">
                  {"★★★★★"}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <div className="mt-3">
                  <span className="line-through text-gray-400 mr-2">
                    ${product.oldPrice}
                  </span>
                  <span className="text-red-500 font-bold text-lg">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
