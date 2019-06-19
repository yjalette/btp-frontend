import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

class SignInLinks extends Component {
  render(){
    return(
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="rounded m-3">
                <Nav.Link href="/profile-view" className="b-nav">My Profile</Nav.Link>
                <Nav.Link href="/job-list" className="b-nav">Featured Hotels</Nav.Link>
                <Nav.Link href="/messenger" className="b-nav">Messages</Nav.Link>
                <Nav.Link href="#settings" className="b-nav">Settings</Nav.Link>
                <Nav.Link href="#help" className="b-nav border-0">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    )
  }
      
}

export default SignInLinks;
