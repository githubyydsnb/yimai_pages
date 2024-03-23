import request from '../utils/request.js';
// const baseUrl="file"
// ResponseMsg addFile(FilePojo filePojo);
//
// ResponseMsg modifyFile(FilePojo filePojo);
//
// ResponseMsg deleteFile(FilePojo filePojo);

const addFile = (filePojo) => {
    return request.post("/addFile", {
        filePojo
    })
}
const modifyFile = (filePojo) => {
    return request.post("/modifyFile", {
        filePojo,
    })
}
const deleteFile = (id) => {

    return request.get("/deleteFile", {
        params: {
            id
        }
    })
}

export {
    addFile,
    modifyFile,
    deleteFile
}