import React, {Component} from 'react';
import HeroImage from './HeroImage';
import HowItWorks from './HowItWorks';
import FeaturedHotels from './FeaturedHotels';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import About from './About';
import Fees from './Fees';
import TagLine from './TagLine';

import ModalLogin from '../nav/ModalLogin';

import map from '../../images/map.jpg';
import couple from '../../images/couple.jpg';
import logo from '../../images/logo.png';

import {Navbar, Nav, Image} from 'react-bootstrap';


class MainLanding extends Component {

  aboutRef = React.createRef();
  FAQRef = React.createRef();
  feesRef = React.createRef();
  featuredHotelsRef = React.createRef();
  contactUsRef = React.createRef();

  scrollAbout = e => {
    window.scrollTo({
      top: this.aboutRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  scrollFAQ = e => {
    window.scrollTo({
      top: this.FAQRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  scrollFees = e => {
    window.scrollTo({
      top: this.feesRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  scrollFeaturedHotels= e => {
    window.scrollTo({
      top: this.featuredHotelsRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  scrollContactUs = e => {
    window.scrollTo({
      top: this.contactUsRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  render(){
    return (
        <div>
            <div className=" w-100 flex-md-column flex-row flex-center sticky-top bg-light">
              <Navbar.Brand href="#home" className="w-100 p-2 d-flex justify-content-center bg-light-green m-0">
                <Image src={logo} alt="logo" className="p1 w-45"/>
              </Navbar.Brand>
              {/* <span>Connecting travelers with hostels since 2017</span> */}
              <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex-center">
                  <Nav className="">
                      <Nav.Link onClick={this.scrollAbout}>About Us</Nav.Link>
                      <Nav.Link onClick={this.scrollFeaturedHotels}>Featured Hotels</Nav.Link>
                      <Nav.Link onClick={this.scrollFees}>Our Fees</Nav.Link>
                      <Nav.Link onClick={this.scrollFAQ}>FAQ</Nav.Link>
                      <Nav.Link onClick={this.scrollContactUs}>Contacts</Nav.Link>
                  </Nav>
                  <Nav.Link className=""><ModalLogin /></Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </div>  
            <HeroImage />
            <div className="">
                <About innerRef={this.aboutRef}/>
                <TagLine image={couple} text="We offer services for connecting travelers with hostels that are interested in exchanging part time work for accommodations."/>
                <HowItWorks/>
                <TagLine image={map} text="Our goal is to give people from all walks of life the chance to travel and explore our world, regardless of their economic limitations and help hostels increase their profit margin."/>
                <Fees innerRef={this.feesRef}/>
                <FeaturedHotels innerRef={this.featuredHotelsRef}/>
                <FAQ innerRef={this.FAQRef}/>
                <ContactUs innerRef={this.contactUsRef}/>
            </div>
        </div>
    )
  }
      
}

export default MainLanding;
