import React from 'react';
import '../css/DefineUser.css'
import { Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function DefineUser() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
    <div className="defineUserContainer">
      <Grid textAlign='center' verticalAlign='middle' centered='true' style={{ height: '100vh', width:'45vh' }}>
        <Grid.Column>
          <img src={fundbearLogo} alt="fundbear logo"></img>
          <p>Which fundbear are you?</p>
          <Link to='/login'>
            <Button content='DONOR' fluid size='big' onClick='' secondary />
          </Link>
          <br />
          <Link to='login'>
            <Button content='ORGANIZATION' fluid size='big' secondary />
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default DefineUser;
