import React from "react";

const Orders = () => {
    return (
        <div>
            <h2 className="text-xl font-medium mb-4">My Orders</h2>

            <div className="space-y-4 text-sm">
                {[1, 2].map((order) => (
                    <div
                        key={order}
                        className="border rounded-lg p-4 flex justify-between"
                    >
                        <div>
                            <p className="font-medium">Order #SAK{order}234</p>
                            <p className="text-gray-600">
                                Placed on Aug 12, 2025
                            </p>
                        </div>

                        <div className="text-right">
                            <p>Rs. 2,590</p>
                            <span className="text-green-700 text-xs">
                                Delivered
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
