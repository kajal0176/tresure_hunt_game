import axios from "axios";
import axiosInstance from "./axios.js";


const API_LOGIN = async (userCredentials) => {
    try {
        const resp = await axiosInstance.post('/login', userCredentials);
        return resp;
    } catch (err) {
        // console.log(err)
        throw err
    }
}

const API_SIGNUP = async (userCredentials) => {
    try {
        const resp = await axiosInstance.post('/signup', userCredentials);
        return resp;
    } catch (err) {
        // console.log(err)
        throw err
    }
}

export { API_LOGIN, API_SIGNUP };