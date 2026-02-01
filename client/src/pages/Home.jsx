import React from "react";
import Category from "./Category";

const Home = () => {
    return (
        <>
            <section
                className="relative h-[calc(100vh-80px)] w-full bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1607082349566-1870e9a1bcd5')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-xl sm:max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Let ’em For the Festivities
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                            Shop the Festive Collection
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                                Shop Festive
                            </button>

                            <button className="w-full sm:w-auto px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition">
                                Shop New
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Category />
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-6">Featured</h2>

                    <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="min-w-[220px] md:min-w-0"
                            >
                                <img className="rounded-lg mb-2" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" />
                                <p className="text-sm">Kurti Name</p>
                                <p className="text-sm text-gray-600">
                                    From Rs. 1,295
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Festive", "Accessories", "Dresses", "Topwear"].map(
                            (cat) => (
                                <div className="group cursor-pointer">
                                    <img
                                        className="rounded-lg mb-2"
                                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                                    />
                                    <p className="text-sm group-hover:underline">
                                        {cat} →
                                    </p>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-xl font-semibold mb-6">
                        Sorted Collections
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Comfy Cottons",
                            "A-Line Fits",
                            "Capes & Layers",
                            "Collared Kurtis",
                        ].map((item) => (
                            <div key={item}>
                                <img className="rounded-lg mb-2" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" />
                                <p className="text-sm">{item} →</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
