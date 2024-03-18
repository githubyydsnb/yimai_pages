import request from "../utils/request.js";
const baseUrl = '/ProductCategory';

const getCategoryOneList = ()=>{
    return request.post(baseUrl + "/getProductCategoryOne")
}

const getCategoryTwoList = (id)=>{
    return request.post(baseUrl+"/getProductCategoryTwo")
}

const getCategoryThreeList = (parentId)=>{
    return request.post(baseUrl+"/getProductCategoryThree")
}

export {
    getCategoryOneList,
    getCategoryTwoList,
    getCategoryThreeList,
}