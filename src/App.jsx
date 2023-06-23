import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Account } from "./pages/account/Account";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Account" element={<Account />} />
        <Route path="Wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
