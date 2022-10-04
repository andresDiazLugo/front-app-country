import axios from "axios";


/**
 * It gets the token from local storage and returns it
 * @param name - The name of the token you want to get.
 * @returns The token is being returned.
 */
export const useGetToken = (name)=>{
    let token = JSON.parse(window.localStorage.getItem(name))    
    if(!token || token.msg){
        return false
    }
    return token  
}

export const PostToken = async(url,obj,token)=>{
    const saveErrorOrNotAuthorizedToken = (error)=>{
     window.localStorage.setItem('sesion',JSON.stringify(error))
    }
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.post(url,obj,config)
        return response.data
    } catch (error) {
        console.log("este es el error del token")
         saveErrorOrNotAuthorizedToken(error.response.data)
         return error.response.data
    }
}