import React, {useContext,useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Header } from "../../Components";
import { DateExt } from "../../Components";
import "../../App.css";
import { AppData } from "../../Utility";

const Latest = () => {
  const [data]=useContext(AppData)
  const navi = useNavigate(); 

  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
  }
  return (
    <div className="mC">
      <div className="sC">
        <Header headerText={"The Latest"} />
        <div className="tL">
          {data
            .filter((item) => item.sp === "home-latest")
            .map((d, index) => (
              <div key={d.id} className="tLb">
                <img
                  onClick={() => handleImage(d)}
                  alt="No Network"
                  src={d.img}
                  className="TLI hv"
                />
                <div className="flexmain cHt">
                  <div className="bC">
                    <h2 className="H2" onClick={() => handleImage(d)}>
                      {d.title}
                    </h2>
                    <p className="bMC">{d.Overview}</p>
                    <p className="eP">
                      <span className="DTR">{d.cat}</span>
                      <DateExt dateExt={`  / ${d.date} `} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;