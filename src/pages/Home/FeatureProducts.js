import React from "react";
import ProductCard from "../../components/Elements/ProductCard";
import Testimonials from "./Testimonials";

const FeatureProducts = () => {
  return (
    <section className="my-20">
      <h1 className="dark:text-slate-100 text-center text-2xl font-semibold mb-5 underline underline-offset-8 ">
        Featured Product
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <Testimonials />
      </div>
    </section>
  );
};
export default FeatureProducts;
