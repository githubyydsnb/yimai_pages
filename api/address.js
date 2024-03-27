import request from "../utils/request.js";

const baseUrl = '/address';


const getUserAddress = (page) => {
    return request.post(baseUrl + "/getUserAddress",{
        page:page
    });
}
const UpdateAddress = (address) => {
    return request.post(baseUrl + "/UpdateAddress",{
        address:address
    });
}
const setDefault = (address) => {
    return request.post(baseUrl + "/setDefault",{
        address:address
    });
}
const delAddress = (address) => {
    return request.post(baseUrl + "/delAddress",{
        address:address
    });
}
const addAddress = (address) => {
    return request.post(baseUrl + "/addAddress",{
        address:address
    });
}
const getById = (address) => {
    return request.post(baseUrl + "/getById",{
        address:address
    });
}
const  getLoginAddressDef = () =>{
    return request.post(baseUrl + "/getLoginAddressDef")
}
export {
    getUserAddress,
    UpdateAddress,
    delAddress,
    addAddress,
    setDefault,
    getById,
    getLoginAddressDef,
}