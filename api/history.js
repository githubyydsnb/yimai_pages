import request from "../utils/request.js";

const baseUrl = '/history';


const getHistoryList = (currentUser) => {
    return request.post(baseUrl + "/getHistoryList",{currentUser:currentUser});
}
const addHistory = (product,currentUser) => {
    return request.post(baseUrl + "/addHistory",{
        product:product,
        currentUser:currentUser
    });
}
const delAll = (currentUser) => {
    return request.post(baseUrl + "/delAll",{currentUser:currentUser});
}


export {
    getHistoryList,
    addHistory,
    delAll
}