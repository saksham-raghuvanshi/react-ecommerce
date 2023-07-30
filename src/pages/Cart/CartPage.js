import React from "react";
import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";

import useTitle from "../../Hooks/useTitle";
import { useCart } from "../../Context/CartContext";

const CartPage = () => {
  const { cartList } = useCart();
  useTitle("Cart - FrontendGyaan");
  const cardListLength = cartList.length;
  return <main>{cardListLength ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;
