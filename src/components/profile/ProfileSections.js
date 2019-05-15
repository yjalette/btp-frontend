import React, {Component} from 'react';
import {Button, Container, Col, Row} from 'react-bootstrap';

import profile from '../../images/profile.jpg';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
}

const cover = {
    backgroundImage: `url(${profile})`,
}

class ProfileSections extends Component {

    render() {
        return (
                <Container className="p-md-5 p-4">
                    <Row>
                        <Col xl={12} className="d-flex align-items-start flex-row w-100 p-5">
                            <span className="profile-image bg-img-col" style={cover}></span>
                            <div className="fullname-profile p-3">
                                <h4>Alex </h4>
                                <h4>Spielberg</h4>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </Col>
                        <Col xl={12} className="d-flex align-items-start flex-column w-100 p-5">
                            <section style={style} className="flex-md-row">
                                <h6>birthday:</h6> 
                                <span className="font-med">16.08.1996</span>
                            </section>
                            <section style={style} className="flex-md-row">
                                <h6>language:</h6> 
                                <span className="font-med">Polish</span>
                            </section>
                            <section style={style} className="flex-md-row">
                                <h6>occupation:</h6> 
                                <span className="font-med">Graphic Designer</span>
                            </section>
                            <section style={style} className="flex-md-row">
                                <h6>username: </h6> 
                                <span className="font-med">mike96</span>
                            </section>
                            <section style={style} className="flex-md-row">
                                <h6>country: </h6>
                                <span className="font-med">Poland</span>
                            </section>
                            <section style={style} className="flex-md-row">
                                <h6>spoken language: </h6> 
                                <span className="font-med">Polish, English, German</span>
                            </section>
                            <br />
                            <section>
                            <br />
                                <h4>About Mike:</h4>
                                <span className="font-med"  id="bio">"Communicator. Web guru. Food fan. Hipster-friendly introvert. Tv enthusiast. Gamer. Thinker. Twitter lover <Button variant="" className="p-3 small text-light">read more...</Button>"</span>
                            </section>
                      </Col>
                    </Row>
                        
             </Container>
        )
    }
}

export default ProfileSections;