import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [searchMode, setSearchMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, setUser } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Add shadow on scroll for that premium feel
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        setUser(null);
        setDropdownOpen(false);
    };

    const navStyles = ({ isActive }) =>
        `relative pb-1 transition-all duration-300 font-medium ${
            isActive
                ? "text-[#165DAE] after:w-full"
                : "text-gray-300 hover:text-white after:w-0"
        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#165DAE] after:transition-all`;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
                scrolled ? "bg-[#191F2D] shadow-2xl" : ""
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* 1. LOGO SECTION */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-white p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                        <i className="ri-shield-flash-fill text-[#165DAE] text-2xl"></i>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-white font-black text-xl tracking-tighter">
                            ADVANCE
                        </span>
                        <span className="text-[#165DAE] text-[10px] font-bold tracking-[0.2em]">
                            SECURITY
                        </span>
                    </div>
                </Link>

                {/* 2. DESKTOP NAVIGATION */}
                {!searchMode && (
                    <nav className="hidden lg:flex items-center gap-8">
                        <NavLink to="/" className={navStyles}>
                            Home
                        </NavLink>
                        <NavLink to="/collection" className={navStyles}>
                            Security Systems
                        </NavLink>
                        <NavLink to="/services" className={navStyles}>
                            Services
                        </NavLink>
                        <NavLink to="/about" className={navStyles}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={navStyles}>
                            Contact
                        </NavLink>
                    </nav>
                )}

                {/* 3. SEARCH OVERLAY (Smooth Slide Down) */}
                {searchMode && (
                    <div className="absolute inset-0 bg-[#191F2D] flex items-center px-6 animate-in fade-in zoom-in duration-300">
                        <div className="container mx-auto flex items-center gap-4">
                            <i className="ri-search-2-line text-gray-400 text-xl"></i>
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search cameras, alarms, sensors..."
                                className="flex-1 bg-transparent border-none outline-none text-white text-lg"
                            />
                            <button
                                onClick={() => setSearchMode(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <i className="ri-close-circle-fill text-2xl"></i>
                            </button>
                        </div>
                    </div>
                )}

                {/* 4. ACTION ICONS */}
                <div className="flex items-center gap-3 sm:gap-6 text-white">
                    <button
                        onClick={() => setSearchMode(true)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <i className="ri-search-line"></i>
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        {user ? (
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 p-1 pr-3 hover:bg-white/10 rounded-full transition-all border border-white/10"
                            >
                                {user.profileImg ? (
                                    <img
                                        src={user.profileImg}
                                        alt="user"
                                        className="w-8 h-8 rounded-full border-2 border-[#165DAE]"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-[#165DAE] flex items-center justify-center text-xs font-bold">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <i
                                    className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                                ></i>
                            </button>
                        ) : (
                            <Link
                                to="/auth"
                                className="hover:text-[#165DAE] transition-colors"
                            >
                                <i className="ri-user-line text-xl"></i>
                            </Link>
                        )}

                        {/* Premium Dropdown Menu */}
                        {dropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setDropdownOpen(false)}
                                ></div>
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-20 overflow-hidden transform origin-top-right animate-in slide-in-from-top-2">
                                    <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                                        <p className="text-xs text-gray-500">
                                            Signed in as
                                        </p>
                                        <p className="text-sm font-bold text-[#191F2D] truncate">
                                            {user?.name}
                                        </p>
                                    </div>
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#165DAE]/10 hover:text-[#165DAE] transition-colors"
                                    >
                                        <i className="ri-user-settings-line"></i>{" "}
                                        My Profile
                                    </Link>
                                    <Link
                                        to="/orders"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#165DAE]/10 hover:text-[#165DAE] transition-colors"
                                    >
                                        <i className="ri-box-3-line"></i> Order
                                        History
                                    </Link>
                                    {user?.role === "admin" && (
                                        <Link
                                            to="/admin"
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-600 hover:bg-blue-50 font-semibold"
                                        >
                                            <i className="ri-dashboard-fill"></i>{" "}
                                            Admin Console
                                        </Link>
                                    )}
                                    <div className="h-[1px] bg-gray-100 my-1"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <i className="ri-logout-box-r-line"></i>{" "}
                                        Sign Out
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Cart Button */}
                    <Link
                        to="/cart"
                        className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
                    >
                        <i className="ri-shopping-bag-3-line"></i>
                        <span className="absolute top-1 right-1 bg-[#165DAE] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                            2
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-2xl"
                        onClick={() => setMenuOpen(true)}
                    >
                        <i className="ri-menu-4-fill"></i>
                    </button>
                </div>
            </div>

            {/* 5. MOBILE SIDEBAR (Drawer) */}
            <div
                className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenuOpen(false)}
            >
                <div
                    className={`absolute right-0 top-0 h-full w-[280px] bg-[#191F2D] p-8 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-white font-bold">Menu</span>
                        <button onClick={() => setMenuOpen(false)}>
                            <i className="ri-close-line text-2xl text-white"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {[
                            "Home",
                            "Collection",
                            "Services",
                            "About",
                            "Contact",
                        ].map((item) => (
                            <NavLink
                                key={item}
                                to={
                                    item === "Home"
                                        ? "/"
                                        : `/${item.toLowerCase()}`
                                }
                                onClick={() => setMenuOpen(false)}
                                className="text-xl text-gray-300 hover:text-[#165DAE] transition-colors"
                            >
                                {item}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
