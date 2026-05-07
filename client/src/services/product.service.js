import api from "./api.service";

export const createProd = async (data) => {
    try {
        const res = await api.post('/product/create', data)
        return res.data
    } catch (err) {
        throw err
    }
}

export const getProd = async () => {
    try {
        const res = await api.get('/product')
        return res.data
    } catch (err) {
        throw err
    }
}

export const getSingleProduct = async (slug) => {
    try {
        const res = await api.get(`/product/${slug}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const updateProd = async (id, formData) => {
    try {
        const res = await api.put(`/product/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const deleteProd = async (id) => {
    try {
        const res = await api.delete(`/product/delete-product/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};