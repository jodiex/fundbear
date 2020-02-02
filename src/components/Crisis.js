import React from 'react';
import '../css/Crisis.css';
import Header from './Header.js';
import CardPrimary from './CardPrimary.js';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

function Crisis() {
  const fundbearLogo = 'images/fundbear_logo.png';
  const crises = [
      [{
          "crisisName": "Australian Wildfire",
          "country": "Australia",
          "img": ""
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
      },
      {
        "crisisName": "Coronavirus Outbreak",
        "country": "China"
      },
      {
        "crisisName": "Coronavirus Outbreak",
        "country": "China"
      }]
  ]
  let cardComponents = crises.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                            <CardPrimary header={item["crisisName"]} description={item["country"]}/>
                        </Grid.Column>
                    )
                })}
            </Grid.Row>
        );
    });
  return (
    <div className="gridPageContainer">
      <div className="headerContainer">
        <Header/>
      </div>
      <div className="titleContainer">
        <h2>Current Crises</h2>
        <br />
      </div>
      <div className="gridContainer">
        <Grid>
            {cardComponents}
        </Grid>
      </div>
    </div>
    
    
    
    
    
      
   
  );
}

export default Crisis;

