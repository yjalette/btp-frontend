import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';

const PaymentInfo = (props) => {
    
    return (
        <Container className="flex-center flex-column mt-5" fluid>
            <div className="flex-center">
                <h4>Payment Details</h4>
            </div>
            <Cards
      number={input.number.value}
      name={input.name.value}
      expiry={input.expiry.value}
      cvc={input.cvc.value}
      focused={state.focused}
    />
            <Form className="w-100 p-3" onSubmit={props.handleSubmit}>
                <Form.Group>
                    <Form.Label>CARD NUMBER</Form.Label>
                    <Form.Control type="number" className="" placeholder="Valid Card Number" name="cardNumber" onChange={props.handleChange} />
                </Form.Group>
                <Row>
                    <div className="col-xs-7 col-md-7">
                        <Form.Group>
                            <Form.Label>EXPIRATION DATE</Form.Label>
                            <Form.Control type="number" className="" placeholder="MM / YY" name="expDate" onChange={props.handleChange} />
                        </Form.Group>
                    </div>
                    <div className="col-xs-5 col-md-5 float-xs-right">
                        <Form.Group>
                            <Form.Label>CV CODE</Form.Label>
                            <Form.Control type="number" className="" name="cvc" placeholder="CVC" onChange={props.handleChange} />
                        </Form.Group>
                    </div>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>CARD OWNER</Form.Label>
                            <Form.Control type="text" className="" placeholder="Card Owner Fullname" name="ownnerName" onChange={props.handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="my-3 float-right">
                    <Col xs={12}><button type="submit" className="butn" onSubmit={props.handleSubmit}>Process payment</button></Col>
                </Row>
            </Form>

        </Container>
    )
}

export default PaymentInfo;