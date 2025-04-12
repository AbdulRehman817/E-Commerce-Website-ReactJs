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
<>
    
        <section>
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
      </>
  );
};

export default Home;
