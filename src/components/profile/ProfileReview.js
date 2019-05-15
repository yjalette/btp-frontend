import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import hostel from '../../images/hostel-profile.jpg';

const cover = {
    backgroundImage: `url(${hostel})`,
    height: '250px',
    width: '250px'
}

class ProfileReview extends Component {

    render() {
        return (
                <Container className="p-md-5 p-4 bg-beige rounded">
                    <Row>
                        <Col md={6} sm={12} className="flex-center flex-column w-100 p-5">
                            <span className="bg-img-col" style={cover}></span>
                            <div className="p-3">
                                <h4>Ipanema Beach Hostel</h4>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </Col>
                        <Col md={6} sm={12} className="d-flex align-items-start flex-column w-100 p-5"> 
                            <p className="muted font-sm">"Mike exceeds expectations in the role of a bartender. He adapts to change easily, works well under pressure with a positive attitude and is detail-oriented. Mike goes beyond the call of duty by seeking out and following up on additional responsibilities, and contributes frequently to department meetings."</p>          
                      </Col>
                    </Row>          
             </Container>
        )
    }
}

export default ProfileReview;