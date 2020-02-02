import React from 'react';
import { Card, Image, Progress } from 'semantic-ui-react';


function CardSecondary(props) {
    return (
        <Card style={{height: '310px'}}>
            <Image src={props.img}></Image>
            <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Description>
                    {props.description}
                </Card.Description>
                <Card.Meta>{props.currentQuantity} of {props.maxQuantity}</Card.Meta>
                <Progress percent={(props.currentQuantity/props.maxQuantity)*100} color='blue' />
            </Card.Content>          
        </Card>

    );
}

export default CardSecondary;