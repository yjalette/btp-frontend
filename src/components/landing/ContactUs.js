import React, {Component} from 'react';

import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';

import laptop from '../../images/laptop.jpg';

const group = 'd-flex flex-column align-items-start';

class ContactUs extends Component {
    render(){
        return (
            <Container className="wrapper" fluid>
                <h2 className="">Still Have a Question? Contact Us!</h2>
                <Row className="section text-align-right m-0 h-100">
                    <Col sm={12} lg={6}  className="p-0">
                        <Image src={laptop} className="w-100"/>
                    </Col>
                    <Col sm={12} lg={6} className="flex-center section align-items-stretch flex-column">
                        <Form className="flex-center align-items-stretch flex-column font-med p-5">
                            <Form.Group controlId="contact-fullName" className={group}>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="your fullname" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="contact-email" className={group}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="your email" />
                                <Form.Text className="text-muted">
                                     *We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="contact-number" className={group}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="your phone number" />
                            </Form.Group>
                            <Form.Group controlId="contact-message" className={group}>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="" type="submit" className="butn">send</Button>
                        </Form>
                    </Col>        
                </Row>           
            </Container>
        )
    }
}

export default ContactUs;