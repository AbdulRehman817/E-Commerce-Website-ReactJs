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

  // Fetch products by category
  const fetchProducts = (category) => {
    setSelectedCategory(category);
    fetch(
      `https://backend-for-e-commerce-website-slnb.vercel.app/api/v1/products/category/${encodeURIComponent(
        category
      )}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const handleProductClick = (id) => {
    navigate(`/SingleProduct/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li
                    key={category._id}
                    onClick={() => fetchProducts(category.name)}
                    className={`cursor-pointer p-3 rounded ${
                      selectedCategory === category.name
                        ? "bg-blue-500 text-white"
                        : "hover:text-blue-600"
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
            {/* Price filter can be added here */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Average rating</h3>
            {/* Rating filter can be added here */}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="relative cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => handleProductClick(product._id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <div className="flex items-center text-yellow-500">★★★★★</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
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

          {products.length === 0 && selectedCategory && (
            <p className="text-gray-500 mt-6">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
