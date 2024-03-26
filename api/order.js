import request from "../utils/request.js";

const baseUrl = '/order';

const submitOrder = (cars, address, userId) => {
    return request.post(baseUrl + '/addOrder', {
        cars: cars,
        address: address,
        userId: userId
    })
}
const getOrderList = (order, page) => {
    return request.post(baseUrl + "/getOrderList", {
        order: order,
        page: page,
    })
}
const cancelOrder = (id) => {
    return request.get(baseUrl + "/modifyOrder", {
        params: {
            id: id,
            status: 3,
        }
    })
}
export {
    submitOrder,
    getOrderList,
    cancelOrder
}
