import React from 'react';
import '../css/DefineUser.css'
import { Button, Grid } from 'semantic-ui-react';

function DefineUser() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
    <div className="defineUserContainer">
      <Grid textAlign='center' verticalAlign='middle' centered='true' style={{ height: '100vh' }}>
        <Grid.Column>
          <img src={fundbearLogo} alt="fundbear logo"></img>
          <p>Which fundbear are you?</p>
          <Button content='DONOR' fluid size='large' secondary />
          <div style={{height: '10px'}}></div>
          <Button content='ORGANIZATION' fluid size='large' secondary />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default DefineUser;
