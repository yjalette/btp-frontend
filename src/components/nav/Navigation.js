import React, {Component} from 'react';
import SignInLinks from './SignInLinks';

import {Navbar, Image} from 'react-bootstrap';
import logo from '../../images/logo.png';

class Navigation extends Component {

  render() {
    return (
          <nav className="navbar sticky-top flex-center">
              <Navbar.Brand href="/" className="w-100 p-2 d-flex justify-content-center bg-light-green m-0">
                  <Image src={logo} alt="logo" className="h-100"/>
              </Navbar.Brand>
              <Navbar collapseOnSelect expand="md" className="flex-center">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light"/>
                  <SignInLinks /> 
              </Navbar> 
          </nav>
      
    )
  }
      
}

export default Navigation;
