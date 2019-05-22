import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

import hostel from '../../images/hostel-profile.jpg';

const cover = {
    backgroundImage: `url(${hostel})`,
    height: '20px',
    width: '20px'
}

class ProfileReview extends Component {

    render() {
        return (
                <section className="d-flex align-items-end flex-column p-2 mt-3">
                        <section className="d-flex align-items-start flex-column p-2"> 
                            <p className="muted font-sm font-italic">"Mike exceeds expectations in the role of a bartender. He adapts to change easily, works well under pressure with a positive attitude and is detail-oriented. Mike goes beyond the call of duty by seeking out and following up on additional responsibilities, and contributes frequently to department meetings."</p>          
                        </section>
                        <section className="d-flex flex-row justify-content-right p-2">
                            <span className="bg-img-col rounded" style={cover}></span>
                            <section className="d-flex flex-column p-2">
                                <h5 className="font-weight-bold">Ipanema Beach Hostel</h5>
                                <div className="p-3">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </section>
                        </section>
                 </section>          
        )
    }
}

export default ProfileReview;