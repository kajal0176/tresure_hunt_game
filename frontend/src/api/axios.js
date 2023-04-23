import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://tresure-hunt-game-apis.onrender.com/api",
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json"
    }
});

if(localStorage.getItem("token")){
    var token = localStorage.getItem("token")
    axiosInstance.defaults.headers.common["authorization"] = token;
}

export default axiosInstance;