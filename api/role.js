import request from "../utils/request.js";

const baseUrl = '/role';
const getRoleList = (currentUser) => {
    return request.post(baseUrl + "/getRoleList",{currentUser:currentUser});
}
const getRoleList2 = () => {
    return request.post(baseUrl + "/getRoleList2");
}
export {
    getRoleList,
    getRoleList2
}