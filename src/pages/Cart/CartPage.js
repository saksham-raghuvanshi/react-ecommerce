import React from "react";
import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";
import CartCard from "./components/CartCard";

const CartPage = () => {
  const cardListLength = 0;
  return <main>{cardListLength ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;
