import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "animate.css";

import Home from "./components/Website/Home";

import "remixicon/fonts/remixicon.css";
import About from "./components/Website/About";
import Products from "./components/Website/Products";
import Contactus from "./components/Website/Contactus";
import Login from "./components/Website/Login";
import Signup from "./components/Website/Signup";
import SingleProduct from "./components/Website/SingleProduct";
import Profile from "./components/Website/Profile";
import Dashboard from "./components/Panel/Seller/Dashboard";
import ProductsList from "./components/Panel/Seller/SellerProductsList";
import AddProducts from "./components/Panel/Seller/AddProducts";
import Orders from "./components/Panel/Seller/SellerOrders";
import Settings from "./components/Panel/Seller/SellerSettings";
import CustomerOrders from "./components/Panel/Customer/CustomerOrders";
import Wishlist from "./components/Panel/Customer/Wishlist";
import Reviews from "./components/Panel/Customer/Reviews";
import CustomerProfile from "./components/Panel/Customer/CustomerProfile";
import CustomerSettings from "./components/Panel/Customer/CustomerSettings";
import MyCart from "./components/Website/MyCart";

import FurnitureCategory from "./components/Website/FurnitureCategory";
import CamerasCategory from "./components/Website/CamerasCategory";
import CosmeticsCategory from "./components/Website/CosmeticsCategory";
import HomeDecor from "./components/Website/HomeDecor";
import HealthAndBeuaty from "./components/Website/HealthAndBeauty";
import Accessories from "./components/Website/Accessories";
import Handicrafts from "./components/Website/Handicrafts";
import Clating from "./components/Website/Clothing";
import AdminDashboard from "./components/Panel/Admin/AdminDashboard";
import AdminProducts from "./components/Panel/Admin/AdminProducts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/camerascategory" element={<CamerasCategory />} />
          <Route path="/cosmeticscategory" element={<CosmeticsCategory />} />
          <Route path="/furniture" element={<FurnitureCategory />} />
          <Route path="/homedecor" element={<HomeDecor />} />
          <Route path="/handicrafts" element={<Handicrafts />} />
          <Route path="/clothing" element={<Clating />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/healthandbeauty" element={<HealthAndBeuaty />} />
          {/* <Route path="/furniturecategory" element={<FurnitureCategory />} /> */}
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="mycart" element={<MyCart />} />
          {/* Seller Dashboard Routing */}
          <Route path="/sellerdashboard" element={<Dashboard />} />
          <Route path="/sellerproducts" element={<ProductsList />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/setting" element={<Settings />} />
          {/* Customer Dashboard Routing */}
          <Route path="/customerorders" element={<CustomerOrders />} />
          <Route path="/customerprofile" element={<CustomerProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="customersettings" element={<CustomerSettings />} />

          {/* Admin  Dashboard Routing */}
          <Route
            path="/admin/dashboard"
            element={
            <AdminDashboard />
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminProducts/>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <h1 className="bg-blue-600 p-4 text-white">Manage Orders</h1>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <h1 className="bg-blue-600 p-4 text-white">Manage Customers</h1>
            }
          />
          <Route
            path="/admin/sellers"
            element={
              <h1 className="bg-blue-600 p-4 text-white">Manage Sellers</h1>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <h1 className="bg-blue-600 p-4 text-white">View Reports</h1>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <h1 className="bg-blue-600 p-4 text-white">Admin Settings</h1>
            }
          />
          <Route
            path="/admin/logout"
            element={
              <h1 className="bg-blue-600 p-4 text-white">Admin Logout</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
