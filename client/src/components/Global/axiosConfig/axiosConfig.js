import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    headers:{'content-type': 'application/json;charset:utf-8'}
});

export default axiosInstance;