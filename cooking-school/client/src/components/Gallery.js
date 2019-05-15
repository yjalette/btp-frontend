import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import food from '../images/food.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import food7 from '../images/food7.jpg';
import food8 from '../images/food8.jpg';

class Gallery extends Component {
    render() {
        return (
            <Row className="gallery bg-purple m-0">
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food2} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food3} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food4} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food5} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food6} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food7} alt="" className="w-100" />
                </Col>
                <Col xs={12} sm={6} md={3} className="p-1" >
                    <img src={food8} alt="" className="w-100" />
                </Col>
            </Row>
        )
    }
}

export default Gallery;