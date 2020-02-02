import React from 'react';
import '../css/ProjectsDonor.css';
import Header from './Header.js';
import CardPrimary from './CardPrimary.js';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import {useState} from 'react'; 
import axios from 'axios';

function ProjectsDonor() {
  const fundbearLogo = 'images/fundbear_logo.png';
  const url = "http://localhost:8080/filterProjects/filterCrisis";  
  const [projects, setProject] = useState(null)
  
  //call this to fetch
  const fetchData = async () => {
    const response = await axios.get(url)
    setProject(response.data) 
  }

  let cardComponents = projects.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                            <CardPrimary header={item["crisisName"]} description={item["country"]} img={item["img"]}/>
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
        <h2>Select a project:</h2>
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

export default ProjectsDonor;

