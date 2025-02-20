import React from "react";
import { createContext } from "react";
const Reducers = () => {
  const Cart = createContext();
  return <Cart.Provider>Reducers</Cart.Provider>;
};

export default Reducers;
