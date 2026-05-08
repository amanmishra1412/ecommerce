import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { deleteProd } from "../../services/product.service";
import Swal from "sweetalert2";

const Products = () => {
    const { products } = useProduct();

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Delete Product?",
                text: "This action cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await deleteProd(id);
                Swal.fire("Deleted!", "Product has been removed.", "success");
                setProducts(products.filter((p) => p._id !== id));
            }
        } catch (err) {
            Swal.fire("Error", "Failed to delete product", "error");
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                <Link
                    to="../create-product"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition shadow-sm disabled:opacity-50"
                >
                    <i className="ri-add-fill"></i> Add Product
                </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                        <tr>
                            <th className="p-4 font-semibold">Product Name</th>
                            <th className="p-4 font-semibold text-center">
                                Price
                            </th>
                            <th className="p-4 font-semibold text-center">
                                Stock
                            </th>
                            <th className="p-4 font-semibold text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {products.map((item, idx) => (
                            <tr
                                key={idx}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="p-4 flex items-center gap-2 text-gray-700 font-medium">
                                    <img
                                        src={item.images[0]}
                                        width={30}
                                        height={30}
                                        className="rounded-full w-[30px] h-[30px]"
                                        alt={item.slug}
                                    />
                                    {item.name}
                                </td>
                                <td className="p-4 text-center text-gray-600">
                                    ₹{item.price}
                                </td>
                                <td className="p-4 text-center">
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                                        {item.stock} units
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <Link
                                            to={`../update-product/${item._id}`}
                                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                        >
                                            <i className="ri-edit-line"></i>{" "}
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                            className="text-red-500 hover:text-red-700 flex items-center gap-1"
                                        >
                                            <i className="ri-delete-bin-line"></i>{" "}
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
