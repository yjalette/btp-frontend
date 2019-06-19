import React from 'react';
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

const Payment = () => (
    <Container className="section-wrapper bg-light-green h-100" fluid>
        <Navigation />
        <h2 className="text-left">Payment</h2>
        <Container className="reset flex-center p-0 h-100" fluid>
            <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-xl-row">
                <Col xl={6} lg={12} style={cover} className="height-sm"></Col>
                <Col xl={6} lg={12} className="p-lg-5 p-md-2">
                    <Row className="flex-center bg-beige py-5">
                        <Col xs={12}><BillingAddress /></Col>
                        <Col xs={12}><PaymentInfo /></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Container>
)

export default Payment;