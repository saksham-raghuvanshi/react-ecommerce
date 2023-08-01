import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Elements/Rating";
import useTitle from "../Hooks/useTitle";
import { useCart } from "../Context/CartContext";
import { getProduct } from "../services/productServices";
import { toast } from "react-toastify";

const ProductsDetails = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartList } = useCart();
  const [incart, setInCart] = useState(false);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  useTitle(product.name);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setproduct(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProduct();
  }, [id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className=" mb-5 text-center text-lg text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">₹</span>
              <span>{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounde-lg px-3 py-1 mr-2">
                  Best Seller
                </span>
              )}

              {product.in_stock && (
                <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              )}
              {!product.in_stock && (
                <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {!incart && (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add to Cart<i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
              {incart && (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove item<i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsDetails;
