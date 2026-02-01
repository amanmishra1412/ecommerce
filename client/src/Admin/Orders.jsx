const AdminOrders = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold mb-6">Orders</h1>

            <div className="bg-white rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Order ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2].map((order) => (
                            <tr key={order} className="border-t">
                                <td className="p-3">#ORD{order}23</td>
                                <td className="p-3 text-center">Aarav</td>
                                <td className="p-3 text-center">₹2590</td>
                                <td className="p-3 text-center text-green-600">
                                    Delivered
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminOrders;
