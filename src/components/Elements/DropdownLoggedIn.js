import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../services/dataServices";
import { Logout } from "../../services/authService";
import { toast } from "react-toastify";

const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout();
    navigate("/");
    setDropdown(false);
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchdata();
  });
  return (
    <div className="select-none absolute top-11 right-0 z-10 w-44 bg-white rounder divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.name || ""}</div>
      </div>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Products
          </Link>
        </li>
        <li className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <Link onClick={() => setDropdown(false)} to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
      <div>
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default DropdownLoggedIn;
