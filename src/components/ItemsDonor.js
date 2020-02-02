import React from 'react';
import '../css/Grid.css';
import CardPrimary from './CardPrimary.js';
import Header from './Header.js';
import { Button, Grid } from 'semantic-ui-react';
import testItemsData from '../testItemsData.js'
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

function ItemsDonor() {
  const fundbearLogo = 'images/fundbear_logo.png'
  const testItems = testItemsData
  let cardComponents = testItems.map(item => {
    return (
        <CardPrimary 
         key={item.id}
         header={item.itemName}
         description={item.price}/>

    )});

  return (
    <div className="organizationContainer">
        <Header/>
        <div className="grid">
        <h2>Organizations</h2>
        <Grid>
            <Grid.Row columns={testItemsData.size()}>
                <Grid.Column>
                    {cardComponents}
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
      </div>
    </div>
  )
    
}
    


export default ItemsDonor;