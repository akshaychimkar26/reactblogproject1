import React, { useContext,useState, useEffect } from 'react'
import { Header, DateExt } from '../../Components'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { AppData } from '../../Utility';


function TechArticleList() {
  const [data]= useContext(AppData)


  const navi = useNavigate(); 

  const handleImage=(d)=>{
   navi(`/Technology/${d.id}`, {state: d})
  }

  return (
    <div className='ArticleList'>
      <div className='ALfront'>
     <Header headerText={"Technology"} />
     </div>


<div className='ALroom'>

{
        data.filter((item)=>item.cat==="Technology" && item.for==="ArticleList"
        ).map((d, index)=>(
          <div key={d.id}>
     <div className="LAB" >
          <div >
            <img
             onClick={( )=> handleImage(d)}
              src={d.img}
              alt="No Network"
              className="lAI hv"
            />
          </div>
          <div>
            <h2 className='H2'  onClick={( )=> handleImage(d)}>{d.title}</h2>
            <p className="LAD">
            {d.Overview}
            </p>
            <p className="LADT">
              <span className="DTR">{d.cat}</span>
              <DateExt dateExt={`  / ${d.date} `} />
            </p>
          </div>
        </div>
        {index !== 6 && (
         <div className="roomer">
         <hr className="cH" />
       </div>
        )}
       </div>
  ))
}



        </div>
    </div>
  )
}

export default TechArticleList



