import React from 'react';
import './Header.css';
import ButtonSettings from "../ButtonSettings/ButtonSettings"
import ButtonBuild from "../ButtonBuild/ButtonBuild"


function Header() {
  const isSetSetting = false;
  return (
    <header className="header">
        <a className="nameServer" href="#">{(isSetSetting) ? "philip1967/my-awesome-repo-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long" : "School CI server"}</a>        
        { <div>
          {(isSetSetting) ? <ButtonBuild /> : null} 
          &nbsp;
          {(isSetSetting) ? <ButtonSettings text=""/> : <ButtonSettings text="Settings"/>}         
        </div> }
    </header>
  );
}

export default Header;