import React, {useState} from 'react';
import { Form, Col, Container } from 'react-bootstrap';

import { CountryDropdown } from 'react-country-region-selector';

const BillingAddress = () => {
    const [country, setCountry] = useState();
    const [values, setValues] = useState({address1: '', address2: '', postCode: 12345});

    const selectCountry = val => {
        setCountry({country: val})
    }

    const handleValuesChange = e => {
        const {name, value} = e.target;
        console.log(value)
        setValues({ ...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values, country)
    }

    return (
    <Container fluid className="flex-center flex-column bb">
        <div className="flex-center">
            <h4>Billing Address</h4>
        </div>
        <Form className="p-3" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" name="address1" onChange={handleValuesChange}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={handleValuesChange}/>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control  placeholder="Dublin" name="city" onChange={handleValuesChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" onChange={selectCountry} name="country"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="number" onChange={handleValuesChange} name="postCode"/>
                </Form.Group>
            </Form.Row>

            <Form.Row className="my-5 float-right">
                        <Col xs={12}>
                            <button type="submit" className="butn" onSubmit={handleSubmit}>continue</button>
                        </Col>
            </Form.Row>
        </Form>
    </Container>

    )}

export default BillingAddress;