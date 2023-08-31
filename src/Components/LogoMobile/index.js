import React, { useState } from 'react'
import './logoMobile.style.css'
import { NavLink} from 'react-router-dom'

function LogoMobile () {
    
const [show, setShow]=useState(false)


const handleMenu=() =>{
setShow(prev=>!prev)
}



  return (
    <div className='LCon'>
    <div className='mLogo'>
        <div className='mLS'>
    <div>
      <h1 className="MbLogo">
        <span className="v">The</span> Siren
      </h1>
    </div>
    <div onClick={()=>setShow(!show)} className='classes'>
        <div className='class1'></div>
        <div className='class1'></div>
        <div className='class1'></div>
   
    </div>
    
  </div>
 
  </div>
  <hr className='mbr'/>

  { show && (
  <div onClick={handleMenu} className='pick'>
  <div  className='cm'><NavLink style={{color:'black', textDecoration:'none'}} to={"/"} >Home</NavLink></div>
  <div className='cm'><NavLink style={{color:'black' , textDecoration:'none'}} to={"/Bollywood"} >Bollywood</NavLink></div>
  <div  className='cm'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Technology"} >Tech</NavLink></div>
  <div className='cm'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Hollywood"} >Hollywood</NavLink></div>
  <div className='cm'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Fitness"} >Fitness</NavLink></div>
  <div  className='cm'><NavLink style={{color:'black', textDecoration:'none'}} to={"/Food"} >Food</NavLink></div>
  </div>)
}

  </div>
  )
}

export default LogoMobile 