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
import AdminProducts from "./components/Panel/Admin/AdminProduct";
import AdminOrders from "./components/Panel/Admin/AdminOrders";
import AdminCustomers from "./components/Panel/Admin/AdminCustomers";
import AdminSeller from "./components/Panel/Admin/AdminSeller";
import AdminReports from "./components/Panel/Admin/AdminReports";
import AdminSettings from "./components/Panel/Admin/AdminSettings";
import AdminLogout from "./components/Panel/Admin/AdminLogout";

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
              <AdminOrders/>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <AdminCustomers/>
            }
          />
          <Route
            path="/admin/sellers"
            element={
            <AdminSeller/>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <AdminReports/>
            }
          />
          <Route
            path="/admin/settings"
            element={
             <AdminSettings/>
            }
          />
          <Route
            path="/admin/logout"
            element={
              <AdminLogout/>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
