import request from '../utils/request.js';

const baseUrl = "/shopCar";

const getShopCarList = (id) => {
    return request.get(baseUrl + "/getShoppingCarList", {
        params: {
            userId: id,
        }
    })
}
const addShopCar = (shopCar) => {
    return request.post(baseUrl + "/addShopCar", {
        shopCar
    })
}
const checkShopIsExit = (shopCar) => {
    return request.post(baseUrl + "checkShopIsExit", {shopCar})
}
export {
    getShopCarList,
    addShopCar,
}