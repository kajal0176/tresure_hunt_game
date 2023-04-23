
import axiosInstance from "./axios.js";


const API_GET_REGISTERDUSER = async () => {
    try {
        const resp = await axiosInstance.get('/registerdUser');
        return resp;
    } catch (err) {
        // console.log(err);
        throw err
    }
}

const API_GET_ACTIVE_USER = async (id) => {
    try {
        const resp = await axiosInstance.get(`/userInfo/${id}`);
        return resp;
    } catch (err) {
        // console.log(err);
        throw err
    }
}

const API_POST_USERINFO = async (data) => {
    try {
        const resp = await axiosInstance.post('/userInfo',data);
        return resp;
    } catch (err) {
        // console.log(err);
        throw err
    }
}

const API_PUT_USERINFO = async (data) => {
    try {
        const resp = await axiosInstance.put('/userInfo',data);
        return resp;
    } catch (err) {
        // console.log(err);
        throw err
    }
}

const API_GET_USERINFO = async () => {
    try {
        const resp = await axiosInstance.get('/userInfo');
        return resp;
    } catch (err) {
        // console.log(err);
        throw err
    }
}
export { API_GET_REGISTERDUSER,API_GET_USERINFO,API_POST_USERINFO,API_PUT_USERINFO,API_GET_ACTIVE_USER };