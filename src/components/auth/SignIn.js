import React, {Component} from 'react';

import {Form, Button} from 'react-bootstrap';

class SignIn extends Component {
    render(){
      return(
            <Form className="p-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <Button variant="" type="submit" className="bg-light-green text-green float-right">
                    login
                </Button>
            </Form>

            )
        }
      
    }

export default SignIn;
