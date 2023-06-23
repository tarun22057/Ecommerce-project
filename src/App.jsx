import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Men" element={<div>MEN</div>} />
        <Route path="Women" element={<div>Women</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
