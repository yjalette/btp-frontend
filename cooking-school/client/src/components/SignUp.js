import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import vasoEyesDown from '../images/vaso-eyesDown.jpg';
import vasoBar from '../images/vaso-bar.jpg'

class SignUp extends Component {
    render() {
        return (
            <div className="bg-purple p-2 position-relative w-100 shadow p-3 mb-5">
                <Card className="flex flex-column border-0 align-content-center signUp-wrapper">
                    <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-xs-column signUpImages">
                        <Card.Img variant="top" src={vasoEyesDown} className="w-100 p-3 shadow p-3 mb-5" />
                        <Card.Img variant="top" src={vasoBar} className="w-100 p-3 shadow p-3 mb-5" />
                    </div>
                    <Card.Body className="flex flex-column border-0 align-content-center p-3"> 
                            <h1>Interested in instructor-led online courses?</h1>
                            <Button className="bg-purple p-2 m-4" variant="outline-light">get a free consultation</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default SignUp;

