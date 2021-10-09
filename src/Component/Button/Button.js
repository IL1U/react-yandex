import React from 'react';
import "./Button.css";
import good from "../../icon/good.png";
import fail from "../../icon/fail.png";
import pending from "../../icon/pending.png";
import user from "../../icon/user1.png";
import branch from "../../icon/branch.png";
import calendar from "../../icon/calendar.png";
import time from "../../icon/time.png";

function Button({props}) {
  let icon;
  if (props.statusJob === "good") icon = good;
  if (props.statusJob === "fail") icon = fail;
  if (props.statusJob === "pending") icon = pending;

  return (
    <button className="Button">
        <div className="leftPart">
          <div>
            <img src={icon} alt =""/>
          </div>
          <div>
            <div className="firstBlock">
              <div>#{props.idJob}</div>
              <div>{props.note}</div>
            </div>
            <div className="secondBlock">
              <div><img src={branch} alt =""/>{props.branch}&nbsp;<span>{props.idCommit}</span></div>
              <div><img src={user} alt =""/>{props.author}</div> 
            </div>         
          </div>
        </div>
        <div className="rightPart">
          <div><img src={calendar} alt =""/>{props.date}</div>
          <div><img src={time} alt =""/>{props.timeJob}</div>
        </div>
    </button>
  );
}

export default Button;