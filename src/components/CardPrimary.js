import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CardPrimary() {
    return (
        <Card style={{height: '270px'}}>
            <Image src='/images/wildfire.jpg'></Image>
            <Card.Content>
                <Card.Header>Wildfires</Card.Header>
                <Card.Description>
                    Wildfires in Australia
                </Card.Description>
            </Card.Content>          
        </Card>

    );
}

export default CardPrimary;