import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../../redux/actions';
import Card from '../Card/Card';
import style from "./Paginacion.module.css"



export default function Paginacion({current,setCurrent}) {
    const countriesArr = useSelector((state)=> state.stateCountry)
    const dispatch = useDispatch();
    
//------------------------------------------------------------------------------------------------
    let itemsPerPage = 12;
    const pages = [];
    let totalOfPagination = Math.ceil(countriesArr.length/itemsPerPage);
    let lastPage = itemsPerPage * current;
    let primerPage = lastPage - itemsPerPage;
    const porcionArrCountry = countriesArr.slice(primerPage,lastPage);
    /* Creating an array of numbers from 0 to the total of pages. */
    for(let i = 1; i <= totalOfPagination; i++){
        pages.push(i)
    }

//--------------------------------------------------------------------------------------------------
const handleClick = (e)=>{
    // e.preventDefault()
    setCurrent(Number(e.target.id))
}
const changePage = (e)=>{
    const {name} = e.target
    if(name ==="next" && pages[pages.length - 1] !== current){
        setCurrent(current + 1)
    }
    if(name ==="atras" && current !== 1){
        setCurrent(current - 1)
    }
}
const reenderPageNumbers = 
<div className={style.container}>
    { typeof countriesArr !== "string" && <button name='atras' onClick={changePage}>atras</button>}
{    pages?.map(e=>{
        if(typeof countriesArr === "string"){
            return null
        }
        return(
            <li className={e === current ? style.active : style.li}  key={e} id={e} onClick={handleClick}>
                {e}
            </li>
        )
    })}
   {typeof countriesArr !== "string" && <button name='next' onClick={changePage}>next</button>}
</div>

const renderCurrentItems = ()=>{
    
    console.log(pages)
    if(typeof countriesArr === "string"){
        return <h1 className={style.h1}>{countriesArr}, buscar otro pais</h1>
    }
    return (
        <ul className={style.containerCountries}>
            {
                porcionArrCountry?.map((e)=>{
                    return<li className={style.renderCard} key={e.id}><Card id={e.id} img={e.flag_image} name={e.name} continent={e.continent}/></li>
                })
            }
        </ul>
    )
}


useEffect(()=>{//cuando se renderize este componente se ejecutara lo que tenga adentro en este caso es el dispatch que mandara a la store 
    if(typeof countriesArr !== "string"){
      dispatch(getCountry());
    }
  },[]);



  return (
    <div >
        {renderCurrentItems()}
        {reenderPageNumbers}
    </div>
  )
}
