import React from 'react';
import '../css/CardPrimary.css'
import { Card, Image } from 'semantic-ui-react';
import { useState } from 'react'
import axios from 'axios';
import {Link, useHistory, BrowserRouter} from 'react-router-dom';
import CardSecondary from './CardSecondary'
import ItemsDonor from './ItemsDonor';


function CardPrimary(props) {
    const [data, setData] = useState(null)
    const apiURL = "http://localhost:8080/filterProjects";
    let history = useHistory();

    function fetchData() {
        const response = axios.get(apiURL);
        setData(response.data) 
    }

    const handleClick = (link) => {
        history.push(link);
        // <Route path='/items-donor' component={ItemsDonor} />
    }
    return (
        <BrowserRouter>
        <div className="cardContainer" onClick={handleClick(props.link)}>
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
        </BrowserRouter>
    );
}

export default CardPrimary;