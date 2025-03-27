import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar/Navbar";
import TestimonialGroupCards from "./Home/Testimonal/Testimonal";
import NewsletterSection from "./Home/NewsLetterSection/NewsletterSection";
import Footer from "./Home/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* Added Footer component */}
    </>
  );
};

export default Layout;
