import React from 'react';
import '../css/GridPage.css';
import Header from './Header.js';
import CardPrimary from './CardPrimary';
import { Button, Grid, Modal, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";



function ItemsDonor() {
  const fundbearLogo = 'images/fundbear_logo.png';
  const dummyData = [
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
  let cardComponents = dummyData.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                          <Modal trigger={<CardPrimary header={item["crisisName"]} 
                                           description={item["country"]} 
                                           currentQuantity={2000}
                                           maxQuantity={5000}/>}>
                            <Modal.Header>Select a Photo</Modal.Header>
                            <Modal.Content image>
                              <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                              <Modal.Description>
                                <Modal.Header>Default Profile Image</Modal.Header>
                                <p>
                                  We've found the following gravatar image associated with your e-mail
                                  address.
                                </p>
                           
                              </Modal.Description>
                            </Modal.Content>
                          </Modal>
                            
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
        <h2>Here are items that are needed</h2>
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

export default ItemsDonor;