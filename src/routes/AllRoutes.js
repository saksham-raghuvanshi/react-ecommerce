import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList";
import ProductsDetails from "../pages/ProductsDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
