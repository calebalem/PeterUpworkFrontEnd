import Api from "../../Helper/Axios/Axios";

export const getLog = async(data)=>{
    try{
        const response = await Api.post("/table/getLog",data);
        return response.data
    }catch(err){
        console.error(err)
    }
}