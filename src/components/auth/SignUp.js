import React, {Component} from 'react';

import {Form, Button, Row, Col, Container} from 'react-bootstrap';

import adventure from '../../images/adventure.jpg';

const cover = {
    backgroundImage: `url(${adventure})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

class SignUp extends Component {
    render(){
      return(
            <Container className="section-wrapper vh-100" fluid>
                <h2>Registration</h2>
                <Container className="">
                    <Row className="bg-light-green rounded">
                        <Col md={6} sm={12} className="height-sm" style={cover}></Col>
                        <Col md={6} sm={12}>
                            <Form className="p-5">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="John" id="firstName"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Snow" id="lastName"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder="snow55" id="userName"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="jon.snow@gmail.com" id="email"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="*******" id="password"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="remember me"/>
                                </Form.Group>
                                <Button variant="" type="submit" className="bg-green text-light float-right">
                                    sign up
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
          </Container>
          
            

            )
        }
      
    }

export default SignUp;
