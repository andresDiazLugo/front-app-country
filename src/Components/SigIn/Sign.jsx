import React,{useState} from 'react'
import style from './Sign.module.css'
import ButtonSig from '../ButtonSig/ButtonSig'
import {registerUser} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import {Post} from '../../services/Post'
import {useNavigate,Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import {useGetToken} from '../../services/CoostomHoock'
export default function Sign() {
  const navigate = useNavigate()
  const token = useGetToken("sesion")
  const[form,setForm] = useState({
    email:"",
    password:"",   
  })

  const dispatch = useDispatch()
  if(token){
    return <Navigate to="/landing"/>
  }
  const handleInput = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const sendInfoUser = (e)=>{
     e.preventDefault()
     dispatch(registerUser(form))
    setForm({
      ...form,
      email:"",
      password:""
    })
  }
  const handleSesion = async (e)=>{
    e.preventDefault()
    
    const respuesta = await Post(form)  
      setForm({
        ...form,
        email:"",
        password:""
      })
    if(respuesta.msg){
      return alert(respuesta.msg)
    }
      window.localStorage.setItem('sesion',JSON.stringify(respuesta))
      navigate('/landing')
}

  return (
    <form className={style.form}>
        <input  type="text" placeholder='Email' name="email" id='email' value={form.email} onChange={handleInput}/>
        <input  type="password" placeholder='Password' name="password" id='password' value={form.password} onChange={handleInput}/>
        <ButtonSig senLogin={handleSesion} sendInfo={sendInfoUser}/>
    </form>
  )
}
