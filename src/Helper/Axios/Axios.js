import axois from "axios";
import {userToken} from "../../Store/store"

const axiosAPI = axios.create({
    baseURL: "http://localhost:5000/api"
});

const apiRequest = async (method, url, request) => {
    const headers = {
        authorization: "Bearer " + userToken
    };
    try {
        const data = await axiosAPI({ method, url, data: request, headers });
        return data;
    } catch (err) {
        return err;
    }

}

const get = (url, data) => apiRequest("get", url, request);

const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) =>  apiRequest("patch", url, request);

const API ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};

export default API;