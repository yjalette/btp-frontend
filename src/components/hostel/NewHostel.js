import React, {Component} from 'react';

import Navigation from '../nav/Navigation';
import {Container, Row, Col} from 'react-bootstrap';

import picture from '../../images/check-in.jpg';
import NewHostelForm from './NewHostelForm';

const cover = {
    backgroundImage: `url(${picture})`,
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

class NewHostel extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-light-green h-100" fluid>
                <Navigation />
                <h2 className="text-left">New Hostel</h2>
                <Container className="reset flex-center align-items-start  my-xl-5 m-0" fluid>
                    <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-xl-row">
                        <Col xl={6} lg={12} style={cover} className="height-sm"></Col>
                        <Col xl={6} lg={12} className="p-5"><NewHostelForm /></Col> 
                    </Row>      
                </Container> 
            </Container> 
            )
        }
      
    }

export default NewHostel;