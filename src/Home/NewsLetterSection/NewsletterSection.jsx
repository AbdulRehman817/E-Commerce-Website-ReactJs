import React from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-10 px-6 md:px-16">
      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        {/* Left content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div>
            <p className="text-gray-500 underline underline-offset-4 mb-1">
              Expert advice
            </p>
            <p className="text-2xl font-bold text-gray-800">123-456-7890</p>
          </div>
          <div>
            <p className="text-gray-500 underline underline-offset-4 mb-1">
              Customer service
            </p>
            <p className="text-2xl font-bold text-gray-800">1-222-345-6789</p>
          </div>
          <div>
            <p className="text-gray-500 underline underline-offset-4 mb-1">
              Have any questions?
            </p>
            <p className="text-2xl font-bold text-gray-800">Contact us</p>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block">
          <img
            src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-support-team.png"
            alt="Support Team"
            className="h-[290px] object-contain rounded-md"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-start gap-4 w-full md:w-1/2 mb-4 md:mb-0">
          <FaEnvelope size={40} className="text-blue-600" />
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 text-sm">
              Sign up for all the latest news and special offers
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 border border-gray-300 p-3 rounded-md outline-none"
          />
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
