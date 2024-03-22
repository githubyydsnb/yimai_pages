import request from "../utils/request.js";

const baseUrl = '/ProductCategory';

const getCategoryOneList = () => {
    return request.post(baseUrl + "/getProductCategoryOne")
}

const getCategoryList = (id) => {
    return request.post(baseUrl + "/getCategoryList", {id: id})
}
const getProductCategoryListByParentId = (id) => {
    return request.post(baseUrl + "/getProductCategoryListByParentId", {
        category: {
            id
        }
    })
}
const getProductCategoryList = (category, page) => {
    return request.post(baseUrl + "/getProductCategoryList", {
        category,
        page
    })
}
const getSecondIdByChild = (id) => {
    console.log(id)
    return request.get(baseUrl + "/getSecondIdByChild", {
        params: {
            id: id
        }
    })
}
const getOneIdByChild = (id) => {
    return request.get(baseUrl + "/getOneIdByChild", {
        params: {
            id: id
        }
    })
}

const getCategoryThreeListByThird = (id) => {
    return request.get(baseUrl + "/getCategoryThreeListByThird", {
        params: {
            id: id
        }
    })
}

const getSecondIdListByChild = (id) => {
    console.log(id)
    return request.get(baseUrl + "/getSecondIdListByChild", {
        params: {
            id
        }
    })
}
const getProductCategory = (product) => {
    console.log(product)
    return request.post(baseUrl + "/getProductCategory", {
        category: {name: product.name}
    })
}

const getTypeList = () => {
    return request.get(baseUrl + "/getTypeList")
}
export {
    getCategoryOneList,
    getCategoryList,
    getProductCategoryListByParentId,
    getProductCategoryList,
    getSecondIdByChild,
    getOneIdByChild,
    getCategoryThreeListByThird,
    getSecondIdListByChild,
    getProductCategory,
    getTypeList
}