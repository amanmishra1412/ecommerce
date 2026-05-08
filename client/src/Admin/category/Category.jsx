import { Link } from "react-router-dom";
// import { useCategory } from "../../context/CategoryContext"; // Assuming this exists
// import { deleteCat } from "../../services/category.service"; // Assuming this exists
import Swal from "sweetalert2";

const Category = () => {
    // Destructure categories and the settre to update UI after deletion
    // const { categories, setCategories } = useCategory();

    // const handleDelete = async (id) => {
    //     try {
    //         const result = await Swal.fire({
    //             title: "Delete Category?",
    //             text: "Removing this might affect products linked to it.",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#d33",
    //             cancelButtonColor: "#3085d6",
    //             confirmButtonText: "Yes, delete it!",
    //         });

    //         if (result.isConfirmed) {
    //             await deleteCat(id);
    //             Swal.fire("Deleted!", "Category has been removed.", "success");
    //             // Update local state to remove the item from the table
    //             setCategories(categories.filter((c) => c._id !== id));
    //         }
    //     } catch (err) {
    //         Swal.fire("Error", "Failed to delete category", "error");
    //     }
    // };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
                <Link
                    to="../create-category"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition shadow-sm"
                >
                    <i className="ri-add-fill"></i> Add Category
                </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                        <tr>
                            <th className="p-4 font-semibold">Category Name</th>
                            <th className="p-4 font-semibold">Slug</th>
                            <th className="p-4 font-semibold text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {[1,2,3].map((item) => (
                            <tr
                                key={item._id}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="p-4 flex items-center gap-3 text-gray-700 font-medium">
                                    {/* Optional: Add category icon or thumbnail if you have them */}
                                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                        <i className="ri-folder-line text-gray-500"></i>
                                    </div>
                                    {item.name}
                                </td>
                                <td className="p-4 text-gray-600">
                                    <span className="text-xs font-mono bg-gray-50 px-2 py-1 rounded">
                                        /{item.slug}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <Link
                                            to={`../update-category/${item._id}`}
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
                        {[1,2].length === 0 && (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="p-8 text-center text-gray-400"
                                >
                                    No categories found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;
