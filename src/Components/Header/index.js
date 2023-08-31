import React from 'react';
import '../../App.css'

function Header({headerText}) {
  return (
    <div className='headTxt'>
      

    <h1 className='Header'>{headerText}</h1>
    <hr className='Head'/>
    </div>
  )
}

export default Header