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
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
      return(
            <Container className="section-wrapper vh-100 flex-center flex-column justify-content-start" fluid>
                <h2>Registration</h2>
                <Container className="m-md-5 m-sm-0">
                    <Row className="bg-light-green rounded shadow-sm">
                        <Col md={6} sm={12} className="height-sm" style={cover}></Col>
                        <Col md={6} sm={12}>
                            <Form className="p-md-5 p-sm-1 mt-2" onSubmit={this.handleSubmit}>
                                <Form.Group id="firstName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">First Name: </Form.Label>
                                    <Form.Control type="text" placeholder="" id="firstName" className="bb w-auto text-right" onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="lastName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">Last Name: </Form.Label>
                                    <Form.Control type="text" placeholder="" id="lastName" className="bb w-auto text-right" onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="userName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">UserName: </Form.Label>
                                    <Form.Control type="text" placeholder="" id="userName" className="bb w-auto text-right" onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="email-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">Email Address: </Form.Label>
                                    <Form.Control type="email" placeholder=""className="bb w-auto text-right"  id="email" onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="password-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">Password: </Form.Label>
                                    <Form.Control type="password" placeholder="" id="password"className="bb w-auto text-right" onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting."/>
                                </Form.Group>
                                <Button variant="" type="submit" className="bg-green text-light float-right m-3">
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
