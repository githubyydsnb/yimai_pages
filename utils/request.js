import "../js/axios.js";

const instance = axios.create({
    baseURL: '/nginx',
    // timeout: 5000
})

instance.interceptors.response.use(request => request.data, error => Promise.reject(error))

export default instance