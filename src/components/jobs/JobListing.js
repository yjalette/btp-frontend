import React from 'react';

import { Card} from 'react-bootstrap';
import hostel from '../../images/hostel-people.jpg';

const JobListing = () => (
    <Card style={{ width: '40rem' }} className="m-3">
        <Card.Img variant="top" src={hostel} />
        <Card.Body className="flex-center flex-column font-med align-items-between py-5">
            <Card.Title className="display-4">Sunny H-Tel</Card.Title>
            <Card.Subtitle className="mb-2 text-muted small"><span className="fa fa-map-marker text-green mr-1"></span>Barcelona, Spain</Card.Subtitle>
            <section className="flex-center justify-content-around py-4 w-100">
                <Card.Text><i className="fa fa-address-book text-green mr-1"></i>bartender</Card.Text>
                <Card.Text><i className="fa fa-clock-o text-green mr-1"></i>24 hours</Card.Text>
            </section>
            <section className="flex-center text-light py-4">
                <Card.Link to="#" className="butn">Save</Card.Link>
                <Card.Link to="/job-listing" className="butn">Apply</Card.Link>
            </section>
        </Card.Body>
    </Card>
)

export default JobListing;