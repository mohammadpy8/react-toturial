import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import ProductsContextProvider from "./context/ProductsContextProvider";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/products"/>} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
