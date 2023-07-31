import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList";
import ProductsDetails from "../pages/ProductsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderPage from "../pages/Order/OrderPage";
import Dashboard from "../pages/Dashboard.js/Dashboard";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
