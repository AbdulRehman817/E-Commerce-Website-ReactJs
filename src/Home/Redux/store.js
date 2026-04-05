import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";
import cartReducer from "../Redux/cartSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer, // Handles authentication state
    allCart: cartReducer, // Handles cart state
  },
});

export default store;
