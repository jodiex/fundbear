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
//   const [projects, setProject] = useState(null)
  
//   //call this to fetch
//   const fetchData = async () => {
//     const response = await axios.get(url)
//     setProject(response.data) 
//   }
    const projects = [
        [{"_id":{"$oid":"5e36009e1c9d44000084b480"},"projectName":"Australian Wildfire Aid for Victims","organizationName":"Salvation Army","crisisName":"Australian Wildfire","severity":{"$numberInt":"5"}, "img": ""},
        {"_id":{"$oid":"5e36003a1c9d44000084b47f"},"projectName":"Help Victims of Australian Wildfires","organizationName":"Givit","crisisName":"Australian Wildfire","severity":{"$numberInt":"5"}, "img": ""},
        {"_id":{"$oid":"5e35fe681c9d44000084b47c"},"projectName":"Animal Rescue from Australian Wildfires","organizationName":"World Wildlife Fund (WWF)","crisisName":"Australian Wildfire","severity":{"$numberInt":"5"}, "img": ""}],
        [{"_id":{"$oid":"5e36021b1c9d44000084b481"},"projectName":"Medical Aid for Coronavirus Outbreak","organizationName":"Red Cross","crisisName":"Coronavirus Outbreak","severity":{"$numberInt":"5"}, "img": ""}],
    ]
  let cardComponents = projects.map((row) => {
        return (
            <Grid.Row columns={3}>
                {row.map((item) => {
                    return (
                        <Grid.Column>
                            <CardPrimary header={item["projectName"]} description={item["organizationName"]} img={item["img"]} link={'/items-donor'}/>
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

