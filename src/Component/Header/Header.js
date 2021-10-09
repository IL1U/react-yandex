import React from 'react';
import './Header.css';
import ButtonSettings from "../ButtonSettings/ButtonSettings"
import ButtonBuild from "../ButtonBuild/ButtonBuild"


function Header({isSetSettings}) {

  return (
    <header className="header">
        <a className="nameServer" href="#">{(isSetSettings) ? "philip1967/my-awesome-repo-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long-long" : "School CI server"}</a>        
        <div>
          {(isSetSettings) ? <ButtonBuild /> : null} 
          &nbsp;
          {(isSetSettings) ? <ButtonSettings text=""/> : <ButtonSettings text="Settings"/>}         
        </div>
    </header>
  );
}

export default Header;