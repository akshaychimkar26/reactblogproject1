import React from 'react'
import { Footer, Logo } from '../../Components'
import "./commonPage.style.css"
import { DateExt,Starter } from "../../Components";
import {   Link, useLocation } from 'react-router-dom';



const CommonPage = () => {
  
  
      const location = useLocation(); 
  return (
    <div className='cPar'>
        <div className='eLog'>
            <div className='uL'>
           <Link className='lSt' to={'/'}>< Logo /></Link>
           </div>
           <div className='gS '><Starter/></div>
        </div>



        <div className='flexmain'>
            <hr className='cPH'/>
        </div>
        <div className='mC blogDescrCont'>
        <div className='cC'>
            <div>
                <h1 className='theComHeading'>{location.state.title}</h1>
            </div>
            <div className='commonProf'>
                <div className='commonPic1'>
        <img className='profileImg' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2z1jaUw5sRS4wfasqV74Q125cdS7q7GulMFTYaS2snZZNSq1F' alt=""/>
        <div className='profileName'>
        <div>Dmitry Nozhenko</div>
        <DateExt dateExt={'Jan 28, 2019 · 10 min read'}/>
        </div>
        </div>
        <div className='commonPic2'>
            <img className='icons' alt='' src='https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png'/>
        </div>
        </div>
        <div className='imgCon'>
            <img className='MI' alt='' src={location.state.img}/>
        </div>

        <div className='descrip'>
            <p className='paraStyle'>{location.state.Overview}</p> <br/>
            <p className='paraStyle'> {location.state.description} </p>
          
        </div>

        <div>

        </div>




        </div> 
    </div>
    <Footer/>
    </div>
  )
}

export default CommonPage
