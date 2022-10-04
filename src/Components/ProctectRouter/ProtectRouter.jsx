import {Outlet,Navigate,useNavigate} from "react-router-dom"
import {useGetToken} from "../../services/CoostomHoock"
export default function ProtectRouter({children,route="/"}) {
  const token = useGetToken("sesion")
console.log("token", token)

  if(!token){
    return <Navigate to={route}/>
  }
  return (
     children ? children : <Outlet/> 
  )
}
