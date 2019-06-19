import React, {Component} from 'react';
import Navigation from '../nav/Navigation';
import HostelSections from './HostelSections';

import {Container, Row, Col} from 'react-bootstrap';
import HostelSlider from './HostelSlider';

class HostelView extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-light-green" fluid>
                <Navigation />
                <h2>Sunny H-Tel</h2>
                <Container className="reset flex-center p-0 bg-light-green" fluid>
                    <Row className="bg-beige shadow-sm rounded p-5 w-75 h-100 my-5 reset flex-center flex-column-reverse flex-xl-row">
                        <Col xl={6} lg={12} className="p-0 flex-center flex-column align-items-around h-100 flex-fill"><HostelSections /></Col>
                        <Col xl={6} lg={12} className="p-0 h-100 flex-fill" style={{backgroundColor: 'black'}}><HostelSlider /></Col>  
                    </Row>      
                </Container> 
            </Container> 

            )
        }
      
    }

export default HostelView;
