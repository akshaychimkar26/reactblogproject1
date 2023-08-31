import React, { useContext,useState, useEffect } from 'react'
import { Logo, Nav,LogoMobile, Footer} from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'
import Store from '../../Utility/Context/contextAPI'

const Technology = () => {

  return (
    <>
   <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
    <div className="mC">
        <div className="sC">
          <div className="BC">
    <TechArticleList/>
       <TechTopPost/> 
    </div>
    </div>
    </div>
    </Store>
    <Footer/>
    </>
  )
}

export default Technology