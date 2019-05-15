import React, {Component} from 'react';

import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';

import laptop from '../../images/laptop.jpg';

class ContactUs extends Component {
    render(){
        return (
            <Container className="section-wrapper" fluid>
                <h2 className="">Still Have a Question? Contact Us!</h2>
                <Row className="section text-align-right m-0">
                    <Col md={6} className="p-0">
                        <Image src={laptop} className="w-100"/>
                    </Col>
                    <Col md={6} className="flex-center section align-items-stretch flex-column">
                        <Form className="flex-center align-items-stretch flex-column font-med p-5">
                            <Form.Group controlId="" className="d-flex flex-column align-items-start">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="your fullname" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="" className="d-flex flex-column align-items-start">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="your email" />
                                <Form.Text className="text-muted">
                                     *We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="" className="d-flex flex-column align-items-start">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="your phone number" />
                            </Form.Group>
                            <Form.Group controlId="" className="d-flex flex-column align-items-start">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="warning" type="submit" className="text-light bg-green border-0">send</Button>
                        </Form>
                    </Col>        
                </Row>           
            </Container>
        )
    }
}

export default ContactUs;