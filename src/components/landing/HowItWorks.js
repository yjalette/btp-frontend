import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import apply from '../../images/laptop-beige.png';
import connect from '../../images/links-beige.png';
import go from '../../images/plane-beige.png';

const applyImg = `${apply}`;

const connectImg = `${connect}`;

const goImg = `${go}`;

const arr = [{
    style: {backgroundColor: "#f5f1ed"},
    img: applyImg,
    title: 'APPLY',
    descirption: 'Fill out our short form and we will hand select one of our verified hostels partners to give you a perfect volunteer abroad experience.'
},
{
    style: {backgroundColor: "#f5f1ed"},
    id: 'connectCol',
    img: connectImg,
    title: 'CONNECT',
    descirption: 'Our team will develop a short list of perfect hostels for you to choose from, including exactly the job expected and what you\'ll get in return.'
},
{
    style: {backgroundColor: "#f5f1ed"},
    img: goImg,
    title: 'GO',
    descirption: 'BeyondThePack will be with you through your whole experience with guides, an ebook and round the clock help should you need it'
}];

const HowItWorks = () => (
    <Container className="section-wrapper" fluid>
        <h2 className="">How It Works</h2>
        <Row className="section m-0 py-5">
            {arr.map(el => (
                <Col key={el.title} sm={12} md={4} id={el.id} className="text-center d-flex flex-column align-items-center justify-content-between bg-beige cover-image" style={el.style}>
                    <Image src={el.img} className="w-50" />
                    <h4 className="text-green p-1">{el.title}</h4>
                    <div className="text-muted font-med">
                        <p>{el.descirption}</p>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
)


export default HowItWorks;