import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
    const linkClass = ({ isActive }) =>
        isActive ? "bg-green-900 text-white" : "hover:bg-gray-100";

    return (
        <section className="bg-[#f9f3e8] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-serif mb-8">My Account</h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="md:w-1/4">
                        <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                            <NavLink
                                to="profile"
                                className={
                                    linkClass + " block px-3 py-2 rounded"
                                }
                            >
                                Profile
                            </NavLink>

                            <NavLink
                                to="orders"
                                className={
                                    linkClass + " block px-3 py-2 rounded"
                                }
                            >
                                My Orders
                            </NavLink>

                            <NavLink
                                to="address"
                                className={
                                    linkClass + " block px-3 py-2 rounded"
                                }
                            >
                                Addresses
                            </NavLink>

                            <button className="w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50">
                                Logout
                            </button>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="md:flex-1 bg-white rounded-lg p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserLayout;
