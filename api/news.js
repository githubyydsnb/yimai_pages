import request from "../utils/request.js";
const baseUrl = "/news";

const getNewsList = (currPageNo) => {
    return request.post(baseUrl+"/getNewsList",{currPageNo:currPageNo});
}
const getNewsById = (id) =>{
    return request.post(baseUrl+"/getNewsById",{id:id});
}
export {
    getNewsList,
    getNewsById,
}