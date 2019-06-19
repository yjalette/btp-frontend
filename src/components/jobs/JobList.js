import React, { Component } from 'react';

import Navigation from '../nav/Navigation';
import { Container } from 'react-bootstrap';
import JobListing from './JobListing';
import '../messenger/Messenger.css'

class JobList extends Component {
    render() {
        return (
            <Container className="section-wrapper bg-beige h-100" fluid>
                <Navigation />
                <h2 className="text-left">Job Listings </h2>
                <div className="headind_srch border-0 py-5">
                    <div className="srch_bar w-100">
                        <div className="stylish-input-group">
                            <input type="text" className="search-bar" placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                            </span>
                        </div>
                    </div>
                </div>
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