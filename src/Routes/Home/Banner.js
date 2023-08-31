import React, { useContext,useState, useEffect } from "react";
import "../../App.css";
import { useNavigate} from "react-router-dom";
import { AppData } from "../../Utility";


function Banner(props) {
  const [data]= useContext(AppData)
  const navi = useNavigate(); 
  const Filter1 = data.filter(
    (item) => item.sp === "home-ban"
  );
  const Filter2 = data.filter(
    (item) => item.sp === "home-banner" && item.id===2
  );


  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})

  }

  return (
    <div className="mC">
      <div className="sC">
        <div className="iC">
          {Filter2.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="fI hv"
              src={d.img}
            />
          ))}
          {Filter1.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="sI hv"
              src={d.img}
            />
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Banner;