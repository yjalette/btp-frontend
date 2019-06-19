import React, { useState } from 'react';

import Navigation from '../nav/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import ChatUsersList from './ChatUsersList';
import Messages from './Messages';
import './Messenger.css'

const Messenger = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClickShow = () => {
        setIsVisible(false)
    }

    const handleClickClose = () => {
        setIsVisible(true)
    }

    return (
        <Container className="section-wrapper bg-light-green" fluid>
            <Navigation />
            <h2 className="text-left">Messenger</h2>
            <Container className="reset flex-center p-0 h-100 messaging py-5" fluid>
                <Row className="bg-light shadow-sm rounded w-75 reset d-flex flex-column flex-xl-row border">
                    <Col xl={6} lg={12} className={isVisible ? 'toggle-block px-0 py-3' : 'toggle-none'}><ChatUsersList handleClickShow={handleClickShow} /></Col>
                    <Col xl={6} lg={12} className={isVisible ?  'toggle-none' : 'toggle-block px-0 py-3'}><Messages handleClickClose={handleClickClose} /></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Messenger;