import React, { useMemo, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Shop = () => {
    const { products, loading, error } = useProduct();
    const [sortBy, setSortBy] = useState("new");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "CCTV Camera",
        "Access Control",
        "Intruder Alarm",
        "Video Door Phone",
        "DVR/NVR",
    ];

    const filteredProducts = useMemo(() => {
        let updatedProducts = [...products];
        if (selectedCategory !== "All") {
            updatedProducts = updatedProducts.filter(
                (p) => p.category === selectedCategory,
            );
        }
        if (sortBy === "low") updatedProducts.sort((a, b) => a.price - b.price);
        if (sortBy === "high")
            updatedProducts.sort((a, b) => b.price - a.price);
        return updatedProducts;
    }, [products, selectedCategory, sortBy]);

    if (loading)
        return (
            <div className="h-screen flex items-center justify-center bg-[#F2F3F4]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#165DAE]"></div>
            </div>
        );

    return (
        <main className="bg-[#F2F3F4] min-h-screen">
            {/* --- HERO SECTION FOR SHOP (Header ke liye background) --- */}
            <div className="relative h-[45vh] w-full flex items-center overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover shadow-inner"
                    alt="Security Solutions"
                />
                {/* Dark Blue Overlay - Isse Header ke links clear dikhenge */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#191F2D]/90 via-[#191F2D]/60 to-[#F2F3F4]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
                    <nav className="flex gap-2 text-xs uppercase tracking-[0.2em] text-[#165DAE] font-bold mb-4">
                        <Link to="/" className="hover:text-white transition">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white">Shop All Solutions</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        SMART <span className="text-[#165DAE]">CATALOGUE</span>
                    </h1>
                    <p className="text-gray-300 max-w-lg mt-4 text-sm md:text-base leading-relaxed">
                        Explore our complete range of enterprise-grade security
                        hardware. Protecting your assets with next-generation
                        surveillance.
                    </p>
                </div>
            </div>

            {/* --- SHOP CONTENT SECTION --- */}
            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-black/5 border border-white sticky top-28">
                            <h3 className="text-[#191F2D] font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                                <i className="ri-list-settings-line text-[#165DAE]"></i>{" "}
                                Categories
                            </h3>
                            <div className="flex flex-wrap lg:flex-col gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`text-left px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                                            selectedCategory === cat
                                                ? "bg-[#165DAE] text-white shadow-lg shadow-[#165DAE]/20 translate-x-1"
                                                : "bg-[#F2F3F4] text-gray-500 hover:bg-gray-200"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product List Container */}
                    <div className="flex-1">
                        {/* Top Bar (Sort & Count) */}
                        <div className="bg-white/50 backdrop-blur-md p-4 rounded-2xl mb-8 flex flex-col sm:flex-row justify-between items-center border border-white shadow-sm gap-4">
                            <p className="text-sm text-gray-500 font-medium">
                                Showing{" "}
                                <span className="text-[#191F2D] font-bold">
                                    {filteredProducts.length}
                                </span>{" "}
                                Results
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase">
                                    Order By:
                                </span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-[#191F2D] shadow-sm border-none focus:ring-2 focus:ring-[#165DAE] outline-none"
                                >
                                    <option value="new">Newly Added</option>
                                    <option value="low">Price: Lowest</option>
                                    <option value="high">Price: Highest</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.slug}
                                    className="group bg-white rounded-[2.5rem] p-5 border border-white shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F8F9FA] mb-6">
                                        <img
                                            src={
                                                product.images?.[0] ||
                                                "https://via.placeholder.com/400"
                                            }
                                            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                            alt={product.name}
                                        />
                                        <div className="absolute inset-0 bg-[#191F2D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="px-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[9px] font-black bg-[#165DAE]/10 text-[#165DAE] px-2 py-1 rounded-md uppercase tracking-widest">
                                                {product.category}
                                            </span>
                                            <span className="text-sm font-black text-[#191F2D]">
                                                ₹
                                                {product.price?.toLocaleString()}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/collection/${product.slug}`}
                                        >
                                            <h3 className="text-base font-bold text-[#191F2D] leading-tight group-hover:text-[#165DAE] transition-colors line-clamp-2">
                                                {product.name}
                                            </h3>
                                        </Link>
                                        <button className="mt-4 w-full py-3 bg-[#191F2D] group-hover:bg-[#165DAE] text-white text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2">
                                            QUICK ENQUIRY{" "}
                                            <i className="ri-arrow-right-up-line"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Shop;
