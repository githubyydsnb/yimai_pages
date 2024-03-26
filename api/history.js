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

export {
    getHistoryList,
    addHistory,
}