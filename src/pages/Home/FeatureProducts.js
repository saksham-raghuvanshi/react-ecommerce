import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Elements/ProductCard";
import { getfeatureList } from "../../services/productServices";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getfeatureList();
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
