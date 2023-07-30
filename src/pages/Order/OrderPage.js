import React from "react";
import OrderSuccess from "./components/OrderSuccess";
import OrderFail from "./components/OrderFail";

const OrderPage = () => {
  const status = true;
  return <main>{status ? <OrderSuccess /> : <OrderFail />}</main>;
};

export default OrderPage;
