import React from 'react';

import {Row, Col, Container, Card} from 'react-bootstrap';

const arr = [
    {
        icon: 'fa fa-home font-md',
        text: 'A HAND SELECTED HOSTEL FROM OUR VERIFIED PARTNERS'
    },
    {
        icon: 'fa fa-book',
        text: 'OUR BACKPACKING 101 E BOOK'
    },
    {
        icon: 'fa fa-phone-square',
        text: 'A HAND SELECTED HOSTEL FROM OUR VERIFIED PARTNERS'
    },
    {
        icon: 'fa fa-dollar',
        text: '20% OFF PROMO CODE FOR YOUR NEXT TRIP'
    }
]

const Fees = (props) => (
         <Container className="section-wrapper shadow-lg" fluid>
            <h2 className="" ref={props.innerRef}>Our Fees</h2>
            <Row className="section flex-center w-100">
                <Col sm={12} lg={5} className="text-center none ">
                    <span className="display-4 rotated">Our Fees Include:</span>
                </Col>
                <Col sm={12} lg={7} className="p-0">
                    { arr.map( el => (
                        <Card className="myCard flex-center p-5" key={el.icon}>
                             <i className={el.icon}></i>
                             <p className="text-lowercase p-2 font-sm">{el.text}</p>
                        </Card> 
                    ))}   
                </Col>   
            </Row>
        </Container>
    )
    

export default Fees;