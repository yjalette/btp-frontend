import React, {Component} from 'react';

import {Row, Col, Container, Card} from 'react-bootstrap';



class Fees extends Component {
    render() {
        return (
         <Container className="section-wrapper shadow-lg" fluid>
            <h2 className="non">Our Fees</h2>
            <Row className="section flex-center w-100">
                <Col sm={12} md={6} className="text-center none"><span className="display-4 rotated">Our Fees Include:</span></Col>
                <Col sm={12} md={6} className="p-0">
                <Card className="myCard flex-center">
                    <i className="fa fa-home font-md"></i>
                    <p className="text-lowercase p-2">A HAND SELECTED HOSTEL FROM OUR VERIFIED PARTNERS</p>
                </Card>
                <Card className="myCard flex-center">
                    <i className="fa fa-book"></i>
                    <p className="text-lowercase p-2">OUR BACKPACKING 101 E BOOK</p>
                </Card>
                <Card className="myCard flex-center">
                    <i className="fa fa-phone-square"></i>
                    <p className="text-lowercase p-2">HANDS ON SERVICE BEFORE AND DURING YOUR TRIP</p>
                </Card>
                <Card className="myCard flex-center">
                    <i className="fa fa-dollar"></i>
                    <p className="text-lowercase p-2">20% OFF PROMO CODE FOR YOUR NEXT TRIP</p>
                </Card>    
                </Col>   
            </Row>
        </Container>
        )
    }
}

export default Fees;