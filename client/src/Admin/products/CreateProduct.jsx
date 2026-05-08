import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { createProd } from "../../services/product.service";

const CreateProduct = () => {
    const fileInputRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: "",
        isActive: true,
        images: [],
    });

    // Handle text/select inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    };

    // Remove image
    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    // Submit form
    const handleSubmit = async () => {
        try {
            // Validation
            if (!formData.name.trim()) {
                return Swal.fire({
                    icon: "warning",
                    title: "Product name required",
                });
            }

            if (!formData.price) {
                return Swal.fire({
                    icon: "warning",
                    title: "Price is required",
                });
            }

            if (!formData.category) {
                return Swal.fire({
                    icon: "warning",
                    title: "Category is required",
                });
            }

            if (formData.images.length === 0) {
                return Swal.fire({
                    icon: "warning",
                    title: "Please upload at least one image",
                });
            }

            setLoading(true);

            // Create FormData
            const submitData = new FormData();

            submitData.append("name", formData.name);
            submitData.append("price", formData.price);
            submitData.append("stock", formData.stock);
            submitData.append("category", formData.category);
            submitData.append("description", formData.description);
            submitData.append("isActive", formData.isActive);

            // Append images
            formData.images.forEach((img) => {
                submitData.append("images", img.file);
            });

            // API call
            const res = await createProd(submitData);

            Swal.fire({
                icon: "success",
                title: "Product Created",
                text: res?.message || "Product added successfully",
                timer: 2000,
                showConfirmButton: false,
            });

            // Reset form
            setFormData({
                name: "",
                price: "",
                stock: "",
                category: "",
                description: "",
                isActive: true,
                images: [],
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: err?.message || "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Create New Product
                    </h1>

                    <p className="text-sm text-gray-500">
                        Fill in the details to list a new item in your store.
                    </p>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => window.history.back()}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition shadow-sm disabled:opacity-50"
                    >
                        {loading ? "Publishing..." : "Publish Product"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left */}
                <div className="lg:col-span-2 space-y-6">
                    {/* General */}
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
                                    placeholder="e.g. Designer Silk Kurti"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
                                    placeholder="Describe the material..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Images */}
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
                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer"
                        >
                            Click to upload images
                        </div>

                        {formData.images.length > 0 && (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                                {formData.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative group aspect-square"
                                    >
                                        <img
                                            src={img.preview}
                                            alt="preview"
                                            className="w-full h-full object-cover rounded-lg border"
                                        />

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeImage(index);
                                            }}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right */}
                <div className="space-y-6">
                    {/* Category */}
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

                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-gray-700">
                                    Active Status
                                </span>

                                <input
                                    type="checkbox"
                                    name="isActive"
                                    checked={formData.isActive}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Inventory */}
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
                                    placeholder="0.00"
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
                                    placeholder="0"
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

export default CreateProduct;
