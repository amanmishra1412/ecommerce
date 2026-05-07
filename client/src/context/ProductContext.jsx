import React, { createContext, useContext, useEffect, useState } from "react";
import { getProd } from "../services/product.service";

const ProductProvider = createContext();

export const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getProd();

            setProducts(data.product);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductProvider.Provider
            value={{
                products,
                loading,
                error,
                fetchProducts,
            }}
        >
            {children}
        </ProductProvider.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductProvider);
};
