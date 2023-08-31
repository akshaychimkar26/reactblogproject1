import React from 'react'
import { Logo, Nav , LogoMobile, Footer} from '../../Components'
import HollyArticleList from './hollyArticleList'
import HollyTopPost from './HollyTopPost'
import Store from '../../Utility/Context/contextAPI'

const Hollywood = () => {
  return (
    <>
    <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
    <div className="mC">
        <div className="sC">
          <div className="BC">
    <HollyArticleList/>
    <HollyTopPost/>
    </div>
    </div>
    </div>
    </Store>
    <Footer/>
    </>

  )
}

export default Hollywood