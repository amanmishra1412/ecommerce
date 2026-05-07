import api from "./api.service";

export const loginControl = async (data) => {
    const res = await api.post(`/auth/login`, data,);
    return res;
};

export const signupControl = async (data) => {
    const res = await api.post(`/auth/signup`, data,);
    return res;
};

export const getMe = async (data) => {
    const res = await api.get("/auth/get-me");
    return res;
}