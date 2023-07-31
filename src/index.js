import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Other/ScrollToTop";
import { FilterProvider } from "./Context/FilterContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={3000} />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
