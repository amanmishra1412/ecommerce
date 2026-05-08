import React from "react";

const Contact = () => {
    return (
        <main className="bg-[#F2F3F4] min-h-screen">
            <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Contact Advance Security"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#191F2D]/95 via-[#191F2D]/80 to-transparent"></div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
                    <span className="text-[#165DAE] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                        Available 24/7 For Support
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4">
                        GET IN <span className="text-[#165DAE]">TOUCH</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        Have a security concern? Our experts are just a call or
                        a visit away. Connect with us for high-quality
                        installation and service.
                    </p>
                </div>
            </section>

            <section className="relative z-20 -mt-20 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white flex flex-col items-center text-center group hover:bg-[#165DAE] transition-all duration-500">
                            <div className="w-16 h-16 bg-[#165DAE]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                <i className="ri-phone-fill text-3xl text-[#165DAE] group-hover:text-white"></i>
                            </div>
                            <h3 className="text-xl font-black text-[#191F2D] group-hover:text-white mb-2">
                                Call Experts
                            </h3>
                            <p className="text-gray-500 group-hover:text-white/70 text-sm mb-6">
                                Immediate assistance for sales & support.
                            </p>
                            <a
                                href="tel:+919250531983"
                                className="text-lg font-black text-[#165DAE] group-hover:text-white tracking-tighter italic"
                            >
                                +91 9250531983
                            </a>
                        </div>

                        {/* Visit Us */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white flex flex-col items-center text-center group hover:bg-[#165DAE] transition-all duration-500">
                            <div className="w-16 h-16 bg-[#165DAE]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                <i className="ri-map-pin-2-fill text-3xl text-[#165DAE] group-hover:text-white"></i>
                            </div>
                            <h3 className="text-xl font-black text-[#191F2D] group-hover:text-white mb-2">
                                Our Office
                            </h3>
                            <p className="text-gray-500 group-hover:text-white/70 text-sm mb-6">
                                Visit us for live product demonstrations.
                            </p>
                            <address className="not-italic text-sm font-bold text-[#191F2D] group-hover:text-white leading-relaxed">
                                F-10 RC Plaza Kirari New Delhi
                            </address>
                        </div>

                        {/* WhatsApp Support */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white flex flex-col items-center text-center group hover:bg-[#25D366] transition-all duration-500">
                            <div className="w-16 h-16 bg-[#25D366]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                <i className="ri-whatsapp-fill text-3xl text-[#25D366] group-hover:text-white"></i>
                            </div>
                            <h3 className="text-xl font-black text-[#191F2D] group-hover:text-white mb-2">
                                WhatsApp
                            </h3>
                            <p className="text-gray-500 group-hover:text-white/70 text-sm mb-6">
                                Send us photos of your site for a quote.
                            </p>
                            <a
                                href="https://wa.me/919250531983"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#191F2D] text-white px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] group-hover:bg-white group-hover:text-[#25D366] transition-all"
                            >
                                CHAT NOW
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative bg-[#191F2D]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11684.447567885345!2d77.04265058040617!3d28.69366285057838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d055a00aebb13%3A0xeef50fc092362c53!2sAdvance%20security%20solution!5e1!3m2!1sen!2sin!4v1778247007809!5m2!1sen!2sin"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 outline-none border-none"
                            allowFullScreen=""
                            loading="lazy"
                            title="Advance Security Google Maps Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F2F3F4]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-16 gap-10">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 text-[#165DAE] font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                                <i className="ri-time-line"></i> Operational
                                Timing
                            </div>
                            <h4 className="text-[#191F2D] text-4xl font-black tracking-tighter leading-none">
                                When Can You <br />
                                <span className="text-[#165DAE]">
                                    Visit Us?
                                </span>
                            </h4>
                        </div>

                        <div className="w-full md:w-auto min-w-[320px] space-y-4">
                            <div className="flex justify-between items-center p-5 rounded-2xl bg-white shadow-sm border border-gray-100 group hover:border-[#165DAE] transition-all">
                                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                    Monday - Saturday
                                </span>
                                <span className="text-[#191F2D] font-black text-sm tracking-tight italic">
                                    09:00 AM - 08:00 PM
                                </span>
                            </div>

                            <div className="flex justify-between items-center p-5 rounded-2xl bg-white shadow-sm border border-gray-100 group hover:border-[#165DAE] transition-all">
                                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                    Sunday
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#165DAE] rounded-full animate-pulse"></span>
                                    <span className="text-[#165DAE] font-black text-sm tracking-tight uppercase italic text-[11px]">
                                        On Call Support
                                    </span>
                                </div>
                            </div>

                            <p className="text-right text-[10px] text-gray-400 font-medium">
                                *Support line available 24/7 for emergency
                                security alerts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
