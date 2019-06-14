import React, {Component} from 'react';

import Navigation from '../nav/Navigation';
import {Container, Row, Col} from 'react-bootstrap';
import JobSections from './JobSections';
import HostelSlider from '../hostel/HostelSlider';


class JobListing extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-beige h-100" fluid>
                <Navigation />
                <h2 className="text-left">Job Listing <input type="text" placeholder="search..." className="float-right w-25 p-1 bg-light-green rounded" /></h2>
                <Container className="reset flex-center p-0 h-100" fluid>
                    <Row className="shadow-sm rounded w-100 h-100 bg-light-green reset flex-center align-items-start flex-column-reverse align-items-between flex-xl-row">
                        <Col xl={6} lg={12} className="bg-beige p-2 d-flex flex-column justify-content-between align-items-start"><JobSections /></Col>
                        <Col xl={6} lg={12} className="p-0"><HostelSlider /></Col> 
                    </Row>      
                </Container> 
            </Container> 
            )
        }
      
    }

export default JobListing;