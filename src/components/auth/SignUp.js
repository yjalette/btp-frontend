import React, {Component} from 'react';

import {Form, Button, Row, Col, Container} from 'react-bootstrap';

import adventure from '../../images/adventure.jpg';

const cover = {
    backgroundImage: `url(${adventure})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const initState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    firstNameError: '',
    lastNameError: '',
    userNameError: '',
    emailError: '',
    passwordError: '',
    errors: ''

};

class SignUp extends Component {

    state = initState;

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {

        let firstNameError = '';
        let lastNameError = '';
        let userNameError = '';
        let emailError = '';
        let passwordError = '';
        let errors = ''

        if (!this.state.firstName || !this.state.lastName || !this.state.userName || !this.state.password){
            errors = "All fields must be filled"
        }

    
        if (!this.state.email.includes("@")){
            emailError = "email must include @"
        }

        if (this.state.userName.length < 5){
            userNameError = "username is too short"
        }

        const re = /[0-9]+/g;
        const isPassword = re.test(this.state.password);

        if (!isPassword){
            passwordError = "password must contain at least 8 characters, and at least one digit"
        }

        console.log({isPassword, passwordError});

        if (emailError || errors || userNameError || passwordError || firstNameError || lastNameError) {
            this.setState({ emailError, errors, userNameError, passwordError, firstNameError, lastNameError });
            return false;
        }

        return true;
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        // if (!isValid) {
        //     console.log(this.state);
        //     this.setState(initState);
        // } 
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
                                <h6 className="text-center" style={{color: 'red'}}>
                                        {this.state.errors}<br /> 
                                        {this.state.emailError} <br /> 
                                        {this.state.userNameError} <br />
                                        {this.state.passwordError}
                                </h6>
                                <Form.Group id="firstName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">First Name: </Form.Label>
                                    <Form.Control type="text" placeholder="" name="firstName" className="bb w-auto text-right" value={this.state.firstName} onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="lastName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">Last Name: </Form.Label>
                                    <Form.Control type="text" placeholder="" name="lastName" className="bb w-auto text-right" value={this.state.lastName} onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="userName-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">User Name: </Form.Label>
                                    <Form.Control type="text" placeholder="" name="userName" className="bb w-auto text-right" value={this.state.userName} onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="email-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label className="m-0 text-light">Email Address: </Form.Label>
                                    <Form.Control type="email" placeholder=""className="bb w-auto text-right"  name="email" value={this.state.email} onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group id="password-group" className="d-flex flex-row align-items-center justify-content-between font-med">
                                    <Form.Label required className="m-0 text-light">Password: </Form.Label>
                                    <Form.Control type="password" placeholder="" name="password"className="bb w-auto text-right" value={this.state.password} onChange={this.handleChange} plaintext/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check label="Agree to terms and conditions" feedback="You must agree before submitting."/>
                                </Form.Group>
                                <Button variant="" type="submit" className="bg-green text-light float-right m-3">sign up</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
          </Container>
          
            

            )
        }
      
    }

export default SignUp;
