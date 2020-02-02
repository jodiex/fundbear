import React from 'react';
import '../css/CardPrimary.css'
import { Card, Image } from 'semantic-ui-react';

function CardPrimary(props) {
<<<<<<< HEAD
    function handleClick(e) { 
        console.log('Testing')
=======
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
>>>>>>> 4e1f764f9001d9e75e3927244b50fd098ed35c28
    }
    return (
        <div className="cardContainer" onClick={handleClick}>
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