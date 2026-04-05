import React from "react";

const Brands = () => {
  const brandLogos = [
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-6.svg",
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-5.svg",
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-4.svg",
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-3.svg",
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-2.svg",
    "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-top-brand-logo-1.svg",
  ];

  return (
    <div className=" py-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Top Brands</h2>
      </div>
      <div className="flex justify-center border border-gray-300 bg-white">
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="p-6 border-r last:border-r-0 flex items-center justify-center w-40 h-24"
          >
            <img src={logo} alt={`Brand ${index + 1}`} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
