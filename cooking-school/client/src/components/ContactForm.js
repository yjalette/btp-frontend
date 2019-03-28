import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

class ContactForm extends Component {
    constructor(){
        super();

        this.state = {
            name: "",
            email: "",
            message: "",
            sent: false,
            buttonText: 'Send Message'
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Was Sent'
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit (e) {
        e.preventDefault();

        this.setState({
            buttonText: '...sending'
        })
        
    
        const form = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/', form)
        .then( res => {
            this.setState({ sent: true}, this.resetForm())
            console.log("yeahhh")
        })
        .catch( () => {
            console.log('message was not sent')
        })
    }

    

    render(){

        return (
            <Form className="p-5" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Sally Gattty" onChange={this.handleChange} />
                    </Form.Group>

                     <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows="3" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{ this.state.buttonText }</Form.Label>
                        <Form.Control type="submit" name="submit"/>
                    </Form.Group>
            </Form>
        )
    }
}

export default ContactForm;