import React from 'react'
import { Footer, Logo, LogoMobile, Nav } from '../../Components'
import FitArticleList from './FitArticleList'
import FitTopPost from './FitTopPost'
import Store from '../../Utility/Context/contextAPI'


const Fitness = () => {
  return (
    <>
 <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
    <div className="mC">
        <div className="sC">
          <div className="BC">
    <FitArticleList/>
    <FitTopPost/>
    </div>
    </div>
    </div>
    </Store>
    <Footer/>
    </>
  )
}

export default Fitness