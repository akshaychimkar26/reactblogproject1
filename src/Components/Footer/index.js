import React from "react";

import FootLogo from "../FootLogo";
import './Footer.style.css'

const Footer = () => {
  return (
    <div className="MainFoot">
      <div className="FWidth">

<div className="FootCont">

      <div className="FootSec">
      <div className="footLogo">
        <div className="FootProp"><FootLogo /></div>
      </div>
      <div className="Footmid">
        <div className="FootmidSCon">
          <div className="FDesc">
            all entertainment in one place have fun with friends
          </div>
          <div className="Fwrite">
            <span>©</span>The Siren
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fno">
        <h3>Contact</h3>
        <div>
          <span className="LEmo">📍</span> 456 Mandigav Mumbai
        </div>
        <div>
          <span className="PEmo">📞</span> +91 3456784567
        </div>
        <div className="lFTxt">
          <pre><span className="MEmo">✉ </span> akshaythesiren.com</pre>
        </div>
      </div>

      <div className="FRefer">
        <h3 className="TFRefer">References</h3>
        <div className="TheFBolly"><a className="visit" href="https://www.bollywoodhungama.com/movies/top-100-movies/">Bollywood</a></div>
        <div className="TheFHolly"><a className="visit" href="https://www.themoviedb.org/movie">Hollywood</a></div>
        <div className="TheFTechno"><a className="visit" href="https://www.cnet.com/news/">Technology</a></div>
        <div className="TheFFit"><a className="visit" href="https://www.precisionnutrition.com/blog">Fitness</a></div>
        <div className="TheFFood"><a className="visit" href="https://pinchofyum.com/blog">Food</a></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;