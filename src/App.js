import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
