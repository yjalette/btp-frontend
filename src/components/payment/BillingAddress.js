import React from 'react';
import { Form, Col, Container } from 'react-bootstrap';

import { CountryDropdown } from 'react-country-region-selector';

const BillingAddress = (props) => {

    return (
    <Container fluid className="flex-center flex-column bb">
        <div className="flex-center">
            <h4>Billing Address</h4>
        </div>
        <Form className="p-3">
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" name="address1" onChange={props.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={props.handleChange}/>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control  placeholder="Dublin" name="city" onChange={props.handleChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" onChange={props.selectCountry} name="country"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="number" onChange={props.handleChange} name="postCode"/>
                </Form.Group>
            </Form.Row>

            <Form.Row className="my-5 float-right">
                        <Col xs={12}>
                            <button type="click" className="butn" onClick={props.handleContinue}>continue</button>
                        </Col>
            </Form.Row>
        </Form>
    </Container>

    )}

export default BillingAddress;