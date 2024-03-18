import request from "../utils/request.js";
const baseUrl = '/ProductCategory';

const getCategoryOneList = ()=>{
    return request.post(baseUrl + "/getProductCategoryOne")
}

const getCategoryTwoList = (id)=>{
    return request.post(baseUrl+"/getProductCategoryTwo",id)
}

const getCategoryThreeList = (parentId)=>{
    return request.post(baseUrl+"/getProductCategoryThree",parentId)
}

export {
    getCategoryOneList,
    getCategoryTwoList,
    getCategoryThreeList,
}