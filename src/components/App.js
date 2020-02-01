import React from 'react';
import DefineUser from './DefineUser'
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
    <div className="App">
      <DefineUser />
    </div>
  );
}

export default App;
