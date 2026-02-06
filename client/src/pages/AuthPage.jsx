import React, { useState } from "react";
import { loginControl, signupControl } from "../services/auth.service";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

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
        if (isLogin) {
            try {
                const data = await loginControl(formData);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const data = await signupControl(formData);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {isLogin ? "Login Account" : "Create Account"}
                </h2>
                <p className="text-center text-gray-500 text-sm mt-1 mb-6">
                    {isLogin
                        ? "Login to continue shopping"
                        : "Join us and start shopping today"}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-5">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-red-50 hover:shadow-md hover:scale-105 transition">
                        <i className="ri-google-fill text-xl text-red-500"></i>
                    </button>

                    <button className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-blue-50 hover:shadow-md hover:scale-105 transition">
                        <i className="ri-facebook-fill text-xl text-blue-600"></i>
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px bg-gray-300 w-full"></div>
                    <span className="text-xs text-gray-400 text-nowrap">
                        or continue with email
                    </span>
                    <div className="h-px bg-gray-300 w-full"></div>
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => {
                        handleForm(e);
                    }}
                    className="space-y-4"
                >
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}

                    {isLogin && (
                        <div className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
                            Forgot password?
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
                    >
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                {/* Toggle */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    {isLogin ? "New here?" : "Already have an account?"}{" "}
                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 font-medium cursor-pointer hover:underline"
                    >
                        {isLogin ? "Create an account" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
