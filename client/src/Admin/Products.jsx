const AdminProducts = () => {
    return (
        <>
            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-semibold">Products</h1>
                <button className="bg-gray-900 text-white px-4 py-2 text-sm">
                    + Add Product
                </button>
            </div>

            <div className="bg-white rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Stock</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2, 3].map((item) => (
                            <tr key={item} className="border-t">
                                <td className="p-3">Kurti Name</td>
                                <td className="p-3 text-center">₹1295</td>
                                <td className="p-3 text-center">In Stock</td>
                                <td className="p-3 text-center space-x-2">
                                    <button className="text-blue-600">
                                        Edit
                                    </button>
                                    <button className="text-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminProducts;
