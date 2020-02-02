import React from 'react';
import '../css/GridPage.css';
import Header from './Header.js';
import CardPrimary from './CardPrimary.js';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";


function Crisis() {
  const fundbearLogo = 'images/fundbear_logo.png';
  const crises = [
      [{
          "crisisName": "Australian Wildfire",
          "country": "Australia",
          "img": "/images/wildfire.jpg"
      },
      {
        "crisisName": "Coronavirus Outbreak",
        "country": "China",
        "img": "/images/coronavirus.jpg"

      },
      {
        "crisisName": "Typhoon Hagibis",
        "country": "Japan",
        "img": "/images/typhoon.jpg"
      }],
      [{
        "crisisName": "Hurricane Dorian",
        "country": "Bahamas, Puerto Rico",
        "img": "/images/hurricane.jpg"
      },
      {
        "crisisName": "Earthquake",
        "country": "Papua New Guinea",
        "img": "/images/earthquake.jpg"
      },
      {
        "crisisName": "Nigerian Flood",
        "country": "Nigeria",
        "img": "/images/flood.jpg"
      }]
  ]
  let cardComponents = crises.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                            <CardPrimary header={item["crisisName"]} description={item["country"]} img={item["img"]}/>
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
        <h2>Select a current crisis:</h2>
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

