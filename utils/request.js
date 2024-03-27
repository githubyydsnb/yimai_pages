import "/js/axios.js";

const instance = axios.create({
    baseURL: '/nginx',
    // timeout: 5000
})

function readTokenCookie() {
    let allCookies = document.cookie;
    let cookieArray = allCookies.split(';')
    for (let i = 0; i < cookieArray.length; i++) {
        let name = cookieArray[i].split('=')[0].trim()
        if (name === 'token') {
            return cookieArray[i].split('=')[1]
        }
    }
}

let isAccess = true;
instance.interceptors.request.use(async (config) => {
    if (isAccess) {
        isAccess = false
        config.headers.token = readTokenCookie()
    }
    return config
})
instance.interceptors.response.use(function (response) {
    isAccess = true
    if (response.data.code == "401") {
        window.location.href = "../login/Login.html"
    }
    return response.data;
}, function (error) {
    return Promise.reject(error);
})
export default instance