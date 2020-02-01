import React from 'react';
import '../css/Organization.css';
import Header from './Header.js';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

function Organization() {
  const fundbearLogo = 'images/fundbear_logo.png'
  var columns = this.state.organizations.length() % 3;
  columns = (columns == 0) ? 3: columns;
  render() {
      let cardComponents = this.state.organizations.map((row) => {
          return (
              <Grid.Row columns={columns}>
                  {row.map((item) => {
                      return (
                        <Grid.Column>
                            
                        </Grid.Column>
                    )
                  })}
              </Grid.Row>
          )
      })
  }
  return (
    <div className="organizationContainer">
    `<Header/>
    <div className="grid">
    <h2>Organizations</h2>
        <Grid>
            {cardComponents}
        </Grid>
      </div>
    </div>
  );
}

export default Organization;
