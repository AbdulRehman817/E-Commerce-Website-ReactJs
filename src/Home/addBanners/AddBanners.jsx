// import React from "react";

// const AdBanners = () => {
//   return (
//     <div className="flex gap-5 p-6 pt-20 pb-20">
//       {/* First Banner */}
//       <div className="relative w-[50%] h-40">
//         <img
//           src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-2.jpg"
//           alt="Brand Day Ad"
//           className="w-full h-full object-cover rounded-sm"
//         />
//       </div>

//       {/* Second Banner */}
//       <div className="relative w-1/2 h-40">
//         <img
//           src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-1.jpg"
//           alt="Case Ad"
//           className="w-full h-full object-cover rounded-sm"
//         />
//       </div>
//     </div>
//   );
// };

// export default AdBanners;
import React from "react";

const AdBanners = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-6 pt-20 pb-20">
      {/* First Banner */}
      <div className="relative w-full sm:w-1/2 h-40">
        <img
          src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-2.jpg"
          alt="Brand Day Ad"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {/* Second Banner */}
      <div className="relative w-full sm:w-1/2 h-40">
        <img
          src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-promotional-banner-1.jpg"
          alt="Case Ad"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
    </div>
  );
};

export default AdBanners;
