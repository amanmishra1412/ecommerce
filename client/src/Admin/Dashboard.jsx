const AdminDashboard = () => {
    const stats = [
        { title: "Total Orders", value: 124 },
        { title: "Total Products", value: 56 },
        { title: "Users", value: 340 },
        { title: "Revenue", value: "₹1,24,500" },
    ];

    return (
        <>
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <p className="text-xl font-semibold mt-2">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminDashboard;
