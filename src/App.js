import React from "react";
import Routes from "./node_modules/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./node_modules/components/topbar";
import { CurrentUserProvider } from "./node_modules/contexts/currentUser";
import  CurrentUserChecker from './node_modules/components/currentUserChecker'
const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

export default App;
