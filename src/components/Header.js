import React from 'react';
import '../css/Header.css'
import { Button, Grid, Container, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function Header() {
  const fundbearLogo = 'images/fundbear_logo.png'
  return (
    <div className='headerContainerInternal'>
      <Link to='./current-crises'>
        <img src={fundbearLogo} alt="fundbear logo"></img>
      </Link>
      
      <Link to='/'>
        <p>Log Out</p>
      </Link>
    </div>
  );
}

export default Header;
