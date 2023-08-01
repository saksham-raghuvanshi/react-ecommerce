import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  async function handleLogin(ev) {
    ev.preventDefault();

    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
      };

      const data = await login(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <main>
      <section>
        <p className="text-center text-2xl font-semibold dark:text-slate-100 my-10  underline underline-offset-8">
          Login
        </p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm dont-medium text-gray-900 dark:text-slate-100"
          >
            YourEmail
          </label>
          <input
            ref={email}
            id="email"
            placeholder="Enter Your Email"
            type="email"
            required
            autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm dont-medium text-gray-900 dark:text-slate-100"
          >
            Password
          </label>
          <input
            ref={password}
            id="password"
            placeholder="Enter Your Password"
            type="password"
            required
            autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button className="border px-5 py-2.5 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
          {" "}
          Login
        </button>
      </form>
      <div className="my-4 text-slate-700 dark:text-slate-100 text-xl">
        Create new Account :{" "}
        <Link
          className="text-blue-700 hover:text-blue-900 hover:underline hover:underline-offset-8"
          to="/register"
        >
          Register
        </Link>
      </div>
    </main>
  );
};

export default Login;
