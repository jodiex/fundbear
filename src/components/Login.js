import React from 'react';
import '../css/Login.css'
import { Button, Grid, Input } from 'semantic-ui-react';

function Login() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
    <div className="defineUserContainer">
      <Grid textAlign='center' verticalAlign='middle' centered='true' style={{ height: '100vh', width: '45vh' }}>
        <Grid.Column>
          <img src={fundbearLogo} alt="fundbear logo"></img>
          <Input placeholder='Username' fluid size="big"/>
          <br />
          <Input placeholder='Password' fluid size="big" />
          <br />
          <Link to='/'>
          <Button content='LOG IN' fluid size="big" secondary />
          </Link>
        </Grid.Column>
      </Grid>
    </div>
        
  );
}

export default Login;