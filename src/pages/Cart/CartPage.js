import React from "react";
import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";

const CartPage = () => {
  const cardListLength = 0;
  return <main>{cardListLength ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;
