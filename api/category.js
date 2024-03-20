import request from "../utils/request.js";
const baseUrl = '/ProductCategory';

const getCategoryOneList = ()=>{
    return request.post(baseUrl + "/getProductCategoryOne")
}

const getCategoryList = (id)=>{
    return request.post(baseUrl+"/getCategoryList", {id:id})
}

export {
    getCategoryOneList,
    getCategoryList,
}