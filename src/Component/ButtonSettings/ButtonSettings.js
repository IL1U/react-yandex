import React from 'react';
import "./ButtonSettings.css";
import cog from "../../icon/cog.png";

function ButtonSettings({text}) {
  return (
    <button className="BtnSettings">
        <img src={cog} alt =""/> 
        <span className="textSettings">{text}</span>
    </button>
  );
}

export default ButtonSettings;