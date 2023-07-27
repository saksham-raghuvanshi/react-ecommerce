import React, { createContext, useContext } from "react";

const filterIntialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterIntialState);

export const FilterProvider = ({ children }) => {
  const value = {
    productList: [1, 2, 3],
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
