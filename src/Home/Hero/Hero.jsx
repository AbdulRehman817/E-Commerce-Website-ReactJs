// import React, { useEffect } from "react";
// import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
// import { VscDebugRestart } from "react-icons/vsc";
// import { MdPayment } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { FaShippingFast } from "react-icons/fa";
// import { useState } from "react";
// const Hero = () => {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetch("http://localhost:3000/api/v1/categories")
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   return (
//     <>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center center",
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <section className="flex justify-start bg-white py-10 w-[430px] ml-auto mr-6 relative top-24">
//           <div className="container mx-auto px-6 flex flex-col">
//             {/* Logo */}
//             <div className="mb-6">
//               <img
//                 src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-brand-logo-00.png" // Replace with your logo URL
//                 alt="Logo"
//                 className=" h-12 object-contain w-[30%]"
//               />
//             </div>

//             {/* Heading */}
//             <h1 className="text-4xl lg:text-[2.5rem] font-bold text-gray-900 leading-snug mb-4 -mt-[15px]">
//               The best home <br /> entertainment system is here
//             </h1>

//             {/* Subheading */}
//             <p className="text-gray-500 text-base mb-6">
//               Sit diam odio eget rhoncus volutpat est nibh velit posuere
//               egestas.
//             </p>

//             {/* Button */}
//             <a
//               href="#"
//               className="text-blue-500 text-lg font-medium hover:underline"
//             >
//               Shop now
//             </a>
//           </div>
//         </section>

//         <div className="bg-white flex justify-around px-6 m-12 py-6  relative top-[126px] h-28 ">
//           <div className="flex items-center space-x-4">
//             <FaShippingFast className="w-20 h-8  font-extrabold text-blue-700" />
//             <div>
//               <h3 className="text-[14px] font-semibold text-[#27323f]">
//                 Free Shipping
//               </h3>
//               <p className="text-[#9ca7ab] text-[12px]">
//                 When you spend $80 or more
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <IoChatbubbleEllipsesSharp className="w-20 h-8 font-extrabold text-blue-700" />
//             <div>
//               <h3 className="text-[14px] font-semibold text-[#27323f]">
//                 We are available 24/7
//               </h3>
//               <p className="text-[#9ca7ab] text-[12px]">
//                 Need help? contact us anytime
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <VscDebugRestart className="w-20 h-8 font-extrabold text-blue-700" />
//             <div>
//               <h3 className="text-[14px] font-semibold text-[#27323f]">
//                 Satisfied or return
//               </h3>
//               <p className="text-[#9ca7ab] text-[12px]">
//                 Easy 30-day return policy
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <MdPayment className="w-20 h-8 font-extrabold text-blue-700" />
//             <div>
//               <h3 className="text-[14px] font-semibold text-[#27323f]">
//                 100% secure payments
//               </h3>
//               <p className="text-[#9ca7ab] text-[12px]">
//                 Visa, Mastercard, Stripe, PayPal
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#f7fbfc]  min-h-screen p-4 pt-32 border-10 border-gray-300">
//           {/* Flex container for cards */}
//           <div className="bg-white flex flex-wrap justify-center gap-6 border border-gray-300 mx-2">
//             {categories && categories.length > 0 ? (
//               categories.map((category) => (
//                 <div
//                   key={category.id}
//                   className="rounded-lg flex flex-col items-center p-4 cursor-pointer"
//                   onClick={() => navigate(`/category/${category.name}`)} // ✅ Corrected category.slug
//                 >
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="w-[13rem] h-32 object-cover mb-4"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-700 text-center">
//                     {category.name}
//                   </h3>
//                   <p className="text-gray-500">{category.products} Products</p>
//                 </div>
//               ))
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
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
    fetch("http://localhost:3000/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div
      className="hero min-h-screen  bg-center  relative"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-hero-image.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <section className="flex justify-start bg-white py-10 w-full max-w-[430px] mx-auto lg:mr-6 lg:ml-auto relative top-24 px-6">
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

      <div className="bg-white flex flex-wrap justify-center relative top-[110px] mb-5 md:justify-around px-4 md:px-6 m-6 py-6 gap-4 md:gap-6 lg:gap-12 rounded-lg shadow-lg">
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
            desc: "Need help? contact us anytime",
          },
          {
            icon: <VscDebugRestart className="w-10 h-10 text-blue-700" />,
            title: "Satisfied or return",
            desc: "Easy 30-day return policy",
          },
          {
            icon: <MdPayment className="w-10 h-10 text-blue-700" />,
            title: "100% secure payments",
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

      <div className="bg-[#f7fbfc] min-h-screen p-4 pt-20 ">
        <div className="mt-[50px] bg-white flex flex-wrap justify-center gap-4 md:gap-6 border border-gray-300 p-4 md:p-6">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div
                key={category.id}
                className="rounded-lg flex flex-col items-center p-4 cursor-pointer w-40 sm:w-52 md:w-60 lg:w-72"
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
            ))
          ) : (
            <p className="text-gray-500 text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
