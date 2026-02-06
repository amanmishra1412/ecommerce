import React from "react";

const categories = [
    {
        title: "Men",
        image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
    },
    {
        title: "Women",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
        title: "Kids",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
];

const Category = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600">
                        Find your perfect festive look
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group relative h-44 sm:h-56 lg:h-64 rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                            {/* Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                                    {cat.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
