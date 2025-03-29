import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/Hero";
import AdBanners from "./addBanners/AddBanners";
import Product from "./Products/Product";
import ProductAd from "./ProductAd/ProductAd";
import Brands from "./Brands/Brands";
import TestimonialGroupCards from "./Testimonal/Testimonal";
import NewsletterSection from "./NewsLetterSection/NewsletterSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7fbfc] w-full overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>

      {/* Ad Banners */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanners />
      </div>

      {/* Product Advertisement */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductAd />
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Product />
      </div>

      {/* Brands */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Brands />
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialGroupCards />
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;
