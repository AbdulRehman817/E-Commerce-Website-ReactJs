import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from API
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetch(
      `https://backend-for-e-commerce-website-gj6r.vercel.app/api/v1/getProduct`
    );
    const data = await response.json();
    return data; // Returning API response
  }
);

const initialState = {
  cart: [], // Cart items
  items: [], // All fetched products
  totalQuantity: 0, // Total items in the cart
  totalPrice: 0, // Total price of items in the cart
  searchTerm: "", // Search term for filtering products
  filteredProducts: [], //filter products according to user search
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItem >= 0) {
        state.cart[existingItem].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalQuantity += quantity;
          cartTotal.totalPrice += itemTotal;
          return cartTotal;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalQuantity = totalQuantity;
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart"); // Ensure cart is removed from localStorage
    },
    restoreCart: (state) => {
      state.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload.products; // Assuming API returns { products: [...] }
    });
  },
});

export const {
  setSearchTerm,
  filterProducts,
  restoreCart,
  setCart,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  addToCart,
  getCartTotal,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
