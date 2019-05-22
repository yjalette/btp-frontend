import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

class SignInLinks extends Component {
  render(){
    return(
          <Navbar.Collapse id="responsive-navbar-nav" className="flex-center">
            <Nav className="">
                <Nav.Link href="#deets">My Profile</Nav.Link>
                <Nav.Link href="#features">Featured Hotels</Nav.Link>
                <Nav.Link href="#pricing">Messages</Nav.Link>
                <Nav.Link href="#features">Settings</Nav.Link>
                <Nav.Link href="#pricing">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    )
  }
      
}

export default SignInLinks;
