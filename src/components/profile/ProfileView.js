import React, {Component} from 'react';

import ProfileSections from './ProfileSections';
import ProfileReview from './ProfileReview';
import Navigation from '../nav/Navigation';

import {Container, Row, Col} from 'react-bootstrap';
import couple from '../../images/couple.jpg';

const cover = {
    backgroundImage: `url(${couple})`,
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

class ProfileView extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-light-green" fluid>
                <Navigation />
                <Container className="reset flex-center flex-column vh-100" fluid>
                    <Row className="bg-beige shadow-sm rounded m-auto w-75 reset d-flex flex-column-reverse flex-lg-row">
                        <Col lg={7} md={12} style={cover}><ProfileReview className="text-light" /></Col>
                        <Col lg={5} md={12} className="p-lg-5 p-md-0"><ProfileSections /></Col> 
                    </Row>      
                </Container> 
           </Container>
          
            

            )
        }
      
    }

export default ProfileView;
