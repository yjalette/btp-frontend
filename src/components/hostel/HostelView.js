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
                <Container className="reset flex-center p-0 bg-beige" fluid>
                    <Row className="shadow-sm rounded w-100 h-100 reset flex-center flex-column-reverse align-items-between flex-lg-row">
                        <Col xl={5} lg={12} className="p-5 d-flex flex-column justify-content-around align-items-center"><HostelSections /></Col>
                        <Col xl={7} lg={12} className="p-0"><HostelSlider /></Col>  
                    </Row>      
                </Container> 
           </Container> 

            )
        }
      
    }

export default HostelView;
