import Api from "../../Helper/Axios/Axios"

export const getUser = async(req) => {
    try{
        const response = await Api.post("/user",req)
        return response.data;
    }catch(err){
        console.error(err);
    }
}

export const getToken = async(req) => {
    try{
        const response = await Api.post("/token", req)
        return response.data;
    }catch(err){
        console.error(err);
    }
}


export const addUser = async(req) => {
    try{
        const response = await Api.post("/user/add", req)
        return response.data
    }catch(err){
        console.error(err);
    }
}

