import React, { useEffect, useState } from "react";
import Logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
import Search from "../Section/Search";
import DropdownLoggedOut from "../Elements/DropdownLoggedOut";
import DropdownLoggedIn from "../Elements/DropdownLoggedIn";
import { useCart } from "../../Context/CartContext";
const Header = () => {
  const { cartList } = useCart();

  const [show, setshow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-2" alt="Frontendgyaan Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FrontendGyaan
            </span>
          </Link>
          <div className="flex items-center ">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setshow(!show)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"
            >
              {dropdown &&
                (token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
            </span>
          </div>
        </div>
      </nav>

      {show && <Search setshow={setshow} />}
    </>
  );
};

export default Header;
