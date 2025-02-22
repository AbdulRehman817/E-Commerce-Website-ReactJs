import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
