import request from "../utils/request.js";
const baseUrl = '/collect';


const getCollectionsCount = () => {
    return request.post(baseUrl + "/getCollectionsCount");
}
const getCollectionsList = () => {
    return request.post(baseUrl + "/getCollectionsList");
}
const delCollections = (product) => {
    return request.post(baseUrl + "/delCollections",{
        product:product
    });
}
const addCollection = (product) => {
    return request.post(baseUrl + "/addCollections",{
        product:product
    });
}

export {
    getCollectionsCount,
    getCollectionsList,
    delCollections,
    addCollection,
}