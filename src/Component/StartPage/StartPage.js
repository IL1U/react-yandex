import React from 'react';
import ButtonSettings from "../ButtonSettings/ButtonSettings";
import './StartPage.css';
import logo from "../../icon/logo.png";

function StartPage() {
  return (
    <>
      <header className="header">
          <a className="nameServer" href="#">School CI server</a>        
          <div>
            <ButtonSettings text="Settings"/>         
          </div>
      </header>
      <div className="StartPage">
          <div>
              <img src={logo} alt =""/>
              <p>Configure repository connection<br/>and synchronization settings</p>   
              <button>Open settings</button>
          </div>
      </div>
    </>
  );
}

export default StartPage;