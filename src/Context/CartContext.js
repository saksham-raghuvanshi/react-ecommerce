import React, { createContext, useContext, useReducer } from "react";
import { cartReducers } from "../Reducer/cartReducers";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(cartInitialState);
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, cartInitialState);

  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        product: [],
        total: 0,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;

export const useCart = () => useContext(cartContext);
