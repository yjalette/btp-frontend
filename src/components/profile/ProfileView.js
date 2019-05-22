import React, {Component} from 'react';

import ProfileSections from './ProfileSections';
import ProfileReview from './ProfileReview';
import Navigation from '../nav/Navigation';

import {Container, Row, Col} from 'react-bootstrap';
import couple from '../../images/couple.jpg';

const cover = {
    backgroundImage: `url(${couple})`,
    height: '500px'
}

class ProfileView extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-light-green" fluid>
                <Navigation />
                <section className="height-sm bg-img-col" style={cover}></section>
                <Container className="p-0">
                    <Row className="top-profile bg-beige shadow-sm rounded m-auto flex-center p-md-5 p-sm-1">
                        <Col md={12}><ProfileSections /></Col> 
                        <Col md={12}><ProfileReview /></Col>    
                    </Row>
                </Container>
           </Container>
          
            

            )
        }
      
    }

export default ProfileView;
