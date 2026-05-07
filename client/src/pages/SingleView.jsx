import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../services/product.service";

const SingleView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [active, setActive] = useState(0);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await getSingleProduct(id);
                setProduct(data.product);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl">Loading...</h1>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl text-red-500">Product Not Found</h1>
            </div>
        );
    }

    return (
        <section className="bg-[#f9f3e8] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* IMAGE SECTION */}
                    <div>
                        <img
                            src={
                                product.images?.[active] ||
                                "https://via.placeholder.com/500"
                            }
                            alt={product.name}
                            className="w-full h-[500px] object-cover rounded-lg mb-4"
                        />

                        {/* THUMBNAILS */}
                        <div className="flex gap-3 overflow-x-auto">
                            {product.images?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="product"
                                    onClick={() => setActive(index)}
                                    className={`w-20 h-24 object-cover rounded cursor-pointer border ${
                                        active === index
                                            ? "border-green-900"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-serif mb-2">
                            {product.name}
                        </h1>

                        <p className="text-lg mb-4">
                            Rs. {product.price?.toLocaleString()}
                        </p>

                        <p className="text-sm text-gray-700 mb-6">
                            {product.shortDesc || product.description}
                        </p>

                        {/* QTY */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex border">
                                <button
                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                    className="px-4 py-2"
                                >
                                    −
                                </button>

                                <span className="px-4 py-2">{qty}</span>

                                <button
                                    onClick={() => setQty(qty + 1)}
                                    className="px-4 py-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4 flex-wrap">
                            <button className="bg-green-900 text-white px-10 py-3 hover:bg-green-800 transition">
                                Add to Cart
                            </button>

                            <button className="border border-black px-10 py-3 hover:bg-black hover:text-white transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-16 max-w-3xl">
                    <h2 className="text-xl font-medium mb-4">
                        Product Description
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-20">
                    <h2 className="text-xl font-medium mb-6">
                        You May Also Like
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {product.relatedProducts?.map((item,idx) => (
                            <Link
                                to={`/collection/${item.slug}`}
                                key={idx}
                                className="group cursor-pointer"
                            >
                                <img
                                    src={item.images?.[0]}
                                    alt={item.name}
                                    className="h-64 w-full object-cover rounded-lg mb-3 group-hover:scale-105 transition"
                                />

                                <p className="text-sm">{item.name}</p>

                                <p className="text-sm text-gray-600">
                                    Rs. {item.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleView;
