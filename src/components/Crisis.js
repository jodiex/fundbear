import React from 'react';
import '../css/Crisis.css';
import Header from './Header.js';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

function Crisis() {
  const fundbearLogo = 'images/fundbear_logo.png';
  const crises = [
      [{
          "crisisName": "Australian Wildfire",
          "country": "Australia"
      },
      {
        "crisisName": "Hurricane Dorian",
        "country": "Bahamas, Puerto Rico"
      },
      {
        "crisisName": "Typhoon Hagibis",
        "country": "Japan"
      }],
      [{
        "crisisName": "Coronavirus Outbreak",
        "country": "China"
      }]
  ]
  render() {
      let cardComponents = crises.map((row) => {
          let numColumns = row.size();
          return (
              <Grid.Row columns={numColumns}>
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
