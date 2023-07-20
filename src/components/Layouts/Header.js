import React from "react";
import Logo from "../../asset/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-2" alt="Frontendgyaan Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FrontendGyaan
            </span>
          </Link>
          <div className="flex items-center ">
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart-fill"></span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
