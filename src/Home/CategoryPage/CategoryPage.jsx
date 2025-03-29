// import React, { useEffect, useState } from "react";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);

//   // Fetch categories
//   useEffect(() => {
//     fetch("http://localhost:3000/api/v1/categories")
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   // Fetch products by category
//   const fetchProducts = (category) => {
//     setSelectedCategory(category);
//     fetch(
//       `http://localhost:3000/api/v1/products/category/${encodeURIComponent(
//         category
//       )}`
//     )
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.error("Error fetching products:", err));
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">Categories</h3>
//         <ul className="space-y-3">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <li
//                 key={category._id}
//                 onClick={() => fetchProducts(category.name)}
//                 className={`p-4 rounded-lg cursor-pointer text-gray-700 font-medium flex items-center gap-3 transition-all duration-300
//                 ${
//                   selectedCategory === category.name
//                     ? "bg-gradient-to-r from-[#D43F52] to-[#f65d70] text-white shadow-md"
//                     : "hover:bg-gray-200"
//                 }`}
//               >
//                 <span className="w-2 h-2 rounded-full bg-[#D43F52]"></span>
//                 {category.name}
//               </li>
//             ))
//           ) : (
//             <p className="text-gray-500">Loading categories...</p>
//           )}
//         </ul>
//       </div>

//       {/* Products Section */}
//       <div className="flex-1">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
//           {selectedCategory ? selectedCategory : "Select a Category"}
//         </h2>
//         <p className="text-gray-500 text-lg mb-6">
//           Browse our best deals and premium collections.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="relative bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 {/* Sale Badge */}
//                 <div className="absolute top-3 left-3 bg-[#D43F52] text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
//                   Sale
//                 </div>

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-56 object-cover"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {product.name}
//                   </h3>
//                   <p className="text-[#D43F52] font-bold text-lg mt-1">
//                     ${product.price}
//                   </p>
//                   <p className="text-gray-500 text-sm mt-1">
//                     {product.keyFeatures[0]}
//                   </p>
//                 </div>

//                 {/* Hover effect overlay */}
//                 <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                   <button className="bg-white text-[#D43F52] font-bold px-4 py-2 rounded-full shadow-lg">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : selectedCategory ? (
//             <p className="text-gray-500">No products found in this category.</p>
//           ) : (
//             <p className="text-gray-500">Select a category to view products.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // Fetch categories
  useEffect(() => {
    fetch(
      `https://backend-for-e-commerce-website-slnb.vercel.app/api/v1/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  const handleProductClick = (id) => {
    navigate(`/SingleProduct/${id}`);
  };

  // Fetch products by category
  const fetchProducts = (category) => {
    setSelectedCategory(category);
    fetch(
      `http://localhost:3000/api/v1/products/category/${encodeURIComponent(
        category
      )}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li
                    key={category._id}
                    onClick={() => fetchProducts(category.name)}
                    className={`cursor-pointer p-3 rounded ${
                      category.name
                        ? "hover:text-[#0573f0] "
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">Loading categories...</p>
              )}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Filter by price</h2>
            {/* Price filter would go here */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Average rating</h3>
            {/* Rating filter would go here */}
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-6xl font-bold mb-4 text-[#0573f0]">
            {selectedCategory || "Select a Category"}
          </h1>
          <p className="text-gray-600 mb-6">
            {selectedCategory
              ? "Browse our best deals and premium collections."
              : "Please select a category to view products"}
          </p>

          {selectedCategory && (
            <div className="mb-6">
              <p className="text-gray-600">
                Showing all {products.length} results
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="relative cursor-pointer"
                onClick={() => handleProductClick(product._id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-sm bg-gray-100"
                />
                <div className="mt-4">
                  <div className="flex items-center text-yellow-500">★★★★★</div>
                  <h3 className="text-lg font-bold text-gray-800 mt-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.description}
                  </p>
                  <div className="mt-3">
                    <span className="text-red-500 font-bold text-lg">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
