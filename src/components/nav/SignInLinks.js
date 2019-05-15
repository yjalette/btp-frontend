import React, {Component} from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class SignInLinks extends Component {
  render(){
    return(
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#deets">About Us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Our Fees</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home">Beyond The Pack</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#pricing">Featured Hostels</Nav.Link>
            <Nav.Link href="#features">FAQ</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
            </NavDropdown>
            </Nav>
      </Navbar.Collapse>
    )
  }
      
}

export default SignInLinks;
