import React from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";

import { FaShippingFast } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <section className="flex justify-start bg-white py-10 w-[430px] ml-auto mr-6 relative top-24">
          <div className="container mx-auto px-6 flex flex-col">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-brand-logo-00.png" // Replace with your logo URL
                alt="Logo"
                className=" h-12 object-contain w-[30%]"
              />
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-[2.5rem] font-bold text-gray-900 leading-snug mb-4 -mt-[15px]">
              The best home <br /> entertainment system is here
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-base mb-6">
              Sit diam odio eget rhoncus volutpat est nibh velit posuere
              egestas.
            </p>

            {/* Button */}
            <a
              href="#"
              className="text-blue-500 text-lg font-medium hover:underline"
            >
              Shop now
            </a>
          </div>
        </section>

        <div className="bg-white flex justify-around px-6 m-12 py-6  relative top-[126px] h-28 ">
          <div className="flex items-center space-x-4">
            <FaShippingFast className="w-20 h-8  font-extrabold text-blue-700" />
            <div>
              <h3 className="text-[14px] font-semibold text-[#27323f]">
                Free Shipping
              </h3>
              <p className="text-[#9ca7ab] text-[12px]">
                When you spend $80 or more
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IoChatbubbleEllipsesSharp className="w-20 h-8 font-extrabold text-blue-700" />
            <div>
              <h3 className="text-[14px] font-semibold text-[#27323f]">
                We are available 24/7
              </h3>
              <p className="text-[#9ca7ab] text-[12px]">
                Need help? contact us anytime
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <VscDebugRestart className="w-20 h-8 font-extrabold text-blue-700" />
            <div>
              <h3 className="text-[14px] font-semibold text-[#27323f]">
                Satisfied or return
              </h3>
              <p className="text-[#9ca7ab] text-[12px]">
                Easy 30-day return policy
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MdPayment className="w-20 h-8 font-extrabold text-blue-700" />
            <div>
              <h3 className="text-[14px] font-semibold text-[#27323f]">
                100% secure payments
              </h3>
              <p className="text-[#9ca7ab] text-[12px]">
                Visa, Mastercard, Stripe, PayPal
              </p>
            </div>
          </div>
        </div>

      
        <div className="bg-[#f7fbfc]  min-h-screen p-4 pt-32 border-10 border-gray-300">
          {/* Flex container for cards */}
          <div className="  bg-white flex flex-wrap justify-center gap-6 border border-gray-300 mx-2">
            {/* Air Conditioner */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-06.jpg"
                alt="Air Conditioner"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Air Conditioner
              </h3>
              <p className="text-gray-500">4 Products</p>
            </div>

            {/* Audio & Video */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-08.jpg"
                alt="Audio & Video"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Audio & Video
              </h3>
              <p className="text-gray-500">5 Products</p>
            </div>

            {/* Gadgets */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="C:\smit-hacketon-frontend\images-removebg-preview.png"
                alt="Gadgets"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Gadgets
              </h3>
              <p className="text-gray-500">6 Products</p>
            </div>

            {/* Home Appliances */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-07.jpg"
                alt="Home Appliances"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Home Appliances
              </h3>
              <p className="text-gray-500">5 Products</p>
            </div>

            {/* Kitchen Appliances */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-05.jpg"
                alt="Kitchen Appliances"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Kitchen Appliances
              </h3>
              <p className="text-gray-500">6 Products</p>
            </div>

            {/* PCs & Laptop */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-03.jpg"
                alt="PCs & Laptop"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                PCs & Laptop
              </h3>
              <p className="text-gray-500">4 Products</p>
            </div>

            {/* Refrigerator */}
            <div className="  rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-04.jpg"
                alt="Refrigerator"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Refrigerator
              </h3>
              <p className="text-gray-500">4 Products</p>
            </div>

            {/* Smart Home */}
            <div className=" rounded-lg flex flex-col items-center p-4">
              <img
                src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-category-image-01.jpg"
                alt="Smart Home"
                className="w-[13rem] h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Smart Home
              </h3>
              <p className="text-gray-500">5 Products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
