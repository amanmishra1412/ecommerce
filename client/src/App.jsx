import React from "react";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

// USER PANEL PAGES
import UserLayout from "./layouts/UserLayout";
import Profile from "./User/Profile";
import Orders from "./User/Orders";
import Address from "./User/Address";

// ADMIN PAGES
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./Admin/Dashboard";
import AdminProducts from "./Admin/Products";
import AdminOrders from "./Admin/Orders";
import AdminUsers from "./Admin/Users";

const App = () => {
    return (
        <Routes>
            {/* MAIN WEBSITE */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="collection" element={<Shop />} />
                <Route path="contact" element={<Contact />} />
                <Route path="cart" element={<Cart />} />

                {/* USER PANEL */}
                <Route path="account" element={<UserLayout />}>
                    <Route index element={<Profile />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="address" element={<Address />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="users" element={<AdminUsers />} />
                </Route>
            </Route>

            {/* AUTH */}
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
};

export default App;
