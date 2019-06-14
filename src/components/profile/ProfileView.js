import React from 'react';

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

const ProfileView = () => (
            <Container className="section-wrapper bg-light-green" fluid>
                <Navigation />
                <h2>My Profile</h2>
                <Container className="reset flex-center align-items-start bg-light-green my-xl-5 m-0" fluid>
                    <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column-reverse flex-xl-row">
                        <Col xl={7} lg={12} style={cover} className="height-sm"><ProfileReview className="text-light" /></Col>
                        <Col xl={5} lg={12} className="p-5"><ProfileSections /></Col> 
                    </Row>      
                </Container> 
           </Container>
        )
       
export default ProfileView;
