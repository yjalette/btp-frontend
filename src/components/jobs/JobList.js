import React, {Component} from 'react';

import Navigation from '../nav/Navigation';
import {Container, Row, Col} from 'react-bootstrap';
import JobListing from './JobListing';


class JobList extends Component {
    render(){
      return(
            <Container className="section-wrapper bg-beige h-100" fluid>
                <Navigation />
                <h2 className="text-left">Job Listings </h2>
                <input type="text" placeholder="  search..." className="float-right font-med w-50 py-1 m-2 rounded text-secondary" />
                <Container className="reset flex-center p-2 h-100 flex-column flex-xl-row" fluid>
                    <JobListing />
                    <JobListing />
                    <JobListing />
                    <JobListing />    
                </Container> 
            </Container> 
            )
        }
      
    }

export default JobList;