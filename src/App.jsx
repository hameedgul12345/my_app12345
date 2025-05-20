import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Website/Home";

import "remixicon/fonts/remixicon.css";
import About from "./components/Website/About";
import Products from "./components/Website/Products";
import Categories from "./components/Website/Categories";
import Contactus from "./components/Website/Contactus";
import Login from "./components/Website/Login";
import Signup from "./components/Website/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
