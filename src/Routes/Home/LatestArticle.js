import React from "react";
import { Header } from "../../Components";
import {  useContext,useState, useEffect } from "react";
import { DateExt } from "../../Components";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { AppData } from "../../Utility";

const LatestArticle = () => {
  const [data] = useContext(AppData);
  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/${d.cat}/${d.id}`, { state: d });
  };
  return (
    <div className="LAP">
      <Header headerText={"Latest Articles"} />
      {data
        .filter((item) => item.sp === "home-latestArt")
        .map((d, index) => (
          <div key={d.id}>
            <div className="roomer">
              <hr className="cH" />
            </div>
            <div className="LAB">
              <div>
                <img
                  src={d.img}
                  onClick={() => handleImage(d)}
                  alt="No Network"
                  className="lAI1 hv"
                />
              </div>
              <div>
                <h2 className="H2"  onClick={( )=> handleImage(d)}>{d.title}</h2>
                <p className="LAD">{d.Overview}</p>
                <p className="LADT">
                  <span className="DTR">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          </div>
        ))}

      <div className="lM">
        <img src="./Images/arrow.png" alt="" />
        <span className="arrowText">LOAD MORE</span>
      </div>
      {data
        .filter((item) => item.sp === "home-latestBig")
        .map((d, index) => (
          <div key={d.id} className="LAIC">
            <img
              onClick={() => handleImage(d)}
              alt="No Network"
              className="LAIT hv"
              src={d.img}
            />
            <div className="text-ov">
              <h2    onClick={( )=> handleImage(d)} className="LAIH">{d.title}</h2>
              <p className="LADI">
                <span className="LAT">{d.cat}</span>
                <span className="LAT" />
                {`  / ${d.date} `}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestArticle;