import React from "react";

const categories = [
  {
    title: "Wireless headphones",
    price: "$49",
    link: "#",
    image:
      "https://xxbuys.com/wp-content/uploads/2024/11/electronic-store-wireless-headphone.png",
    bgColor: "bg-gray-100",
  },
  {
    title: "Grooming",
    price: "$49",
    link: "#",
    image:
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-grooming.png",
    bgColor: "bg-gray-200",
  },
  {
    title: "Video games",

    price: "$49",
    link: "#",
    image:
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-video-games.png",
    bgColor: "bg-[#f8edd1]",
  },
];

const ProductAd = () => {
  return (
    <div className="flex justify-center gap-6 p-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative p-8 w-[360px] h-[300px] rounded-lg ${category.bgColor} overflow-hidden`}
        >
          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-[2.5rem] font-bold text-[#27323f] leading-tight mr-10">
              {category.title}
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Starting at {category.price}
            </p>
            <a
              href={category.link}
              className="text-blue-600 font-medium mt-2 inline-block hover:underline text-lg"
            >
              Shop now
            </a>
          </div>

          {/* Background Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute bottom-0 right-0 left-[5.5rem] mt-16 w-[380px] h-[270px] object-contain z-0 opacity-75"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductAd;
