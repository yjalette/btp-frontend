import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const PaymentInfo = () => {
    const [inputs, setInputs] = useState({ cardNumber: "", expDate: "", cvc: "", ownerName: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    }

    // const isValid = () => {
    //     const { cardNumber, expDate, cvc, ownerName } = inputs;
    //     if (cardNumber.charAt(0) === "3"){
    //         if (cardNumber.length > 15) {
    //             console.log('check your card number')
    //         }
    //     }
    // }

    const handleSubmit = e => {
        e.preventDefault();
        // isValid(inputs);
        console.log(inputs)
    }

    return (
        <Container className="flex-center flex-column mt-5" fluid>
            <div className="flex-center">
                <h4>Payment Details</h4>
            </div>
            <Form className="w-100 p-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>CARD NUMBER</Form.Label>
                    <Form.Control type="number" className="" placeholder="Valid Card Number" name="cardNumber" onChange={handleChange} />
                </Form.Group>
                <Row>
                    <div className="col-xs-7 col-md-7">
                        <Form.Group>
                            <Form.Label>EXPIRATION DATE</Form.Label>
                            <Form.Control type="number" className="" placeholder="MM / YY" name="expDate" onChange={handleChange} />
                        </Form.Group>
                    </div>
                    <div className="col-xs-5 col-md-5 float-xs-right">
                        <Form.Group>
                            <Form.Label>CV CODE</Form.Label>
                            <Form.Control type="number" className="" name="cvc" placeholder="CVC" onChange={handleChange} />
                        </Form.Group>
                    </div>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>CARD OWNER</Form.Label>
                            <Form.Control type="text" className="" placeholder="Card Owner Fullname" name="ownnerName" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="my-3 float-right">
                    <Col xs={12}><button type="submit" className="butn" onSubmit={handleSubmit}>Process payment</button></Col>
                </Row>
            </Form>

        </Container>
    )
}

export default PaymentInfo;