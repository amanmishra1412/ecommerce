import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCat, updateCat } from "../../services/category.service";
import { useCategory } from "../../context/CategoryContext";
import Swal from "sweetalert2";

const CreateCategory = ({ isEdit = false }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { categories, refreshCategories } = useCategory();

    const [formData, setFormData] = useState({
        categoryName: "",
        categoryDescription: "",
        image: "",
    });

    useEffect(() => {
        if (isEdit && id) {
            const cat = categories.find((c) => c._id === id);
            if (cat)
                setFormData({
                    categoryName: cat.categoryName,
                    categoryDescription: cat.categoryDescription || "",
                    image: cat.image || "",
                });
        }
    }, [id, isEdit, categories]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await updateCat(id, formData);
            } else {
                await createCat(formData);
            }
            await refreshCategories();
            Swal.fire(
                "Success!",
                `Category ${isEdit ? "updated" : "created"}.`,
                "success",
            );
            navigate("/admin/category");
        } catch (err) {
            Swal.fire("Error", "Something went wrong.", "error");
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {isEdit ? "Update" : "Create"} Category
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Category Name
                    </label>
                    <input
                        className="w-full border p-2 rounded mt-1 outline-none focus:border-black"
                        value={formData.categoryName}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                categoryName: e.target.value,
                            })
                        }
                        placeholder="e.g. Electronics"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        className="w-full border p-2 rounded mt-1 outline-none focus:border-black"
                        value={formData.categoryDescription}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                categoryDescription: e.target.value,
                            })
                        }
                        placeholder="Brief description..."
                        rows="3"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        className="w-full border p-2 rounded mt-1 outline-none focus:border-black"
                        value={formData.image}
                        onChange={(e) =>
                            setFormData({ ...formData, image: e.target.value })
                        }
                        placeholder="https://example.com/img.jpg"
                    />
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                    {isEdit ? "Save Changes" : "Create Category"}
                </button>
            </form>
        </div>
    );
};

export default CreateCategory;
