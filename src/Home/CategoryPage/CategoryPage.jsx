import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [avgRating, setAvgRating] = useState(0)
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: parseInt(value, 10) });
  };
  const handleAvgRatingChange = (event) => {
    setAvgRating(parseInt(event.target.value, 10))
  }
  const navigate = useNavigate();
  const [initialLoad, setInitialLoad] = useState(true);
  const [maxPrice, setMaxPrice] = useState(1000)
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
    setInitialLoad(true);
    setSelectedCategory(category);
    fetch(
      `https://backend-for-e-commerce-website-slnb.vercel.app/api/v1/products/category/${encodeURIComponent(
        category
      )}`
    )
      .then((res) => res.json()).then((data) => {setProducts(data.products); setFilteredProducts(data.products);})
      .catch((err) => console.error("Error fetching products:", err));
  };

  const handleProductClick = (id) => {
     const updatedProducts = products.filter(product=>product._id!==id);
    const updatedFilteredProducts = filteredProducts.filter(product=>product._id!==id);
        setProducts(updatedProducts);
        setFilteredProducts(updatedFilteredProducts);
    navigate(`/SingleProduct/${id}`);
  };

  useEffect(() => {
    const filtered = products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const priceMatch =
        product.price >= priceRange.min && product.price <= priceRange.max

      const ratingMatch = !avgRating || product.averageRating >= avgRating;

      return nameMatch && priceMatch && ratingMatch;
    });

    setFilteredProducts(filtered);
     setInitialLoad(false);
  }, [searchQuery, priceRange, products, avgRating, initialLoad]);
  useEffect(() => {
    setMaxPrice(Math.max(...products.map((product) => product.price), 1000));
  }, [products]);
  const renderStarRating = (rating) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;
    return (
      <div className="flex items-center text-yellow-500">
        {Array.from({ length: filledStars }, (_, i) => (
          <span key={`filled-${i}`}>★</span>
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
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

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Filter by Price</h2>
            <div className="flex items-center justify-between mb-2">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={priceRange.min}
                onChange={handlePriceRangeChange}
                className="w-20 p-2 border rounded text-sm"
              />
              <span className="text-sm text-gray-600">-</span>
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={priceRange.max}
                onChange={handlePriceRangeChange}
                className="w-20 p-2 border rounded text-sm"
              />
            </div>
            <Slider
             range
            min={0}
              max={maxPrice}
             value={[priceRange.min, priceRange.max]}
             onChange={(value) => setPriceRange({ min: value[0], max: value[1] })}
            />
          </div>

<div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Average Rating</h2>
             <select
            value={avgRating}
            onChange={handleAvgRatingChange}
             className="w-full p-2 border rounded"
            >
            <option value={0}>All</option>
            <option value={1}>1 Star & Above</option>
             <option value={2}>2 Stars & Above</option>
             <option value={3}>3 Stars & Above</option>
             <option value={4}>4 Stars & Above</option>
            <option value={5}>5 Stars</option>
           </select>
          </div>

          <div className="mb-6">
             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
               <FaSearch className="text-gray-500 mr-2" />
               <input
                 type="text"
                 placeholder="Search by product name"
                value={searchQuery}
                 onChange={handleSearchChange}
                 className="bg-transparent outline-none w-full"
              />
             </div>

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
              : "Please select a category to view products."}
          </p>

          {selectedCategory && (
             <div className="mb-6">
               <p className="text-gray-600">
               Showing all {filteredProducts.length} results
                </p>
               </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
                     {renderStarRating(product.averageRating)}
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
          {filteredProducts.length === 0 && selectedCategory && (
            <p className="text-gray-500 mt-6">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Categories;
