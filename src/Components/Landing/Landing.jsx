import React from 'react'
import style from './Landing.module.css'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <Link to="/home">
         <div className={style.initialContainer}>
            <h1>Welcome My APP</h1>
            <p>Click to Continue</p>
            <div className={style.loader}></div>
          </div>

    </Link>
    
  )
}
