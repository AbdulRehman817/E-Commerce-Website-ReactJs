// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../Redux/cartSlice";

// const Product = () => {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.allCart?.items.products || []);
//   console.log(items);
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // Group products by category
//   const groupedProducts = Array.isArray(items)
//     ? items.reduce((acc, product) => {
//         const category = product.category || "Uncategorized"; // Ensure category exists
//         if (!acc[category]) {
//           acc[category] = [];
//         }
//         acc[category].push(product);
//         return acc;
//       }, {})
//     : {};

//   const handleProductClick = (id) => {
//     navigate(`/SingleProduct/${id}`);
//   };

//   return (
//     <div className="bg-[#f7fbfc] py-10">
//       <div className="container mx-auto px-6">
//         {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
//           <div
//             key={category}
//             className="mb-20 p-6 bg-white shadow-md rounded-lg"
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
//               <button className="text-blue-600 hover:underline">
//                 See More
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {categoryProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="relative cursor-pointer"
//                   onClick={() => handleProductClick(product._id)}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-sm bg-gray-100"
//                   />
//                   <div className="mt-4">
//                     <div className="flex items-center text-yellow-500">
//                       ★★★★★
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800 mt-2">
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-500 text-sm mt-1">
//                       {product.description}
//                     </p>
//                     <div className="mt-3">
//                       <span className="text-red-500 font-bold text-lg">
//                         ${product.price}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart?.items.products || []);
  console.log(items);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Group products by category
  const groupedProducts = Array.isArray(items)
    ? items.reduce((acc, product) => {
        const category = product.category || "Uncategorized";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      }, {})
    : {};

  const handleProductClick = (id) => {
    navigate(`/SingleProduct/${id}`);
  };

  return (
    <div className="bg-[#f7fbfc] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div
            key={category}
            className="mb-20 p-4 sm:p-6 bg-white shadow-md rounded-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {category}
              </h2>
              <button className="text-blue-600 hover:underline text-sm sm:text-base">
                See More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <div
                  key={product._id}
                  className="relative cursor-pointer"
                  onClick={() => handleProductClick(product._id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 sm:h-64 object-cover rounded-sm bg-gray-100"
                  />
                  <div className="mt-4">
                    <div className="flex items-center text-yellow-500">
                      ★★★★★
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                      {product.description}
                    </p>
                    <div className="mt-3">
                      <span className="text-red-500 font-bold text-lg sm:text-xl">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
