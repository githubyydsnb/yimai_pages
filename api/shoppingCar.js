import request from '../utils/request.js';

const baseUrl = "/shopCar";

const getShopCarList = (shopCar) => {
    return request.post(baseUrl + "/getShoppingCarList", {
        shopCar
    })
}
const addShopCar = (shopCar) => {
    return request.post(baseUrl + "/addShopCar", {
        shopCar
    })
}
const checkShopIsExit = (shopCar) => {
    return request.post(baseUrl + "/checkShopIsExit", {
        shopCar
    })
}
const getShoppingCarListByIds = (idStr) => {
    console.log(idStr)
    return request.get(baseUrl + "/getShoppingCarListByIds", {
        params: {
            ids:idStr.toString()
        }
    })
}
const deleteShopCar = (id) => {
    return request.get(baseUrl + "/deleteShoppingCar", {
        params: {
            id
        }
    })
}

const modifyShopCar = (carParam) => {
    return request.post(baseUrl + "/modifyShoppingCar", {
        shopCar: {
            id: carParam.id,
            count: carParam.count,
        }
    })
}

export {
    getShopCarList,
    addShopCar,
    checkShopIsExit,
    deleteShopCar,
    modifyShopCar,
    getShoppingCarListByIds
}