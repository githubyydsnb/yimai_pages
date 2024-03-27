import request from "../utils/request.js";

const baseUrl = '/history';


const getHistoryList = () => {
    return request.post(baseUrl + "/getHistoryList");
}
const addHistory = (product) => {
    return request.post(baseUrl + "/addHistory",{
        product:product
    });
}

const delAll = () => {
    return request.post(baseUrl + "/delAll");
}

export {
    getHistoryList,
    addHistory,
    delAll
}