import React from "react";
import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";
import CartCard from "./components/CartCard";
import useTitle from "../../Hooks/useTitle";

const CartPage = () => {
  useTitle("Cart - FrontendGyaan");
  const cardListLength = 1;
  return <main>{cardListLength ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;
