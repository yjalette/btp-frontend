import React, {Component} from 'react';
import SignOutLinks from './SignOutLinks';

import {Navbar, Image} from 'react-bootstrap';
import logo from '../../images/logo.png';

class Navigation extends Component {
  render() {
    return (
      <div className="w-100 flex-md-column flex-row flex-center sticky-top">
        <Navbar.Brand href="#home" className="w-100 p-2 flex-center bg-light-green m-0"><Image src={logo} alt="logo" className="p-2"/></Navbar.Brand>
        {/* <span>Connecting travelers with hostels since 2017</span> */}
        <Navbar collapseOnSelect expand="lg" className="navbar bg-light w-100">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <SignOutLinks />
        </Navbar>
      </div>
      
    )
  }
      
}

export default Navigation;
