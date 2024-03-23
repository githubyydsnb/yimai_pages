import request from "../utils/request.js";

const baseUrl = '/brand';

const getBrandList = () => {
    return request.post(baseUrl + "/getBrandList", {
        brand: {}
    })
}

export {
    getBrandList
}