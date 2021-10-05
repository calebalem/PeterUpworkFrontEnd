import Api from "../../Helper/Axios/Axios";


export const createTable = async(req) => {
    try{
        const response = await Api.post("/table/create", req)
    }catch(err){
        console.error(err);
    }
}

export const addTableData = async(req) => {
    try{
        const response = await Api.post("/table/addData", req)
    }catch(err){
        console.error(err)
    }
}
export const getTables = async(req) => {
    try{
        const response = await Api.get("/tables",req)
        return response.results
    }catch(err){
        console.error(err);
    }
}