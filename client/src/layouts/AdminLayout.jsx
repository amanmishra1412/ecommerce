import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const linkClass = ({ isActive }) =>
        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-800";

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-950 text-white hidden md:block">
                <div className="p-6 font-semibold text-lg border-b border-gray-800">
                    Admin Panel
                </div>

                <nav className="p-4 space-y-2 text-sm">
                    <NavLink
                        to="/admin"
                        end
                        className={linkClass + " block px-4 py-2 rounded"}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="products"
                        className={linkClass + " block px-4 py-2 rounded"}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="orders"
                        className={linkClass + " block px-4 py-2 rounded"}
                    >
                        Orders
                    </NavLink>
                    <NavLink
                        to="users"
                        className={linkClass + " block px-4 py-2 rounded"}
                    >
                        Users
                    </NavLink>

                    <button className="w-full text-left px-4 py-2 rounded text-red-400 hover:bg-gray-800">
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
