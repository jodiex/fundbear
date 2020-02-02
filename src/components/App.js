import React from 'react';
import DefineUser from './DefineUser'
import Login from './Login'
import CardPrimary from './CardPrimary'
import CardSecondary from './CardSecondary'
import Crisis from './Crisis'


import '../css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import ItemsDonor from './ItemsDonor';
import ProjectsDonor from './ProjectsDonor';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={DefineUser}/>
          <Route path='/login' component={Login} />
          <Route path='/card' component={CardSecondary} />
          <Route path='/current-crises' component={Crisis} />
          <Route path='/items-donor' component={ItemsDonor} />
          <Route path='/projects-donor' component={ProjectsDonor} />
    
      
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
