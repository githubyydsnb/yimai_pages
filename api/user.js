import request from "../utils/request.js";
const baseUrl = '/user';


const checkUser = (user) => {
    return request.post(baseUrl + "/checkUser", user);
}
const checkLogin = (user) => {
    return request.post( baseUrl+"/checkLogin", {
        user:user,
    });
}

const addUser = (user) => {
    return request.post(baseUrl + "/addUser", user);
}
export {
    checkUser,
    checkLogin,
    addUser
}