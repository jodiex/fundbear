import React from 'react';
import DefineUser from './DefineUser'
import Login from './Login'
import Organization from './Organization'
import CardPrimary from './CardPrimary'
import CardSecondary from './CardSecondary'
import ModalDonor from './ModalDonor'

import '../css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import ItemsDonor from './ItemsDonor';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={DefineUser}/>
          <Route path='/login' component={Login} />
          <Route path='/organization' component={Organization} />
          <Route path='/card' component={CardSecondary} />
          <Route path='/items-donor' component={ItemsDonor} />
          <Route path='/items-donor' component={ItemsDonor} />
          <Route path='/modal-donor' component={ModalDonor} />
    
      
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
