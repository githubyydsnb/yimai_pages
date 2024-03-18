import request from '../utils/request.js';

const baseUrl = "/product";

const getProductList = () => {
    return request.post(baseUrl + "/getProductList")
}

export {
    getProductList,
}