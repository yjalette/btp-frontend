import React from 'react';

import {Jumbotron, Container, Button} from 'react-bootstrap';

const HeroImage = () => (
    <Jumbotron className="heroImage m-0 height" fluid> 
        <Container className="p-5 header shadow-lg p-3 mb-5 rounded">
            <h1 className="font-weight-bolder">Where can 2$ a day take you?</h1>
            <p>Spend a month anywhere in the world exchanging your time and talents for accomodations.</p>
            <Container className="flex-center flex-row">
                <Button variant="warning" className="m-1">Get Started</Button>
                <Button variant="warning" className="m-1">Wanna Be A Host?</Button>
            </Container>
        </Container>
    </Jumbotron>
)


export default HeroImage;