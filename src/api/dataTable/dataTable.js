import Api from "../../Helper/Axios/Axios";


export const createTable = async(req) => {
    try{
        const response = await Api.post("/table/create", req)
        return response.data
    }catch(err){
        console.error(err);
    }
}

export const addTableData = async(req) => {
    try{
        const response = await Api.post("/table/addData", req)
        return response.data
    }catch(err){
        console.error(err)
    }
}
export const getTables = async(req) => {
    try{
        const response = await Api.post("/tables",req)
        return response.data
    }catch(err){
        console.error(err);
    }
}