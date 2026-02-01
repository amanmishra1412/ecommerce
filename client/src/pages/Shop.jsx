import React, { useState } from "react";

const products = [
    {
        id: 1,
        name: "Teal Blue Silk Kurti",
        price: 1295,
        image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
        soldOut: false,
    },
    {
        id: 2,
        name: "Rani Pink Silk Kurti",
        price: 1295,
        image: "https://images.unsplash.com/photo-1520974735194-6c6b0e8a3e96",
        soldOut: true,
    },
    {
        id: 3,
        name: "Red A-Line",
        price: 1495,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        soldOut: false,
    },
    {
        id: 4,
        name: "Blue Cotton Kurti",
        price: 1295,
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        soldOut: true,
    },
];

const Shop = () => {
    const [availability, setAvailability] = useState("all");

    const filteredProducts = products.filter((p) => {
        if (availability === "available") return !p.soldOut;
        if (availability === "soldout") return p.soldOut;
        return true;
    });

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
                        <select
                            onChange={(e) => setAvailability(e.target.value)}
                            className="bg-transparent border-b border-gray-400 focus:outline-none"
                        >
                            <option value="all">Availability</option>
                            <option value="available">Available</option>
                            <option value="soldout">Sold Out</option>
                        </select>

                        <select className="bg-transparent border-b border-gray-400 focus:outline-none">
                            <option>Price</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>

                    {/* Right Sort */}
                    <div className="flex gap-4 text-gray-600">
                        <p>Sort by: Date, new to old</p>
                        <p>{filteredProducts.length} products</p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative overflow-hidden rounded-lg mb-3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                                />

                                {product.soldOut && (
                                    <span className="absolute bottom-2 left-2 bg-green-900 text-white text-xs px-2 py-1 rounded">
                                        Sold out
                                    </span>
                                )}
                            </div>

                            <p className="text-sm mb-1">{product.name}</p>
                            <p className="text-sm text-gray-600">
                                From Rs. {product.price.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-16 text-sm">
                    <button className="opacity-50">‹</button>
                    <button className="underline">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>›</button>
                </div>
            </div>
        </section>
    );
};

export default Shop;
