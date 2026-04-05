import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";

// Load cart from localStorage when app starts
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return { allCart: { cart: JSON.parse(savedCart), items: [], totalQuantity: 0, totalPrice: 0, searchTerm: "", filteredProducts: [] } };
    }
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
  }
  return undefined;
};

// Save cart to localStorage whenever state changes
const saveCartToStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.allCart.cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
};

const preloadedState = loadCartFromStorage();

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save cart to localStorage
store.subscribe(() => {
  saveCartToStorage(store.getState());
});

export default store;