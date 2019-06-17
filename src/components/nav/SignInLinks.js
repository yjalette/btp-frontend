import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

class SignInLinks extends Component {
  render(){
    return(
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="rounded m-3">
                <Nav.Link href="/profile-view" className="b-nav">My Profile</Nav.Link>
                <Nav.Link href="/profile-view" className="b-nav">Featured Hotels</Nav.Link>
                <Nav.Link href="#pricing" className="b-nav">Messages</Nav.Link>
                <Nav.Link href="#features" className="b-nav">Settings</Nav.Link>
                <Nav.Link href="#pricing" className="b-nav border-0">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    )
  }
      
}

export default SignInLinks;
