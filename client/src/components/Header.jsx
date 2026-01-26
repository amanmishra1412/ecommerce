import React, { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [searchMode, setSearchMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-600 h-20 flex items-center">
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
                        <nav className="hidden md:flex gap-6 text-white">
                            <a href="#">Home</a>
                            <a href="#">Shop</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-4 text-white text-xl">
                            <button onClick={() => setSearchMode(true)}>
                                <i className="ri-search-line"></i>
                            </button>

                            <Link to="/auth">
                                <i className="ri-user-line"></i>
                            </Link>

                            <button className="relative">
                                <i className="ri-shopping-cart-line"></i>
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
                            className="text-white text-2xl"
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
                        <button className="text-white text-2xl">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
