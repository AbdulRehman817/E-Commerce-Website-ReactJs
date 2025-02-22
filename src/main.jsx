import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import ReactDOM from "react-dom/client";
import { store } from "./Home/Redux/store.js";
import { Provider } from "react-redux";
import SignupPage from "./SignupPage/SignupPage.jsx";
import SingleProduct from "./Home/SingleProduct/SingleProduct.jsx";
import SingleBestDealProducts from "./Home/SingleBestDealProducts/SingleBestDealProducts.jsx";
import "./index.css";
import Cart from "./Home/Cart.jsx/Cart.jsx";

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
      {
        path: "cart",
        element: <Cart />,
      },
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
