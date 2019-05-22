import React, {Component} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                    <Row className="flex-center align-content-between w-100 p-md-5 p-sm-2 h-100 bbb">
                        <Col xl={12} className="flex-center justify-content-between flex-row w-100 p-2"> 
                                <div className="flex-center">
                                    <span className="profile-image bg-img-col" style={cover}></span>
                                </div>       
                                <div className="fullname-profile p-3 text-right">
                                    <h4>Alex Spielberg</h4>
                                    <Link className="butn w-100 text-center" to="/profile-edit">Edit</Link> 
                                    <div className="p-3">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                        </Col>
                        <Col xl={12} className="d-flex align-items-start flex-column w-100 p-2 mt-2">
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
                            <section style={style} className="flex-md-row">
                            <br />
                            <br />
                                <span className="font-sm muted">"Communicator. Web guru. Food fan. Hipster-friendly introvert. Tv enthusiast. Gamer. Thinker. Twitter lover <Button variant="" className="small text-dark">read more...</Button>"</span>
                            </section>
                      </Col>  
                    </Row>  
        )
    }
}

export default ProfileSections;