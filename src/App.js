import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import StartPage from "./Component/StartPage/StartPage";
import SettingsPage from "./Component/SettingsPage/SettingsPage";
import HistoryPage from "./Component/HistoryPage/HistoryPage";
import Footer from "./Component/Footer/Footer";

function App() {

  const isSetSettings = true;

  const startPage = <StartPage />;  
  const historyPage = <HistoryPage />;
  const settingsPage = <SettingsPage />;
  
  return (
    <React.Fragment>
      <Header isSetSettings = {isSetSettings} />      
      {historyPage}
      <Footer />
    </React.Fragment>
  );
}

export default App;
