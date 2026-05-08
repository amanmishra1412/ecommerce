import React, { useState } from "react";
import { loginControl, signupControl } from "../services/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!isLogin && formData.password !== formData.confirmPassword) {
            setLoading(false);
            return Swal.fire({
                icon: "warning",
                title: "Security Alert",
                text: "Passwords do not match!",
                confirmButtonColor: "#165DAE",
            });
        }

        try {
            if (isLogin) {
                const res = await loginControl(formData);
                Swal.fire({
                    icon: "success",
                    title: "Access Granted",
                    text: res.data.message,
                    timer: 1500,
                    showConfirmButton: false,
                }).then(() => {
                    setUser(res.data.userData);
                    navigate("/", { replace: true });
                });
            } else {
                const res = await signupControl(formData);
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                    text: "Welcome to Advance Security Solution",
                    confirmButtonColor: "#165DAE",
                }).then(() => {
                    setIsLogin(true);
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Authentication Failed",
                text: err.response?.data?.message || "Internal Security Error",
                confirmButtonColor: "#191F2D",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2F3F4] px-4 py-12">
            <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white">
                {/* Left Side: Branding/Visual */}
                <div className="hidden md:flex md:w-1/2 bg-[#191F2D] p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#165DAE]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-white p-2 rounded-lg">
                                <i className="ri-shield-flash-fill text-[#165DAE] text-2xl"></i>
                            </div>
                            <span className="text-white font-black text-xl tracking-tighter">
                                ADVANCE
                                <span className="text-[#165DAE]">SECURITY</span>
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-white leading-tight">
                            Secure Access to <br />
                            <span className="text-[#165DAE]">
                                Your Smart Dashboard
                            </span>
                        </h2>
                        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                            Manage your surveillance, access controls, and
                            alarms from one professional portal.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 text-white/50 text-xs">
                        <div className="flex items-center gap-1">
                            <i className="ri-lock-2-line text-[#165DAE]"></i>{" "}
                            256-bit SSL
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="ri-shield-check-line text-[#165DAE]"></i>{" "}
                            ISO Certified
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10">
                        <h2 className="text-2xl font-black text-[#191F2D]">
                            {isLogin ? "Welcome Back" : "Security Signup"}
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">
                            {isLogin
                                ? "Enter your credentials to access your account."
                                : "Create your business or residential security profile."}
                        </p>
                    </div>

                    <form onSubmit={handleForm} className="space-y-5">
                        {!isLogin && (
                            <div className="relative">
                                <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm outline-none focus:border-[#165DAE] focus:ring-4 focus:ring-[#165DAE]/5 transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm outline-none focus:border-[#165DAE] focus:ring-4 focus:ring-[#165DAE]/5 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <i className="ri-lock-password-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-12 py-3 text-sm outline-none focus:border-[#165DAE] focus:ring-4 focus:ring-[#165DAE]/5 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#165DAE]"
                            >
                                <i
                                    className={
                                        showPassword
                                            ? "ri-eye-off-line"
                                            : "ri-eye-line"
                                    }
                                ></i>
                            </button>
                        </div>

                        {!isLogin && (
                            <div className="relative">
                                <i className="ri-shield-keyhole-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm outline-none focus:border-[#165DAE] focus:ring-4 focus:ring-[#165DAE]/5 transition-all"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-xs font-bold text-[#165DAE] hover:underline uppercase tracking-tighter"
                                >
                                    Encrypted Recovery?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl font-black text-white text-sm uppercase tracking-widest transition-all shadow-lg ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#165DAE] hover:bg-[#124c8d] shadow-[#165DAE]/20 active:scale-95"
                            }`}
                        >
                            {loading
                                ? "Verifying..."
                                : isLogin
                                  ? "Authorize Login"
                                  : "Initialize Account"}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-500">
                            {isLogin
                                ? "New to the platform?"
                                : "Already registered?"}{" "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-[#165DAE] font-black hover:underline"
                            >
                                {isLogin ? "SIGN UP" : "LOGIN"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
