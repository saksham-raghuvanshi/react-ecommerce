import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  async function handleLogin(ev) {
    ev.preventDefault();

    const authDetail = {
      email: email.current.value,
      password: password.current.value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    };

    const response = await fetch("http://localhost:8000/login", requestOptions);

    const data = await response.json();
    data.accessToken ? navigate("/products") : toast.error(data);

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
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
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
