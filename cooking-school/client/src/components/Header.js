import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import vasoFront from '../images/vasoFront.jpg';

class Header extends Component {
  
  render() {
    
    return (
      <Card className="text-white header container-fluid p-0 border-0">
        <Card.Img src={vasoFront} alt="Vaso" className="bg-header rounded-0" />
        <Card.ImgOverlay className="p-0 header-wrapper">
          <div className="header-div p-30 bg-purple">
              <h1>Vasiliki Vourliotaki</h1>
              <p className="text-light">- Chef de Cuisine<br/>Innovative approach to Greek-inspired Mediterranean cuisine </p> 
          </div>
        </Card.ImgOverlay>
      </Card>   
    )
  }
}

export default Header;


