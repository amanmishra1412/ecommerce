import axios from "axios";

export const loginControl = async (data) => {
    const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/auth/login`,
        data,
    );
    return res;
};

export const signupControl = (data) => {
    return `${data} signup`;
};
