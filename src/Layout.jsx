import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar/Navbar";

import Footer from "./Home/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* Added Footer component */}
    </>
  );
};

export default Layout;
