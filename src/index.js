import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Other/ScrollToTop";
import { FilterProvider } from "./Context/FilterContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CartContext>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={3000} />
          <App />
        </FilterProvider>
      </CartContext>
    </Router>
  </React.StrictMode>
);
