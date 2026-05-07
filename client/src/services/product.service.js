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