import React from 'react';
import "./ButtonBuild.css";
import play from "../../icon/play.png";

function ButtonBuild() {
  return (
    <button className="ButtonBuild">
        <img src={play} alt =""/> <span className="textSettings">Run build</span>
    </button>
  );
}

export default ButtonBuild;