import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#191F2D] text-white border-t border-white/5">
            
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded-md">
                            <i className="ri-shield-flash-fill text-[#165DAE] text-xl"></i>
                        </div>
                        <span className="text-xl font-black tracking-tighter">
                            ADVANCE
                            <span className="text-[#165DAE]">SECURITY SOLUTION</span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Protecting what matters most with cutting-edge
                        surveillance, access control, and smart monitoring
                        systems. Reliable installation & 24/7 technical support
                        across India.
                    </p>
                    <div className="flex gap-4">
                        {[
                            "ri-facebook-box-fill",
                            "ri-linkedin-box-fill",
                            "ri-twitter-x-fill",
                            "ri-youtube-fill",
                        ].map((icon) => (
                            <a
                                key={icon}
                                href="#"
                                className="text-xl text-gray-500 hover:text-[#165DAE] transition-colors"
                            >
                                <i className={icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Product Categories */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-l-4 border-[#165DAE] pl-3">
                        Security Products
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link
                                to="/cctv"
                                className="hover:text-white flex items-center gap-2"
                            >
                                <i className="ri-camera-lens-line"></i> CCTV
                                Cameras
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/access-control"
                                className="hover:text-white flex items-center gap-2"
                            >
                                <i className="ri-fingerprint-2-line"></i> Access
                                Control
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/alarms"
                                className="hover:text-white flex items-center gap-2"
                            >
                                <i className="ri-alarm-warning-line"></i>{" "}
                                Intruder Alarms
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/vdp"
                                className="hover:text-white flex items-center gap-2"
                            >
                                <i className="ri-phone-find-line"></i> Video
                                Door Phones
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support & Company */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-l-4 border-[#165DAE] pl-3">
                        Quick Links
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link to="/about" className="hover:text-white">
                                About the Company
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-white">
                                Installation Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-white">
                                Our Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">
                                Get Technical Help
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info Card */}
                <div className="bg-[#2E4B8F]/10 border border-white/5 p-6 rounded-2xl">
                    <h4 className="font-bold mb-6 text-white">Contact Sales</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <i className="ri-map-pin-2-line text-[#165DAE] text-lg"></i>
                            <p className="text-sm text-gray-400">
                                F-10 RC Plaza Kirari New Delhi 110086
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ri-phone-line text-[#165DAE] text-lg"></i>
                            <p className="text-sm text-gray-400">
                                +91 9250531983
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ri-mail-line text-[#165DAE] text-lg"></i>
                            <p className="text-sm text-gray-400">
                                advancecctv09@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="border-t border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500">
                        © 2026{" "}
                        <span className="text-gray-300">
                            Advance Security Solution
                        </span>
                        . Built for maximum reliability.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                        <a
                            href="#"
                            className="hover:text-[#165DAE] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#165DAE] transition-colors"
                        >
                            Service Warranty
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#165DAE] transition-colors"
                        >
                            Cookie Settings
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#165DAE] transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
