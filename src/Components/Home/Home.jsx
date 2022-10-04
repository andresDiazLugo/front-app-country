import React,{useEffect,useState} from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import Paginacion from '../Paginacion/Paginacion';
//-----------------------------------------------------------------------------------------------------------------------------------------
export default function Home() {
const [current, setCurrent]= useState(1);
const searchResetCurrent= ()=>{
  setCurrent(1);
}
//------------------------------------------------------------------------------------------------------------------------------------------
  return (
    
    <div>
       <Nav  resetCurreEstateFather ={searchResetCurrent}/>
        <Paginacion setCurrent={setCurrent} current={current}/>
      <Footer/>
    </div>
  )
}
