import React, { useEffect, useState } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://backend-for-e-commerce-website-gj6r.vercel.app/api/v1/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#f7fbfc]">
      {/* Hero Section */}
      <div
        className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)",
        }}
      >
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-screen-sm md:max-w-md mx-4 md:mx-0">
          <img
            src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-brand-logo-00.png"
            alt="Logo"
            className="h-10 w-auto mb-4"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center sm:text-left">
            The best home <br /> entertainment system is here
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-4 text-center sm:text-left">
            Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.
          </p>
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Shop now
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white max-w-screen-lg mx-auto p-6 rounded-lg shadow-md grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
        {[
          {
            icon: <FaShippingFast className="w-8 h-8 text-blue-700" />,
            title: "Free Shipping",
            desc: "On orders above $80",
          },
          {
            icon: (
              <IoChatbubbleEllipsesSharp className="w-8 h-8 text-blue-700" />
            ),
            title: "24/7 Support",
            desc: "Contact us anytime",
          },
          {
            icon: <VscDebugRestart className="w-8 h-8 text-blue-700" />,
            title: "Easy Returns",
            desc: "30-day return policy",
          },
          {
            icon: <MdPayment className="w-8 h-8 text-blue-700" />,
            title: "Secure Payments",
            desc: "Visa, Mastercard, PayPal",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            {item.icon}
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="py-12 px-4 ">
        <div className="bg-white p-6 max-w-screen-xl mx-auto rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 ">
            Browse Categories
          </h2>
          {categories.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-lg flex flex-col items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
                  onClick={() => navigate(`/category/${category.name}`)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 sm:h-32 object-cover mb-3 rounded"
                  />
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-700 text-center">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {category.products} Products
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Loading categories...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
