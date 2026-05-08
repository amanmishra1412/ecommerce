import React from "react";
import Category from "./Category"; // Assuming this is your category grid

const Home = () => {
    return (
        <div className="font-sans text-[#191F2D] overflow-x-hidden">
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#191F2D] via-[#191F2D]/90 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                            Next-Gen{" "}
                            <span className="text-[#165DAE]">Surveillance</span>{" "}
                            <br />
                            For Total Peace of Mind
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                            Empowering homes and enterprises with AI-driven
                            CCTV, biometric access, and integrated smart
                            security ecosystems. Professional installation, 24/7
                            reliability.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="px-8 py-4 bg-[#165DAE] hover:bg-[#0e4481] text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#165DAE]/30">
                                Get Free Consultation
                                <i className="ri-arrow-right-up-line text-xl"></i>
                            </button>
                            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-xl font-bold backdrop-blur-sm transition-all">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-16 bg-[#F2F3F4]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#191F2D] mb-4">
                                Comprehensive{" "}
                                <span className="text-[#165DAE]">
                                    Protection
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                From single-camera setups to enterprise-level
                                integrated security grids.
                            </p>
                        </div>
                        <button className="text-[#165DAE] font-bold flex items-center gap-2 hover:underline">
                            View All Services{" "}
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "ri-camera-3-line",
                                title: "CCTV & DVR/NVR",
                                desc: "4K Resolution, ColorNV tech, and remote cloud monitoring.",
                            },
                            {
                                icon: "ri-fingerprint-line",
                                title: "Access Control",
                                desc: "Biometric, FaceID & RFID solutions for restricted areas.",
                            },
                            {
                                icon: "ri-door-lock-box-line",
                                title: "Video Door Phones",
                                desc: "Screen your visitors with smart mobile-integrated intercoms.",
                            },
                            {
                                icon: "ri-broadcast-line",
                                title: "Intruder Alarms",
                                desc: "Motion sensors and glass-break detectors with instant alerts.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-[#F2F3F4] group-hover:bg-[#165DAE] rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                    <i
                                        className={`${item.icon} text-3xl text-[#165DAE] group-hover:text-white`}
                                    ></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Category />

            {/* Why Choose Us - Image & Content */}
            <section className="py-24 bg-[#F2F3F4]">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Images & Experience Badge */}
                    <div className="relative">
                        {/* Design Accent Box */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#165DAE] rounded-3xl z-0 opacity-20"></div>

                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                            alt="Security Expert"
                            className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-white"
                        />

                        {/* Experience Floating Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-gray-100">
                            <p className="text-[#165DAE] text-5xl font-black italic leading-none mb-1">
                                10+ Years
                            </p>
                            <p className="text-[#191F2D] font-bold tracking-tight uppercase text-xs">
                                Of Industry Excellence
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#165DAE]/10 px-4 py-2 rounded-full mb-6">
                            <i className="ri-shield-star-line text-[#165DAE]"></i>
                            <span className="text-[#165DAE] text-xs font-bold uppercase tracking-widest">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#191F2D] mb-8 leading-tight">
                            Trust The{" "}
                            <span className="text-[#165DAE]">
                                Professionals
                            </span>{" "}
                            <br />
                            In Security.
                        </h2>

                        <ul className="space-y-8">
                            {[
                                {
                                    t: "Expert Installation",
                                    d: "Our certified engineers perform detailed site surveys to ensure 100% coverage with zero blind spots.",
                                    icon: "ri-tools-line",
                                },
                                {
                                    t: "Premium Hardware",
                                    d: "We are authorized partners of global leaders like Hikvision, CP Plus, and Dahua for genuine products.",
                                    icon: "ri-cpu-line",
                                },
                                {
                                    t: "Real-time Support",
                                    d: "Get instant 24/7 technical assistance and priority maintenance for uninterrupted protection.",
                                    icon: "ri-customer-service-2-line",
                                },
                            ].map((feature, idx) => (
                                <li key={idx} className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white group-hover:bg-[#165DAE] shadow-lg rounded-2xl flex items-center justify-center transition-all duration-300">
                                        <i
                                            className={`${feature.icon} text-2xl text-[#165DAE] group-hover:text-white transition-colors`}
                                        ></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#191F2D] mb-1">
                                            {feature.t}
                                        </h4>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {feature.d}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
