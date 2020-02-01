import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CardPrimary() {
    return (
        <Card>
            <Image src='/images/wildfire.jpg'></Image>
            <Card.Content>
                <Card.Header>Wildfires</Card.Header>
                <Card.Meta>Created in September 2019</Card.Meta>
                <Card.Description>
                    Wildfires in Australia
                </Card.Description>
            </Card.Content>          
        </Card>

    );
}

export default CardPrimary;