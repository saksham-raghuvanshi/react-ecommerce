import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Elements/ProductCard";
import FilterBar from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useFilter } from "../../Context/FilterContext";
import { getProductList } from "../../services/productServices";
import { toast } from "react-toastify";
const ProductsList = () => {
  const { products, initialProductList } = useFilter();
  console.log(products);
  const [show, setShow] = useState(false);
  // const [products, setProducts] = useState([]);
  useTitle("Explore eBooks Collection");
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  // console.log(searchTerm);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        // setProducts(data);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProducts();
  }, [searchTerm, initialProductList]);
  return (
    <main className="productslist">
      <section className="my-5">
        <div className="m-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All ebooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};

export default ProductsList;
