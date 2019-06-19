import React, {useState} from 'react';
import PaymentInfo from './PaymentInfo';

import Navigation from '../nav/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import BillingAddress from './BillingAddress';

import payment from '../../images/payment.jpg';

const cover = {
    backgroundImage: `url(${payment})`,
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const Payment = () => {
    const [country, setCountry] = useState();
    const [inputs, setInputs] = useState({address1: '', address2: '', postCode: 12345, cardNumber: "", expDate: "", cvc: "", ownerName: "" });
    const [step, setStep] = useState(0);

    const selectCountry = val => {
        setCountry(val)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    }

    const handleContinue = e => {
        setStep(1)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // isValid(inputs);
        console.log(inputs)
    }


    return (
        <Container className="section-wrapper bg-light-green h-100" fluid>
            <Navigation />
            <h2 className="text-left">Payment</h2>
            <Container className="reset flex-center p-0 h-100" fluid>
                <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-xl-row">
                    <Col xl={6} lg={12} style={cover} className="height-sm"></Col>
                    <Col xl={6} lg={12} className="p-lg-5 p-md-2">
                        <Row className="flex-center bg-beige py-5">
                            {step === 0 && <BillingAddress {...inputs} selectCountry={selectCountry} handleChange={handleChange} handleContinue={handleContinue}/>}
                            {step === 1 && <PaymentInfo {...inputs} handleChange={handleChange} handleSubmit={handleSubmit}/>}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}



export default Payment;