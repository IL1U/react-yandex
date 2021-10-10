import React from 'react';
import './SettingsPage.css';


function SettingsPage() {
  return (
    <>
      <header className="header">
        <a className="nameServer" href="#">School CI server</a>        
      </header>
      <div className="SettingsPage">
          <h1>Settings</h1>
          <p>Configure repository connection and&nbsp;synchronization settings.</p>
          <form action="/#" method="GET">
              <label>GitHub repository <span>*</span><br/>
              <input type="text" placeholder="user-name/repo-name" name="nameRepository" required="required" /></label><br/>
              <label>Build command <span>*</span><br/>
              <input type="text" placeholder="" name="buildCommand" required="required" /></label><br/>
              <label>Main branch<br/>
              <input type="text" placeholder="" name="mainBranch" /></label><br/>
              <label>Synchronize every&nbsp;&nbsp;&nbsp; 
              <input type="number" min="0" name="timeSinchronize" />&nbsp;&nbsp;&nbsp;minutes</label><br/>
              <button type="submit">Save</button>
              <button>Cancel</button>
          </form>
      </div>
    </>
  );
}

export default SettingsPage;