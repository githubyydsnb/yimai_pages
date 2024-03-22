import request from "../utils/request.js";

const baseUrl = '/user';


const checkUser = (loginName) => {
    return request.post(baseUrl + "/checkUser", {
        user: {
            loginName
        }
    });
}
const checkLogin = (user) => {
    return request.post(baseUrl + "/checkLogin", {
        user: user,
    });
}

const addUser = (user) => {
    return request.post(baseUrl + "/addUser", {
        user: user
    });
}
const sendCode = (email) => {
    return request.get(baseUrl + "/sendEmailCode", {
        params: {
            email: email
        }
    })
}
const validateCode = () => {
    return request.get(baseUrl + "/validateCode", {
        params: {
            key: "verifyCode",
        }

    })
}
const getUserByMobile = (user)=>{
    return request.post(baseUrl+"/getUserByMobile",{user:user});
}
const getUserList = (page,user) => {
    return request.post(baseUrl+"/getUserList",{user:user,page:page});
}
const getUserLogin = () =>{
    return request.post(baseUrl+"/getUserLogin");
}
const delUserById =(id) =>{
    return request.post(baseUrl+"/delUserById",{id:id});
}
const getUserById = (user) =>{
    return request.post(baseUrl+"/getUserById",{user:user});
}
const updateUser = (user) =>{
    return request.post(baseUrl + "/updateUser",{user:user});
}
export {
    checkUser,
    checkLogin,
    addUser,
    sendCode,
    validateCode,
    getUserByMobile,
    getUserList,
    getUserLogin,
    delUserById,
    getUserById,
    updateUser,
}