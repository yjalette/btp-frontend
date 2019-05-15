import React, {Component} from 'react';

import {Row, Col, Container, Card, Image} from 'react-bootstrap';

import hostel from '../../images/hostel.png';
import planet from '../../images/planet.png';
import traveler from '../../images/traveler.png';


class About extends Component {
    render() {
        return (
         <Container className="section-wrapper shadow-lg" fluid>
            <h2 className="">About Us</h2>
            <Row className="section flex-center w-100">
                <Col sm={12} md={6} className="text-center none">
                    <span className="display-4 rotated">About Us</span>
                </Col>
                <Col sm={12} md={6} className="p-0">
                <Card className="myCard flex-center">
                    <Image className="" src={hostel} alt="hostel" />
                    <h5 className="font-med p-2">For Hostels:</h5>
                    <p className="font-sm muted  p-2">BeyondThePack gives your Hostel access to enthusiastic travelers from all around the globe ready to help your hostel thrive.</p>
                </Card>
                <Card className="myCard flex-center">
                    <Image className="" src={planet} alt="planet" />
                    <h5 className="font-med p-2">For A Life Changing Experience:</h5>
                    <p className="font-sm muted  p-2">BeyondThePack believes that every person on the planet should be able to experience the world and all it has to offer regardless of your own personal resources.</p>
                </Card>
                <Card className="myCard flex-center">
                    <Image className="" src={traveler} alt="traveler" />
                    <h5 className="font-med p-2">For Travelers:</h5>
                    <p className="font-sm muted  p-2">BeyondThePack offers a seamless matchmaking service between travelers and hostels around the world, exchanging part time work for accommodations.</p>
                </Card>
                </Col>   
            </Row>
        </Container>
        )
    }
}

export default About;