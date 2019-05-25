import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import hostel from '../../images/hostel-profile.jpg';

const cover = {
    backgroundImage: `url(${hostel})`,
    height: '20px',
    width: '20px'
}

class ProfileReview extends Component {

    render() {
        return (
                <Container className="flex-center h-100 flex-column p-5">
                        <section className="d-flex align-items-start flex-column p-2"> 
                            <span className="font-med handwritting text-light">"Mike exceeds expectations in the role of a bartender. He adapts to change easily, works well under pressure with a positive attitude and is detail-oriented. Mike goes beyond the call of duty by seeking out and following up on additional responsibilities, and contributes frequently to department meetings."</span>          
                        </section>
                        <section className="d-flex flex-row align-self-end p-2">
                            <span className="bg-img-col rounded-circle" style={cover}></span>
                            <section className="d-flex flex-column  p-2">
                                <h5 className="font-weight-bold text-light">Ipanema Beach Hostel</h5>
                                <div className="p-3 text-warning font-med">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </section>
                        </section>
                 </Container>          
        )
    }
}

export default ProfileReview;