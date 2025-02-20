import React from "react";
import Hero from "./Hero/Hero";
import Products from "./BestDealProducts/Products";
import AdBanners from "./addBanners/AddBanners";
import Product from "./Products/Product";
import ProductAd from "./ProductAd/ProductAd";
import Brands from "./Brands/Brands";
const Home = () => {
  return (
    <div className="bg-[#f7fbfc]">
      <Hero />
      <AdBanners />
      <Products />
      <ProductAd />
      <Product />
      <Brands />
    </div>
  );
};

export default Home;
