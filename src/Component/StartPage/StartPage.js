import React from 'react';
import './StartPage.css';
import logo from "../../icon/logo.png";

function StartPage() {
  return (
    <div className="StartPage">
        <div>
            <img src={logo} alt =""/>
            <p>Configure repository connection<br/>and synchronization settings</p>   
            <button>Open settings</button>
        </div>
    </div>
  );
}

export default StartPage;