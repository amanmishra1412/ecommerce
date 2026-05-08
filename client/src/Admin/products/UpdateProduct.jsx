import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getSingleProduct, updateProd } from "../../services/product.service";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: "",
        isActive: true,
        images: [],
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getSingleProduct(id);
                const product = data.product; // Adjust based on your API response structure

                setFormData({
                    name: product.name || "",
                    price: product.price || "",
                    stock: product.stock || "",
                    category: product.category || "",
                    description: product.description || "",
                    isActive: product.isActive,
                    // Map existing images from server
                    images: product.images.map((img) => ({
                        preview: img.url || img, // handle if images is array of strings or objects
                        isExisting: true,
                    })),
                });
            } catch (err) {
                Swal.fire("Error", "Could not fetch product details", "error");
                navigate("/products");
            } finally {
                setFetching(false);
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            isExisting: false,
        }));

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async () => {
        try {
            if (
                !formData.name.trim() ||
                !formData.price ||
                !formData.category
            ) {
                return Swal.fire(
                    "Warning",
                    "Please fill required fields",
                    "warning",
                );
            }

            setLoading(true);
            const submitData = new FormData();
            submitData.append("name", formData.name);
            submitData.append("price", formData.price);
            submitData.append("stock", formData.stock);
            submitData.append("category", formData.category);
            submitData.append("description", formData.description);
            submitData.append("isActive", formData.isActive);

            // Separate existing images vs new files
            const existingImages = formData.images
                .filter((img) => img.isExisting)
                .map((img) => img.preview);

            submitData.append("existingImages", JSON.stringify(existingImages));

            // Append new files
            formData.images.forEach((img) => {
                if (!img.isExisting) {
                    submitData.append("images", img.file);
                }
            });

            await updateProd(id, submitData);

            Swal.fire({
                icon: "success",
                title: "Product Updated",
                timer: 2000,
                showConfirmButton: false,
            });
            navigate("/products");
        } catch (err) {
            Swal.fire("Error", err?.message || "Update failed", "error");
        } finally {
            setLoading(false);
        }
    };

    if (fetching)
        return <div className="p-10 text-center">Loading product data...</div>;

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Edit Product
                    </h1>
                    <p className="text-sm text-gray-500">
                        Modify the details of your product.
                    </p>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 shadow-sm"
                    >
                        {loading ? "Saving..." : "Update Product"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* General Info */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-medium mb-4">
                            General Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    rows="5"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Management */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-medium mb-4">
                            Product Images
                        </h2>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                        <div
                            onClick={() => fileInputRef.current.click()}
                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 transition"
                        >
                            Click to add more images
                        </div>

                        {formData.images.length > 0 && (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                                {formData.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square"
                                    >
                                        <img
                                            src={img.preview}
                                            alt="preview"
                                            className={`w-full h-full object-cover rounded-lg border ${img.isExisting ? "border-green-200" : "border-blue-200"}`}
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg"
                                        >
                                            ✕
                                        </button>
                                        {img.isExisting && (
                                            <span className="absolute bottom-1 left-1 bg-green-500 text-[10px] text-white px-1 rounded">
                                                Saved
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-medium mb-4">
                            Organization
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Kurtis">Kurtis</option>
                                    <option value="Sarees">Sarees</option>
                                    <option value="Accessories">
                                        Accessories
                                    </option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">
                                    Active Status
                                </span>
                                <input
                                    type="checkbox"
                                    name="isActive"
                                    checked={formData.isActive}
                                    onChange={handleChange}
                                    className="w-5 h-5 accent-blue-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-medium mb-4">Inventory</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Base Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Stock Quantity
                                </label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
