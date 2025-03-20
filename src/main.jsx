import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Home/Redux/store.js";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Home/Login/Login.jsx";
import SingleProduct from "./Home/SingleProduct/SingleProduct.jsx";
import SingleBestDealProducts from "./Home/SingleBestDealProducts/SingleBestDealProducts.jsx";
import CheckoutPage from "./Home/ChekoutPage/CheckoutPage.jsx";
import Cart from "./Home/Cart.jsx/Cart.jsx";
import Logout from "./Home/Navbar/Logout.jsx";
// import Register from "./Home/Register/Register.jsx";
import { AuthProvider } from "./Home/Redux/auth.jsx";
import "./index.css";

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "SingleBestDealProducts/:id",
        element: <SingleBestDealProducts />,
      },
      { path: "SingleProduct/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "CheckoutPage", element: <CheckoutPage /> },
      { path: "/Login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "*", element: <h1>404 - Not Found</h1> },
    ],
  },
  // { path: "Register", element: <Register /> },
]);

// Render Application

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Redux Provider should be outermost if state management is global */}
    <AuthProvider>
      {" "}
      {/* Wrap AuthProvider inside Redux Provider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);
