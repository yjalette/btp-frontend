import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import ModalLogin from './ModalLogin';

class SignOutLinks extends Component {
  render(){
    return(
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#deets">About Us</Nav.Link>
                <Nav.Link href="#features">Featured Hotels</Nav.Link>
                <Nav.Link href="#pricing">Our Fees</Nav.Link>
                <Nav.Link href="#features">FAQ</Nav.Link>
                <Nav.Link href="#pricing">Contacts</Nav.Link>
                <Nav.Link href="#pricing"><ModalLogin /></Nav.Link>
            </Nav>
      </Navbar.Collapse>
    )
  }
      
}

export default SignOutLinks;
