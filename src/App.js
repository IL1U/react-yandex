import React from 'react';
import './App.css';
import StartPage from "./Component/StartPage/StartPage";
import SettingsPage from "./Component/SettingsPage/SettingsPage";
import HistoryPage from "./Component/HistoryPage/HistoryPage";
import Footer from "./Component/Footer/Footer";

function App() {

  const startPage = <StartPage />;  
  const historyPage = <HistoryPage />;
  const settingsPage = <SettingsPage />;

  const Page = historyPage;
  
  return (
    <React.Fragment>            
      {Page}
      <Footer />
    </React.Fragment>
  );
}

export default App;
