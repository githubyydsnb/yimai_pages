import request from '../utils/request.js';

const baseUrl = "/product";

const getProductList = (categoryId) => {
    return request.get(baseUrl + "/getProductList", {
        params: {
            categoryId: categoryId,
        }

    })
}

const getPicPathById = (id) => {
    return request.get(baseUrl + "/downloadProductImg", {
        params: {
            id: id
        }
    })
}

const getProductHotList = () => {
    return request.post(baseUrl + "/getProductHot")
}
const getProductByCondition = (product, page) => {
    return request.post(baseUrl + "/getProductListByCondition", {
        product,
        page,
    })
}
export {
    getProductList,
    getPicPathById,
    getProductHotList,
    getProductByCondition
}