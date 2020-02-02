import React from 'react';
import '../css/CardPrimary.css'
import { Card, Image } from 'semantic-ui-react';

function CardPrimary(props) {
    return (
        <div className="cardContainer">
            <Card style={{height: '270px'}}>
                <Image src={props.img}></Image>
                <Card.Content>
                    <Card.Header>{props.header}</Card.Header>
                    <Card.Description>
                        {props.description}
                    </Card.Description>
                </Card.Content>          
            </Card>
        </div>
    );
}

export default CardPrimary;