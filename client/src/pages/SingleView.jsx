import React, { useState } from "react";

const product = {
    id: 1,
    name: "Teal Blue Silk Kurti",
    price: 1295,
    images: [
        "https://images.unsplash.com/photo-1542060748-10c28b62716f",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        "https://images.unsplash.com/photo-1520974735194-6c6b0e8a3e96",
    ],
    shortDesc: "Elegant silk kurti crafted for festive elegance.",
    longDesc:
        "This Teal Blue Silk Kurti is thoughtfully designed for modern women who love timeless elegance. Crafted using premium silk fabric, it offers a soft feel and graceful drape. Ideal for festive occasions, family gatherings, and celebrations. Pair it with statement earrings and traditional footwear for a complete look. The breathable fabric ensures comfort throughout the day while maintaining a refined appearance.",
};

const relatedProducts = [
    {
        id: 2,
        name: "Red A-Line Kurti",
        price: 1495,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
        id: 3,
        name: "Pink Festive Kurti",
        price: 1395,
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
        id: 4,
        name: "Green Cotton Kurti",
        price: 1195,
        image: "https://images.unsplash.com/photo-1520974735194-6c6b0e8a3e96",
    },
];

const SingleView = () => {
    const [active, setActive] = useState(0);
    const [qty, setQty] = useState(1);

    return (
        <section className="bg-[#f9f3e8]">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* IMAGE SLIDER */}
                    <div>
                        <img
                            src={product.images[active]}
                            className="w-full h-105 object-cover rounded-lg mb-4"
                        />

                        <div className="flex gap-3 overflow-x-auto">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setActive(index)}
                                    className={`w-20 h-24 object-cover rounded cursor-pointer border ${
                                        active === index
                                            ? "border-green-900"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-serif mb-2">
                            {product.name}
                        </h1>

                        <p className="text-lg mb-4">Rs. {product.price}</p>
                        <p className="text-sm text-gray-700 mb-6">
                            {product.shortDesc}
                        </p>

                        {/* QTY */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex border">
                                <button
                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                    className="px-4 py-2"
                                >
                                    −
                                </button>
                                <span className="px-4 py-2">{qty}</span>
                                <button
                                    onClick={() => setQty(qty + 1)}
                                    className="px-4 py-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button className="w-full md:w-auto bg-green-900 text-white px-10 py-3 hover:bg-green-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* LONG DESCRIPTION */}
                <div className="mt-16 max-w-3xl">
                    <h2 className="text-xl font-medium mb-4">
                        Product Description
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {product.longDesc}
                    </p>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-20">
                    <h2 className="text-xl font-medium mb-6">
                        You May Also Like
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((item) => (
                            <div key={item.id} className="group cursor-pointer">
                                <img
                                    src={item.image}
                                    className="h-64 w-full object-cover rounded-lg mb-3 group-hover:scale-105 transition"
                                />
                                <p className="text-sm">{item.name}</p>
                                <p className="text-sm text-gray-600">
                                    Rs. {item.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleView;
