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
    <div className="bg-[#f7fbfc] w-full overflow-hidden ">
      {/* Wrapper for Consistent Layout */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <section className="p-4 sm:p-6">
            <Hero />
        </section>

        <section>
          <AdBanners />
        </section>

        <section>
          <ProductAd />
        </section>

        <section>
          <Product />
        </section>

        <section>
          <Brands />
        </section>

        <section>
          <TestimonialGroupCards />
        </section>

        <section>
          <NewsletterSection />
        </section>
      </div>
    </div>
  );
};

export default Home;
