import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext/authcontext";
import Hero from "./Hero/Hero";
import AdBanners from "./addBanners/AddBanners";
import Product from "./Products/Product";
import ProductAd from "./ProductAd/ProductAd";
import Brands from "./Brands/Brands";
import TestimonialGroupCards from "./Testimonal/Testimonal";
import Footer from "./Footer/Footer";
import NewsletterSection from "./NewsLetterSection/NewsletterSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7fbfc]">
      <Hero />
      <AdBanners />
      <ProductAd />
      <Product />
      <Brands />
      <TestimonialGroupCards />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
