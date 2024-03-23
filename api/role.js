import request from "../utils/request.js";

const baseUrl = '/role';
const getRoleList = () => {
    return request.post(baseUrl + "/getRoleList");
}
const getRoleList2 = () => {
    return request.post(baseUrl + "/getRoleList2");
}
export {
    getRoleList,
    getRoleList2
}