import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBestDealProducts = () => {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/v1/getSingleBestDealProduct/${id}`)
        .then((res) => {
          setData(res.data.product);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  if (!data) {
    return (
      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Skeleton Image */}
          <div className="bg-gray-300 h-[400px] w-full rounded-lg"></div>

          {/* Skeleton Details */}
          <div>
            <div className="h-8 bg-gray-300 w-3/4 mb-4 rounded"></div>
            <div className="h-6 bg-gray-300 w-1/2 mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 w-full mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 w-3/4 mb-8 rounded"></div>

            <div className="flex space-x-4">
              <div className="h-10 w-24 bg-gray-300 rounded"></div>
              <div className="h-10 w-36 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg">
          <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium z-10">
            Sale
          </span>
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            {data.name}
          </h1>
          <div className="flex items-center mb-5">
            <span className="text-gray-500 line-through mr-3">
              ${data.oldPrice}
            </span>
            <span className="text-red-600 font-bold text-2xl">
              ${data.price}
            </span>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {data.description}
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-3">
            {data.keyFeatures?.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center mb-8">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mr-5">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                className="w-12 text-center border-none bg-transparent focus:outline-none"
              />
              <button
                onClick={() => handleQuantityChange("increase")}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                +
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 focus:outline-none">
              Add to Cart
            </button>
          </div>

          <div className="text-gray-600">
            Category:{" "}
            <span className="font-medium text-blue-500 hover:underline">
              {data.Category}
            </span>
          </div>
        </div>
      </div>

      {/* Product Description and Features (using state toggle) */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        {/* Description Heading */}
        <h2
          className={`w-[126px] text-lg font-semibold text-gray-900 mb-4 cursor-pointer flex items-center border-t-2 px-4 py-2 transition-all ${
            showDescription ? "border-blue-600" : "border-transparent"
          }`}
          onClick={() => setShowDescription(!showDescription)}
        >
          Description
        </h2>
        <br />
        <br />

        {showDescription && (
          <>
            <h3 className="text-3xl font-semibold text-[#27323f]">
              More About The Product
            </h3>

            {/* Description Content */}
            <p className="text-gray-700 mb-6 mt-6">
              {data.MoreAbout || "No description available."}
            </p>

            <br />
            <br />
            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {/* Features Heading (Left) */}
              <h3 className="text-[2rem] font-semibold text-[#27323f] mt-6">
                Products Features
              </h3>

              {/* Features List (Right) */}
              <ul className="list-disc  text-gray-700 space-y-3">
                {data.productFeatures?.map((feature, index) => (
                  <li
                    key={index}
                    className="text-lg  p-2  mt-10 ml-[-150px] w-[750px]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleBestDealProducts;
