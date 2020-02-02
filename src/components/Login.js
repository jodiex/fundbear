import React from 'react';
import '../css/Login.css'
import { Button, Grid, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function Login() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
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
    </div>
        
  );
}

export default Login;