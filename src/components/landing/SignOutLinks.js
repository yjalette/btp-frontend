import React, {Component} from 'react';
import ModalLogin from './ModalLogin';

import {Navbar, Nav} from 'react-bootstrap';

class SignOutLinks extends Component {
  render(){
    return(
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-center">
            <Nav.Link className=""></Nav.Link>
            <Nav className="">
                <Nav.Link href="#deets">About Us</Nav.Link>
                <Nav.Link href="#features">Featured Hotels</Nav.Link>
                <Nav.Link href="#pricing">Our Fees</Nav.Link>
                <Nav.Link href="#features">FAQ</Nav.Link>
                <Nav.Link href="#pricing">Contacts</Nav.Link>
            </Nav>
            <Nav.Link className=""><ModalLogin /></Nav.Link>
        </Navbar.Collapse>
    )
  }
      
}

export default SignOutLinks;
