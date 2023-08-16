import React from "react";

import { Route, Routes, Navigate, Router } from "react-router-dom";

import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

import Navbar from "./components/common/Navbar";
import ShopCart from "./components/ShopCart";

import SignUp from "./components/SignUp";
import Users from "./components/Users";
import Counter from "./components/Counter";

function App() {
  return (
    // <ProductsContextProvider>
    //   <CartContextProvider>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/products" element={<Store />} />
    //       <Route path="/products/:id" element={<ProductDetails />} />
    //       <Route path="/cart" element={<ShopCart />} />
    //       <Route path="*" element={<Navigate to="/products" />} />
    //     </Routes>
    //   </CartContextProvider>
    // </ProductsContextProvider>
    //   <Routes>
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="*" element={<Navigate to="/signup" replace/>} />
    //   </Routes>
    <div>
      <Counter />
    </div>
  );
}

export default App;
