import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [searchMode, setSearchMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, setUser } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        setUser(null);
        setDropdownOpen(false);
    };

    return (
        <header className="bg-[#FBF8EF] h-20 flex items-center">
            <div className="container mx-auto px-4 w-full">
                {/* NORMAL HEADER */}
                {!searchMode && (
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="w-30 md:w-37.5">
                            <img
                                src="https://i.ibb.co/79DL9BW/image.png"
                                className="w-full object-contain"
                                alt="logo"
                            />
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-green-700 font-semibold"
                                        : "text-gray-700 hover:text-green-700"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-green-700 font-semibold"
                                        : "text-gray-700 hover:text-green-700"
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/collection"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-green-700 font-semibold"
                                        : "text-gray-700 hover:text-green-700"
                                }
                            >
                                Product
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-green-700 font-semibold"
                                        : "text-gray-700 hover:text-green-700"
                                }
                            >
                                Contact
                            </NavLink>
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-4 text-xl">
                            <button onClick={() => setSearchMode(true)}>
                                <i className="ri-search-line"></i>
                            </button>

                            {/* User / Login */}
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    >
                                        {user.profileImg ? (
                                            <img
                                                src={user.profileImg}
                                                alt="profile"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                                                {user.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </div>
                                        )}
                                    </button>

                                    {/* Dropdown */}
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg text-sm z-50">
                                            <Link
                                                to="/profile"
                                                onClick={() =>
                                                    setDropdownOpen(false)
                                                }
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                My Profile
                                            </Link>
                                            {user.role === "admin" ? (
                                                <Link
                                                    to="/admin"
                                                    onClick={() =>
                                                        setDropdownOpen(false)
                                                    }
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Dashboard
                                                </Link>
                                            ) : (
                                                ""
                                            )}
                                            <Link
                                                to="/orders"
                                                onClick={() =>
                                                    setDropdownOpen(false)
                                                }
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                My Orders
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/auth">
                                    <i className="ri-user-line"></i>
                                </Link>
                            )}

                            {/* Cart */}
                            <button className="relative">
                                <Link to="/cart">
                                    <i className="ri-shopping-cart-line"></i>
                                </Link>
                                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                                    2
                                </span>
                            </button>

                            {/* Mobile Menu */}
                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <i className="ri-menu-line"></i>
                            </button>
                        </div>
                    </div>
                )}

                {/* SEARCH MODE */}
                {searchMode && (
                    <div className="flex items-center gap-3">
                        {/* Back / Close */}
                        <button
                            className=" text-2xl"
                            onClick={() => setSearchMode(false)}
                        >
                            <i className="ri-close-line"></i>
                        </button>

                        {/* Search Input */}
                        <input
                            type="text"
                            autoFocus
                            placeholder="Search products..."
                            className="flex-1 px-4 py-2 rounded outline-none"
                        />

                        {/* Search Icon */}
                        <button className=" text-2xl">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
