import React from 'react';
import DefineUser from './DefineUser'
import Login from './Login'
import '../css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={DefineUser}/>
          <Route path='/login' component={Login} />

      
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;