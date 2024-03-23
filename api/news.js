import request from "../utils/request.js";
const baseUrl = "/news";

const getNewsList = (page,news) => {
    return request.post(baseUrl+"/getNewsList",{page:page,news:news});
}
const getNewsById = (id) =>{
    return request.post(baseUrl+"/getNewsById",{id:id});
}
const delNewsById = (id)=>{
    return request.post(baseUrl+"/delNewsById",{id:id});
}
const updateNews = (news)=>{
    return request.post(baseUrl+"/updateNews",{news:news});
}
const addNews = (news)=>{
    return request.post(baseUrl+"/addNews",{news:news});
}
export {
    getNewsList,
    getNewsById,
    delNewsById,
    updateNews,
    addNews,
}