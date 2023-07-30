import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useCart } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [incart, setInCart] = useState(false);
  const { id, name, price, rating, overview, poster, best_seller } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <div className=" m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}

        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="dark:text-slate-100 text-gray-900 font-bold text-2xl mb-2">
            {name}
          </h5>
        </Link>
        <p className="dark:text-slate-100 text-gray-700 font-normal mb-3">
          {overview}
        </p>
        <div className="flex items-center my-2">
          <Rating rating={rating} />
          {/* <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i> */}
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>₹</span>
            <span>{price}</span>
          </span>

          {incart ? (
            <button
              onClick={() => removeFromCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-red-700 text-white rounded  hover:bg-red-900 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Remove item<i className="ml-1 bi bi-trash3"></i>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-blue-700 text-white rounded  hover:bg-blue-900 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add to Cart <i className="text-2xl font-medium bi-plus"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
