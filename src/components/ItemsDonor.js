import React from 'react';
import '../css/GridPage.css';
import Header from './Header.js';
import CardPrimary from './CardPrimary';
import { Button, Grid, Modal, Image, Icon, Color, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import CardSecondary from './CardSecondary';
import { useState } from 'react'


function ItemsDonor() {
  const [counter, setCounter] = useState(0)
  const fundbearLogo = 'images/fundbear_logo.png'
  const dummyData = [
      [{
          "crisisName": "Australian Wildfire",
          "country": "Australia",
          "img": "/images/wildfire.jpg",
          "itemName": "WaterBottles",
          "itemImg":"data:image/jpeg;base64,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",
          "maxQuantity": 5000,
          "currentQuantity": 2541
      },
      {
        "crisisName": "Australian Wildfire",
        "country": "Australia",
        "img": "/images/wildfire.jpg",
        "itemName": "Generators",
        "itemImg": "data:image/jpeg;base64,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",
        "maxQuantity": 300,
        "currentQuantity": 18
      },
      {
        "crisisName": "Australian Wildfire",
        "country": "Australia",
        "img": "/images/wildfire.jpg",
        "itemName": "Sandbags",
        "itemImg": "https://www.homestratosphere.com/wp-content/uploads/2018/11/burlap-sacks-nov122018-min.jpg",
        "maxQuantity": 5000,
        "currentQuantity": 3202
      }],
      [{
        "crisisName": "Australian Wildfire",
        "country": "Australia",
        "img": "/images/wildfire.jpg",
        "itemName": "Blankets",
        "itemImg": "https://bmcprotect.com/wp-content/uploads/2017/11/10102481-FR.jpg",
        "maxQuantity": 12000,
        "currentQuantity": 897
      }]
  ]
  let cardComponents = dummyData.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                          {/* <Modal trigger={ */}
                          <CardSecondary header={item["itemName"]} 
                                           description={item["crisisName"]} 
                                           img={item["img"]}
                                           itemImg={item["itemImg"]}
                                           currentQuantity={item["currentQuantity"]}
                                           maxQuantity={item["maxQuantity"]}
                                           itemName={item["itemName"]}
                                           />
                            <Modal centered={true} trigger = {<Button>Purchase</Button>} >
                            <Modal.Header>{item["itemName"]}</Modal.Header>
                            <Modal.Content image>
                              <Image wrapped size='medium' src={item["itemImg"]} />
                              <Modal.Description>

                                <h4>Quantity</h4><br></br>
                                <Button circular icon='minus' color='red' onClick={()=> {
                                  if(counter>0)(
                                  setCounter(counter -1))
                                }}/> 
                                  <Label size='large'>{counter}</Label>
                                <Button circular icon='add' color='green' onClick={()=> {
                                  setCounter(counter + 1)}}/>
                                <Modal trigger={
                                  <button class="ui teal icon left labeled button">
                                  <i aria-hidden="true" class="cart icon"></i>
                                  Checkout
                                  </button>}>
                                <Modal.Header>Added to cart!</Modal.Header>
                                </Modal>
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
        <h2>Items eeded for the Australian Wildfires</h2>
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