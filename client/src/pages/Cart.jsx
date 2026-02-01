import React, { useState } from "react";

const initialCart = [
    {
        id: 1,
        name: "Teal Blue Silk Kurti",
        price: 1295,
        image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
        qty: 1,
    },
    {
        id: 2,
        name: "Red A-Line Kurti",
        price: 1495,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        qty: 2,
    },
];

const Cart = () => {
    const [cart, setCart] = useState(initialCart);

    const updateQty = (id, change) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + change) }
                    : item,
            ),
        );
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0,
    );

    return (
        <section className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif mb-10">
                    Your Cart
                </h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 bg-white p-4 rounded-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-32 object-cover rounded"
                                    />

                                    <div className="flex-1">
                                        <h2 className="text-sm md:text-base font-medium">
                                            {item.name}
                                        </h2>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Rs. {item.price}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            {/* Quantity */}
                                            <div className="flex items-center border">
                                                <button
                                                    onClick={() =>
                                                        updateQty(item.id, -1)
                                                    }
                                                    className="px-3 py-1"
                                                >
                                                    −
                                                </button>
                                                <span className="px-4">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQty(item.id, 1)
                                                    }
                                                    className="px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                                className="text-xs text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item Total */}
                                    <div className="text-sm font-medium">
                                        Rs. {item.price * item.qty}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="bg-white p-6 rounded-lg h-fit">
                            <h3 className="text-lg font-medium mb-4">
                                Order Summary
                            </h3>

                            <div className="flex justify-between text-sm mb-2">
                                <span>Subtotal</span>
                                <span>Rs. {subtotal}</span>
                            </div>

                            <div className="flex justify-between text-sm mb-4">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>

                            <div className="flex justify-between font-semibold text-base mb-6">
                                <span>Total</span>
                                <span>Rs. {subtotal}</span>
                            </div>

                            <button className="w-full bg-green-900 text-white py-3 hover:bg-green-800 transition">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
