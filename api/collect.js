import request from "../utils/request.js";

const baseUrl = '/collect';


const getCollectionsCount = (currentUser) => {
    return request.post(baseUrl + "/getCollectionsCount",{currentUser:currentUser});
}
const getCollectionsList = (currentUser) => {
    return request.post(baseUrl + "/getCollectionsList",{currentUser:currentUser});
}
const delCollections = (product,currentUser) => {
    return request.post(baseUrl + "/delCollections",{
        product:product,
        currentUser:currentUser
    });
}
const addCollection = (product,currentUser) => {
    return request.post(baseUrl + "/addCollections",{
        product:product,
        currentUser:currentUser
    });
}

export {
    getCollectionsCount,
    getCollectionsList,
    delCollections,
    addCollection,
}