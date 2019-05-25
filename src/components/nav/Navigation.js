import React, {Component} from 'react';
import SignInLinks from './SignInLinks';

import {Navbar, Image} from 'react-bootstrap';
import logo from '../../images/logo.png';

class Navigation extends Component {
  render() {
    return (
          <div className=" w-100 flex-md-column flex-row flex-center sticky-top bg-light">
              <Navbar.Brand href="#home" className="w-100 p-2 d-flex justify-content-center bg-light-green m-0">
                  <Image src={logo} alt="logo" className="p-2"/>
              </Navbar.Brand>
              <Navbar collapseOnSelect expand="lg" className="navbar flex-center w-100">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <SignInLinks /> 
              </Navbar> 
          </div>
      
    )
  }
      
}

export default Navigation;
