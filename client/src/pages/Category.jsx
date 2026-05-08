import React from "react";

const categories = [
    {
        title: "CCTV Cameras",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop",
        icon: "ri-camera-lens-line",
        count: "25+ Products",
    },
    {
        title: "Access Control",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
        icon: "ri-lock-password-line",
        count: "15+ Products",
    },
    {
        title: "Intruder Alarm",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        icon: "ri-alarm-warning-line",
        count: "10+ Products",
    },
    {
        title: "Video Door Phone",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
        icon: "ri-phone-line",
        count: "12+ Products",
    },
];

const Category = () => {
    return (
        <section className="py-24 bg-[#191F2D] relative overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#165DAE]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#165DAE]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Heading Section */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#165DAE]/20 border border-[#165DAE]/30 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
                        <span className="text-[#165DAE] font-bold uppercase tracking-[0.2em] text-[10px]">
                            Integrated Security
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-5 tracking-tight">
                        Security Solutions{" "}
                        <span className="text-[#165DAE]">Categories</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore our specialized categories tailored for
                        comprehensive protection of your assets and peace of
                        mind.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 transition-all duration-500 hover:border-[#165DAE]/50 shadow-2xl"
                        >
                            {/* Background Image with Zoom Effect */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-110 opacity-60 group-hover:opacity-80"
                            />

                            {/* Blue Gradient Overlay - Pehle se thoda zyada "Deep Blue" touch */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#191F2D] via-[#191F2D]/40 to-transparent opacity-90 group-hover:from-[#165DAE]/80 transition-all duration-500"></div>

                            {/* Glass Count Badge */}
                            <div className="absolute top-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full">
                                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                                    {cat.count}
                                </span>
                            </div>

                            {/* Content Wrapper */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform transition-all duration-500 group-hover:-translate-y-4">
                                {/* Icon with Glowing Effect */}
                                <div className="w-16 h-16 rounded-[1.25rem] bg-[#165DAE] border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(22,93,174,0.4)] group-hover:shadow-[0_0_30px_rgba(22,93,174,0.6)] group-hover:scale-110 transition-all duration-500">
                                    <i
                                        className={`${cat.icon} text-white text-3xl`}
                                    ></i>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-2xl font-black mb-3 tracking-tight">
                                    {cat.title}
                                </h3>

                                {/* Action Link */}
                                <div className="flex items-center gap-3">
                                    <div className="h-[2px] w-8 bg-[#165DAE] transition-all duration-500 group-hover:w-12"></div>
                                    <span className="text-white font-bold text-xs uppercase tracking-widest group-hover:text-[#165DAE] transition-colors">
                                        View Collection
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#191F2D] transition-all duration-500">
                                        <i className="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
