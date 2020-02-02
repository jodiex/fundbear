import React from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { Button, Grid, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function Login() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
<<<<<<< HEAD
    <div className="defineUserContainer">
      <Grid textAlign='center' verticalAlign='middle' centered='true' style={{ height: '100vh', width: '45vh' }}>
        <Grid.Column>
          <img src={fundbearLogo} alt="fundbear logo"></img>
          <Input placeholder='Username' fluid size="big"/>
          <br />
          <Input placeholder='Password' fluid size="big" />
          <br />
          <Link to='/Crisis'>
          <Button content='LOG IN' fluid size="big" secondary />
          </Link>
        </Grid.Column>
      </Grid>
=======
    <div className='gradientBackground'>
        <div className='whiteCardBackground'>
        <Grid className='gridFade' textAlign='center' verticalAlign='middle' centered='true'>
            <Grid.Column>
            <img src={fundbearLogo} alt="fundbear logo"></img>
            <Input placeholder='Username' fluid size='large'/>
            <br />
            <Input placeholder='Password' className='passwordInput' fluid size='large'/>
            <br />
            <Link to='/current-crises'>
              <Button content='LOG IN' fluid size="big" secondary />
            </Link>
            </Grid.Column>
        </Grid>
        </div>
>>>>>>> 4e1f764f9001d9e75e3927244b50fd098ed35c28
    </div>
        
  );
}

export default Login;