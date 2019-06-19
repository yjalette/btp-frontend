import React from 'react';

import {Row, Col, Container, Card, Image} from 'react-bootstrap';

import hostel from '../../images/hostel.png';
import planet from '../../images/planet.png';
import traveler from '../../images/traveler.png';

const arr = [
    {image: hostel, title: "For Hostels:", text: "BeyondThePack gives your Hostel access to enthusiastic travelers from all around the globe ready to help your hostel thrive." },
    {image: planet, title: "For A Life Changing Experience:", text: "BeyondThePack believes that every person on the planet should be able to experience the world and all it has to offer regardless of your own personal resources." },
    {image: traveler, title: "For Travelers:", text: "BeyondThePack offers a seamless matchmaking service between travelers and hostels around the world, exchanging part time work for accommodations." }
]

const About = (props) => (
                    <Container className="wrapper shadow-lg" fluid ref={props.innerRef}>
                        <h2 className="">About Us</h2>
                        <Row className="section flex-center w-100">
                            <Col sm={12} lg={5} className="text-center none">
                                <span className="display-4 rotated">BeyondThePack</span>
                            </Col>
                            <Col sm={12} lg={7} className="p-0">
                                {arr.map(el => (
                                    <Card className="myCard flex-center" key={el.title}>
                                        <Image className="p-2" src={el.image} alt="hostel" />
                                        <h5 className="font-med p-2">{el.title}</h5>
                                        <p className="font-sm muted p-2">{el.text}</p>
                                    </Card>
                                ))}  
                            </Col>   
                        </Row>
                    </Container>
                )
   

export default About;