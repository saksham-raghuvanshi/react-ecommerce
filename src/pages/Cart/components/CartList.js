import React, { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import CartCard from "./CartCard";
import Checkout from "./Checkout";

const CartList = () => {
  const [checkout, setCheckout] = useState(false);

  const { cartList, total } = useCart();
  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartList.length})
        </p>
      </section>
      <section>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>₹{total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button
            onClick={() => setCheckout(true)}
            type="button"
            className="bg-blue-700 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 focus-"
          >
            PLACE ORDER<i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  );
};

export default CartList;
