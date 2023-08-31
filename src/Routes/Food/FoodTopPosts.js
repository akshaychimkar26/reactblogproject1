import React, { useContext,useState, useEffect } from "react";
import { Header, DateExt, Advertisement } from "../../Components";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { AppData } from "../../Utility";

function FoodTopPost() {
  const [data] = useContext(AppData);

  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/Food/${d.id}`, { state: d });
  };


  const Filter = data.filter(
    (item) => item.cat === "Food" && item.for === "TopList"
  );
  return (
    <div className="TPP">
      <div className="tPC">
        <div className="top">
          <Header headerText={"Top Posts"} />
        </div>

        {data
          .filter((item) => item.cat === "Food" && item.for === "TheTopList")
          .map((d) => (
            <div className="topB" key={d.id}>
              <img
                onClick={() => handleImage(d)}
                alt="No Network"
                className="tPI hv"
                src={d.img}
              />
              <div className="topt">
                <h2 onClick={() => handleImage(d)} className="h2Ht H2">
                  {d.title}
                </h2>
                <p className="pH">
                  <span className="DTR">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          ))}

        {Filter.map((d) => (
          <div key={d.id}>
            <div className="roomer">
              <hr className="cH" />
            </div>

            <div className="TSC">
              <img
                onClick={() => handleImage(d)}
                src={d.img}
                alt="No Network"
                className="tIS hv"
              />
              <div className="h4">
                <h4 onClick={() => handleImage(d)} className="h3Ht">
                  {d.title}
                </h4>
                <p className="pHS">
                  <span className="DTR">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="TAd">
        <Advertisement />
      </div>
    </div>
  );
}
export default FoodTopPost;