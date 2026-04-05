import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Home/Redux/store.js";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Home/Login/Login.jsx";
import SingleProduct from "./Home/SingleProduct/SingleProduct.jsx";
import CheckOut from "./Home/CheckOutpage/CheckOutPage.jsx";
import Cart from "./Home/Cart.jsx/Cart.jsx";
import Logout from "./Home/Navbar/Logout.jsx";
import CategoryPage from "./Home/CategoryPage/CategoryPage.jsx";
import Register from "./Home/Register/Register.jsx";
import ProtectedRoute from "./Home/AuthContext/proctedRoute.jsx";
import { AuthProvider } from "./Home/AuthContext/authcontext.jsx";
import PaymentSuccess from "./Home/PaymentSuccess/PaymentSuccess.jsx";
import PaymentCancel from "./Home/PaymentCancel/PaymentCancel.jsx";
import "./index.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <Home /> },
          { path: "CheckoutPage", element: <CheckOut /> },
        ],
      },
      { path: "SingleProduct/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "logout", element: <Logout /> },
      { path: "category/:slug", element: <CategoryPage /> },
      { path: "payment-success", element: <PaymentSuccess /> },
      { path: "payment-cancel", element: <PaymentCancel /> },
      { path: "*", element: <h1>404 - Not Found</h1> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);
