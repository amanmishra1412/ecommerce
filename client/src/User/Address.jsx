import React from "react";

const Address = () => {
    return (
        <div>
            <h2 className="text-xl font-medium mb-4">Saved Addresses</h2>

            <div className="border rounded-lg p-4 text-sm mb-4">
                <p className="font-medium">Home</p>
                <p>221B Baker Street</p>
                <p>Mumbai, Maharashtra</p>
                <p>India - 400001</p>
            </div>

            <button className="border px-4 py-2 text-sm">
                + Add New Address
            </button>
        </div>
    );
};

export default Address;
