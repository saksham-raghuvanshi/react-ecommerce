import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className=" m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/" className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>
        <img
          className="rounded-t-lg w-full h-64"
          src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="dark:text-slate-100 text-gray-900 font-bold text-2xl mb-2">
            The Complete Guide to Frontend Development
          </h5>
        </Link>
        <p className="dark:text-slate-100 text-gray-700 font-normal mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
          quisquam magni vel eligendi nam.
        </p>
        <div className="flex items-center my-2">
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi-star-fill text-yellow-500 mr-1"></i>
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>₹</span>
            <span>20</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-blue-700 text-white rounded  hover:bg-blue-900">
            Add to Cart <i className="text-2xl font-medium bi-plus"></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
