import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";

import SignupPage from "./SignupPage/SignupPage.jsx";

import SingleProduct from "./Home/SingleProduct/SingleProduct.jsx";
import SingleBestDealProducts from "./Home/SingleBestDealProducts/SingleBestDealProducts.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "SingleBestDealProducts/:id",
        element: <SingleBestDealProducts />,
      },
      {
        path: "SingleProduct/:id",
        element: <SingleProduct />,
      },
      // {
      //   path: "cart",
      //   element: <Cart />,
      // },
    ],
  },

  // {
  //   path: "login",
  //   element: <Login />,
  // },
  {
    path: "signup",
    element: <SignupPage />,
  },
  // {
  //   path: "input",
  //   element: <Input />,
  // },

  {
    path: "*",
    element: "NOT FOUND!",
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
);
