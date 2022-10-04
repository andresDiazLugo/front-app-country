import React,{useEffect} from 'react'
import style from './ButtonSig.module.css'

import {useSelector} from 'react-redux'
export default function ButtonSig({sendInfo,senLogin}) {
    const user = useSelector(state=> state.usersignUp)
  
    useEffect(()=>{
      console.log(user)
            if(user.msg){
             
                return alert(user.msg  + " intente iniciar sesion")
            }
    },[user])
  
 
  return (
    <div>
      <button className={style.btn}onClick={sendInfo}>
        Registrarse 
      </button>
      <button className={style.btn}  onClick={senLogin}>
        iniciar sesion
      </button>
      
    </div>
  )
}
