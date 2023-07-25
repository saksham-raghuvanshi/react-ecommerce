import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Elements/ProductCard";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);
  return (
    <section className="my-20">
      <h1 className="dark:text-slate-100 text-center text-2xl font-semibold mb-5 underline underline-offset-8 ">
        Featured Product
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default FeatureProducts;
