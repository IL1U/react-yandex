import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';
import './App.css';
import StartPage from "./Component/StartPage/StartPage";
import SettingsPage from "./Component/SettingsPage/SettingsPage";
import HistoryPage from "./Component/HistoryPage/HistoryPage";
import Footer from "./Component/Footer/Footer";

function App() {

  const startPage = <StartPage />;  
  const historyPage = <HistoryPage />;
  

  const Page = startPage;
  
  return (
  <React.Fragment>
      <Router>
          <Switch>
              <Route path={'/settings'}>
                  <SettingsPage />
              </Route>
              <Route path={'/start'}>
                  <StartPage />
              </Route>
              <Route path={'/'}>
                  <HistoryPage />
              </Route>
          </Switch>
          <Footer />
      </Router>
  </React.Fragment>        
  );
}

export default App;
