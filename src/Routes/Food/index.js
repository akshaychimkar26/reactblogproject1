import React from 'react'
import { Logo, Nav , LogoMobile, Footer} from '../../Components'
import FoodArticleList from './FoodArticleList'
import FoodTopPost from './FoodTopPosts'
import Store from '../../Utility/Context/contextAPI'

const Food = () => {
  return (
    <>
   <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
    <div className="mC">
        <div className="sC">
          <div className="BC">
    <FoodArticleList/>
    <FoodTopPost/>
    </div>
    </div>
    </div>
    </Store>
    <Footer/>
    </>
  )
}

export default Food