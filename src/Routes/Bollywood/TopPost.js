import React, { useContext} from "react";
import { Header, DateExt, Advertisement } from "../../Components";
import "../../App.css";
import { AppData } from "../../Utility";
import { useNavigate } from "react-router-dom";


function TopPost() {
  const [data] = useContext(AppData);

  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/Bollywood/${d.id}`, { state: d });
  };

  const Filter = data.filter(
    (item) => item.cat === "Bollywood" && item.for === "TopList"
  );
  return (
    <div className="TPP">
      <div className="tPC">
        <div className="top">
          <Header headerText={"Top Posts"} />
        </div>

        {data
          .filter(
            (item) => item.cat === "Bollywood" && item.for === "TheTopList"
          )
          .map((d) => (
            <div className="topB" key={d.id}>
              <img onClick={( )=> handleImage(d)}  alt="No Network" className="tPI hv" src={d.img} />
              <div className="topt"><h2   onClick={( )=> handleImage(d)} className="h2Ht">{d.title}</h2>
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
              <img onClick={( )=> handleImage(d)}  src={d.img} alt="No Network" className="tIS hv" />
              <div className="h4">
                <h4   onClick={( )=> handleImage(d)} className="h3Height">{d.title}</h4>
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
export default TopPost;