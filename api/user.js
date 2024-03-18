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
        user: {
            loginName: user.loginName,
            password: user.password,
            email: user.email,
            mobile: user.mobile,
        }
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
export {
    checkUser,
    checkLogin,
    addUser,
    sendCode,
    validateCode,
}