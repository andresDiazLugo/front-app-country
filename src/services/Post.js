import axios from "axios";

export const PostToken = async(obj,token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.post("/registro/signup",obj,config)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
export const Post= async(obj)=> {
    try {
        const response = await axios.post("/registro/singin",obj)
       
        return response.data
    } catch (error) {

        return  error.response.data
    }
}