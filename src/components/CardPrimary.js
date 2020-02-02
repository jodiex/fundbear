import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CardPrimary(props) {
    return (
        <Card style={{height: '290px'}}>
            <Image src='/images/wildfire.jpg'></Image>
            <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>          
        </Card>

    );
}

export default CardPrimary;