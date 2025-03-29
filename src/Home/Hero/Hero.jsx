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
      `https://backend-for-e-commerce-website-slnb.vercel.app/api/v1/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div
      className="hero min-h-screen bg-center relative"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      {/* Hero Content */}
      <section className="flex justify-start bg-white py-10 w-full max-w-[90%] sm:max-w-[450px] mx-auto lg:mr-6 lg:ml-auto relative top-24 px-6 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <div className="mb-6">
            <img
              src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-brand-logo-00.png"
              alt="Logo"
              className="h-12 object-contain w-[30%]"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
            The best home <br /> entertainment system is here
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-6">
            Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.
          </p>
          <a
            href="#"
            className="text-blue-500 text-lg font-medium hover:underline"
          >
            Shop now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-white flex flex-wrap justify-center relative top-[110px] mb-5 px-4 py-6 gap-4 sm:gap-6 md:gap-8 lg:gap-12 rounded-lg shadow-lg w-[90%] mx-auto">
        {[
          {
            icon: <FaShippingFast className="w-10 h-10 text-blue-700" />,
            title: "Free Shipping",
            desc: "When you spend $80 or more",
          },
          {
            icon: (
              <IoChatbubbleEllipsesSharp className="w-10 h-10 text-blue-700" />
            ),
            title: "We are available 24/7",
            desc: "Need help? Contact us anytime",
          },
          {
            icon: <VscDebugRestart className="w-10 h-10 text-blue-700" />,
            title: "Satisfied or return",
            desc: "Easy 30-day return policy",
          },
          {
            icon: <MdPayment className="w-10 h-10 text-blue-700" />,
            title: "100% Secure Payments",
            desc: "Visa, Mastercard, Stripe, PayPal",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 w-full sm:w-auto"
          >
            {item.icon}
            <div>
              <h3 className="text-sm sm:text-[14px] font-semibold text-[#27323f]">
                {item.title}
              </h3>
              <p className="text-[#9ca7ab] text-xs sm:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="bg-[#f7fbfc] min-h-screen p-4 pt-20">
        <div className="mt-[50px] bg-white flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 border border-gray-300 p-4 md:p-6 w-[90%] mx-auto rounded-lg shadow-md">
          {categories.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-lg flex flex-col items-center p-4 cursor-pointer w-full sm:w-48 md:w-60 lg:w-72 bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-lg"
                  onClick={() => navigate(`/category/${category.name}`)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-28 sm:h-32 md:h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-700 text-center">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {category.products} Products
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
