import axios from "axios";

export const useGet = async(obj)=>{
    try {
        const response = await axios.post("/registro/signup",obj)
        return [response.data]
    } catch (error) {
        console.log(error)
    }
}