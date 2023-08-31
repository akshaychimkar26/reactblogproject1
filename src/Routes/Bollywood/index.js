import React from 'react'
import { Footer, Logo, LogoMobile, Nav } from '../../Components'
import ArticleList from './ArticleList'
import TopPost from './TopPost'
import '../../App.css'
import Store from '../../Utility/Context/contextAPI'

function Bollywood() {
    
  return (
    <>
    <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
      <div className="mC">
        <div className="sC">
          <div className="BC">
      <ArticleList/>
      <TopPost/>
      </div>
      </div>
      </div>
    </Store>
    <Footer/>

    </>
  )
}

export default Bollywood