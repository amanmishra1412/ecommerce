import React, { useMemo, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Shop = () => {
    const { products, loading, error } = useProduct();

    const [availability, setAvailability] = useState("all");
    const [sortBy, setSortBy] = useState("new");

    const filteredProducts = useMemo(() => {
        let updatedProducts = [...products];

        if (sortBy === "low") {
            updatedProducts.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "high") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        return updatedProducts;
    }, [products, availability, sortBy]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-red-500 text-2xl">{error}</h1>
            </div>
        );
    }

    return (
        <section className="bg-[#FBF8EF] w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-serif mb-8">
                    Topwear
                </h1>

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 text-sm">
                    {/* Left Filters */}
                    <div className="flex gap-4">
                        {/* Price Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent border-b border-gray-400 focus:outline-none"
                        >
                            <option value="new">Sort By</option>
                            <option value="low">Low to High</option>
                            <option value="high">High to Low</option>
                        </select>
                    </div>

                    {/* Right Info */}
                    <div className="flex gap-4 text-gray-600">
                        <p>Sort by: {sortBy}</p>
                        <p>{filteredProducts.length} products</p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product, idx) => (
                        <Link
                            to={`/collection/${product.slug}`}
                            key={idx}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-lg mb-3 bg-white">
                                <img
                                    src={
                                        product.images?.[0] ||
                                        "https://via.placeholder.com/300"
                                    }
                                    alt={product.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <p className="text-sm mb-1 line-clamp-1">
                                {product.name}
                            </p>

                            <p className="text-sm text-gray-600">
                                Rs. {product.price?.toLocaleString()}
                            </p>
                        </Link>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-medium">
                            No Products Found
                        </h2>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shop;
