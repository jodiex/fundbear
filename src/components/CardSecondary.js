import React from 'react';
import { Card, Image, Progress } from 'semantic-ui-react';

function CardSecondary() {
    return (
        <Card style={{height: '310px'}}>
            <Image src='/images/wildfire.jpg'></Image>
            <Card.Content>
                <Card.Header>Surgical Masks</Card.Header>
                <Card.Description>
                    Wuhan Coronavirus Outbreak
                </Card.Description>
                <Card.Meta>2000 of 5000</Card.Meta>
                <Progress percent={40} color='blue' />
            </Card.Content>          
        </Card>

    );
}

export default CardSecondary;