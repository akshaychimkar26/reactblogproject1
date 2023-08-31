import React, { useContext,useState, useEffect} from 'react'
import { Header } from '../../Components'
import Advertisement from './Advertisement'
import "../../App.css"
import { DateExt } from "../../Components";
import { useNavigate } from 'react-router-dom'
import { AppData } from '../../Utility';

function TopPots() {
  const [data]= useContext(AppData)
  const navi = useNavigate(); 

  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
  }

  return (
    <div className='TPP'>
     <Advertisement />
    <div className='tPC'>
        <div className='top'>
        <Header headerText={"Top Posts"}/>

        </div>


        {
            data.filter((item)=>item.sp==="home-Toplist"
            ).map((d, index)=>(
        <div className='tPM' key={d.id}>
        <img onClick={()=>handleImage(d)}  alt='No Network' className='tPI hv' src={d.img}/>
        <div className='tTM'><h2   onClick={( )=> handleImage(d)} className='h2Ht'>{d.title}</h2>
         <p className='pH'>
                  <span className="DTR">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
                </div>
                </div>
  ))
        }


        {
                data.filter((item)=>item.sp==="home-ToplistA"
                ).map((d, index)=>(
            <div key={d.id}>
                <div className="roomer">
          <hr className="cH" />
        </div>
        <div className='TSC'>
        <img onClick={()=>handleImage(d)}  alt='No Network' className='tIS hv' src={d.img}/>
         <div className='h4'>
         <h4   onClick={( )=> handleImage(d)} className='h3Ht'>{d.title}</h4>
         <p className='pHS'>
                  <span className="DTR">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
                </div>
              
        </div>

        </div>
                ))
}


    </div>
    </div>
  )
}

export default TopPots