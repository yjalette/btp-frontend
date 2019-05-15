import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import apply from '../../images/laptop-vec.jpg';
import connect from '../../images/links-vec.jpg';
import go from '../../images/plane-vec.jpg';

const applyStyle = {
    backgroundImage: `url(${apply})`
}

const connectStyle = {
    backgroundImage: `url(${connect})`
}

const goStyle = {
    backgroundImage: `url(${go})`
}

const HowItWorks = () => ( 
                            <Container className="section-wrapper" fluid>
                                <h2 className="">How It Works</h2>
                                <Row className="section m-0">
                                    <Col sm={12} md={4} className="bg-img-col d-flex flex-column align-items-center justify-content-between" style={applyStyle}>
                                        <h4 className="pt-3 text-green top text-center">APPLY</h4>
                                        <div className="text-green font-med">
                                            <p>A service just for you. Fill out our short form and we will hand select one of our verified hostels partners to give you your perfect volunteer abroad experience.</p>        
                                        </div>  
                                    </Col>
                                    <Col sm={12} md={4} className="bg-img-col d-flex flex-column align-items-center justify-content-between" style={connectStyle}>
                                        <h4 className="pt-3 text-beige top text-center" >CONNECT</h4>
                                        <div className="font-med text-beige">
                                            <p>Our team will develop a short list of perfect hostels for you to choose from, including exactly the job expected and what you'll get in return. Simply choose the job you want, pay our fee and your are on your way.</p>
                                        </div>  
                                    </Col>
                                    <Col sm={12} md={4} className="bg-img-col d-flex flex-column align-items-center justify-content-between text-beige" style={goStyle}>
                                        <h4 className="pt-3 text-green top text-center">GO</h4>
                                        <div className="font-med text-green">
                                            <p>Get ready for your trip, but don't think you are alone. BeyondThePack will be with you through your whole experience with guides, an ebook and round the clock help should you need it </p> 
                                        </div>  
                                    </Col>
                                </Row>
                            </Container>
                        )


export default HowItWorks;