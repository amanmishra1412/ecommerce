import axios from "axios";

export const loginControl = async (data) => {
    const locdata = data;
    const newData = { ...locdata };

    const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/auth/login`,
        newData,
    );
    return res;
};

export const signupControl = async (data) => {
    const oldData = data;
    const newData = { ...oldData, authProvider: "local" };
    const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/auth/signup`,
        newData,
    );
    return res;
};
