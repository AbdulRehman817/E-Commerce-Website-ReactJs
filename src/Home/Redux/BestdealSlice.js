import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from API
export const fetchBestDealProducts = createAsyncThunk(
  "cart/fetchBestDealProducts",
  async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/getBestDealProduct"
    );
    const data = await response.json();
    return data; // Returning API response
  }
);

const initialState = {
  cart: [],
  items: [], // Empty initially
  totalQuantity: 0,
  totalPrice: 0,
};
const BestDealcartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.cart.findIndex(
        (items) => items.id === action.payload.id
      );

      state.cart.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Save to localStorage
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id === action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      }
    },

    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      }
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
    builder.addCase(fetchBestDealProducts.fulfilled, (state, action) => {
      state.items = action.payload; // Storing fetched products
    });
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCart,
  clearCart,
  restoreCart,
} = BestDealcartSlice.actions;

export default BestDealcartSlice.reducer;
