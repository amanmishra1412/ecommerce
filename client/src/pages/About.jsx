import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main className="bg-[#F2F3F4] min-h-screen">
            {/* --- 1. PREMIUM BRAND HERO --- */}
            <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover shadow-inner"
                    alt="Advance Security Solution"
                />
                {/* Dark Blue Overlay for Header Visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#191F2D]/95 via-[#191F2D]/70 to-transparent"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-[#165DAE]/20 border border-[#165DAE]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                        <i className="ri-shield-check-fill text-[#165DAE]"></i>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                            Authorized Dealer & Installer
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                        ADVANCE <span className="text-[#165DAE]">SECURITY</span>{" "}
                        <br /> SOLUTIONS
                    </h1>
                    <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Leading experts in CCTV Surveillance, Intruder Alarms,
                        EPABX, and Smart Water Management Systems. Protecting
                        homes and businesses across the region.
                    </p>
                </div>
            </section>

            {/* --- 2. THE BUSINESS STORY --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-6 bg-[#165DAE]/5 rounded-[3rem] -rotate-2"></div>
                        <img
                            src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop"
                            className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-white"
                            alt="Our Tech Expertise"
                        />
                        {/* Floating Experience Box */}
                        <div className="absolute -bottom-8 -left-8 bg-[#165DAE] p-8 rounded-[2rem] shadow-xl z-20 text-white">
                            <p className="text-4xl font-black italic">
                                Trusted
                            </p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 text-nowrap">
                                By Local Businesses
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-[#191F2D] leading-tight">
                            One-Stop Hub For <br />
                            <span className="text-[#165DAE]">
                                Safety & Automation
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Advance Security Solution is dedicated to providing
                            high-quality surveillance and communication
                            hardware. From standard CCTV setups to advanced{" "}
                            <strong>Auto Pump & Water Level Systems</strong>, we
                            ensure your premises are smart, secure, and
                            efficient.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-bold text-[#191F2D]">
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <i className="ri-checkbox-circle-fill text-[#165DAE] text-xl"></i>{" "}
                                High-Definition Surveillance
                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <i className="ri-checkbox-circle-fill text-[#165DAE] text-xl"></i>{" "}
                                Smart Water Control
                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <i className="ri-checkbox-circle-fill text-[#165DAE] text-xl"></i>{" "}
                                Secure EPABX Networking
                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <i className="ri-checkbox-circle-fill text-[#165DAE] text-xl"></i>{" "}
                                Video Door Security
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. PRODUCT ECOSYSTEM (Your Google Listings) --- */}
            <section className="py-24 bg-[#191F2D] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h3 className="text-3xl font-black mb-4">
                            Complete Safety Ecosystem
                        </h3>
                        <p className="text-gray-400">
                            Everything you need to secure and automate your
                            life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Surveillance Systems",
                                items: "CCTV Cameras, DVR, NVR, IP Cameras",
                                icon: "ri-camera-3-fill",
                            },
                            {
                                title: "Intrusion & Alarms",
                                items: "Motion Sensors, Burglar Alarms, Sirens",
                                icon: "ri-alarm-warning-fill",
                            },
                            {
                                title: "Water Management",
                                items: "Water Level Controllers, Auto Pump Systems",
                                icon: "ri-drop-fill",
                            },
                            {
                                title: "Communication",
                                items: "EPABX Systems, Intercom, Office Phones",
                                icon: "ri-phone-fill",
                            },
                            {
                                title: "Door Security",
                                items: "Video Door Phones, Smart Locks, Door Intercoms",
                                icon: "ri-door-lock-fill",
                            },
                            {
                                title: "Installation Services",
                                items: "Expert Wiring, Site Survey, Configuration",
                                icon: "ri-tools-fill",
                            },
                        ].map((product, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-[#165DAE] transition-all duration-500 shadow-xl"
                            >
                                <div className="w-14 h-14 bg-[#165DAE]/20 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                    <i
                                        className={`${product.icon} text-3xl text-[#165DAE] group-hover:text-white`}
                                    ></i>
                                </div>
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">
                                    {product.title}
                                </h4>
                                <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed">
                                    {product.items}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. GOOGLE MAPS / CONTACT CTA --- */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-black text-[#191F2D] mb-4 uppercase tracking-tighter">
                    Visit Our Business
                </h2>
                <p className="text-gray-500 mb-10">
                    We are highly rated on Google for our quality service and
                    support. Come see us or call for a site visit.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-[#165DAE] text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-[#165DAE]/30 hover:-translate-y-1 transition-all uppercase text-sm">
                        Call +91-92505-31983
                    </button>
                    <button className="bg-white text-[#191F2D] border border-gray-200 px-8 py-4 rounded-2xl font-black shadow-md hover:bg-gray-50 transition-all uppercase text-sm">
                        Locate On Google Maps
                    </button>
                </div>
            </section>
        </main>
    );
};

export default About;
