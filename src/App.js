import React from 'react'
import  Routes from './node_modules/routes';
import { BrowserRouter as Router } from 'react-router-dom'
import Topbar from './node_modules/components/topbar'
const App = () => {
  return ( 
      <Router>
          <Topbar />
          <Routes />
          

       </Router>
  ) 
}

export default App