import api from "./api.service";

export const createProd = async (data) => {
    try {
        const res = await api.post('/product/create', data)
        return res.data
    } catch (err) {
        throw err
    }
}