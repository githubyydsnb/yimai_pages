import request from '../utils/request.js';
// import 'qs';
// import qs from "/qs/dist/qs.js";

const baseUrl = "/product";

const getProductListByCategoryId = (categoryId) => {
    return request.get(baseUrl + "/getProductListByCategoryId", {
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
const getProductByCondition = (product, brand, page) => {
    return request.post(baseUrl + "/getProductListByEs", {
        product,
        page,
        brand: {
            brandName: brand.brandName
        },
    })
}
const getProductList = (product, page) => {
    return request.post(baseUrl + "/getProductList", {
        product,
        page
    })
}
const deleteProduct = (id) => {
    return request.get(baseUrl + "/delProduct", {
        params: {id,}

    })
}
const getProductByDataBase = (id) => {
    console.log(id)
    return request.post(baseUrl + "/getProductByDataBase", {
        product: {
            id
        }
    })
}
const getProductByName = (product) => {
    return request.post(baseUrl + "/getProductByDataBase", {
        product: {
            name: product.name
        }
    })
}
const modifyProduct = (product) => {
    return request.post(baseUrl + "/updateProduct", product)
}

const addProduct = (product) => {
    console.log(product)
    return request.post(baseUrl + "/addProduct",product,{
        headers:{
            "Content-Type":false,
            "ProcessData":false,
        }
    })
}
const updateProductFileId = (product) => {
  return request.post(baseUrl+"/updateProductFileId",{
      product:{
          id:product.id,
          fileId:product.fileId
      }
  })
}
const getProduct = (product) => {
  return request.post(baseUrl+"/getProduct",{
      product:{
          id:product.id
      }
  })
}
const getProductListByIds = (ids) => {
  return request.get(baseUrl+"/getProductListByIds",{
      params:{
          ids:ids.toString()
      }
  })
}
export {
    getProductListByCategoryId,
    getPicPathById,
    getProductHotList,
    getProductByCondition,
    getProductList,
    deleteProduct,
    getProductByDataBase,
    addProduct,
    modifyProduct,
    getProductByName,
    updateProductFileId,
    getProduct,
    getProductListByIds
}