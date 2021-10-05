import Api from "../../Helper/Axios/Axios"

export const getUser = async(req) => {
    try{
        const response = await Api.get("/user",req)
        return response.results;
    }catch(err){
        console.error(err);
    }
}

export const getToken = async(req) => {
    try{
        const response = await Api.post("/token", req)
        return response.results;
    }catch(err){
        console.error(err);
    }
}


export const addUser = async(req) => {
    try{
        const response = await Api.post("/user/add", req)
        return response.results
    }catch(err){
        console.error(err);
    }
}

