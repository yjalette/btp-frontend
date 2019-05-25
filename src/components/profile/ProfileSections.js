import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AboutUser from './AboutUser';

import profile from '../../images/profile.jpg';
import frame from '../../images/frame.png';
import stamp from '../../images/stamp.png';

const cover = {
    backgroundImage: `url(${frame})`
}

const cover2 = {
    backgroundImage: `url(${profile})`
}

const cover3 = {
    backgroundImage: `url(${stamp})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '300px'
}

class ProfileRows extends Component {
    state = {
        showMore: false
    }

    handleClick = () => {
        this.setState({
            showMore: true
        })
    }

    render() {
        return (
                <section className="p-md-5 p-sm-3">
                    <section className="d-flex justify-content-between flex-row mt-2 p-2">      
                        <div className="fullname-profile flex-center align-items-start flex-column p-2">
                            <h4>Alex Spielberg</h4>
                            <div className="p-1 text-warning font-med">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                        {/* <section className="" style={cover3}></section>  */}
                        <section className="profile-image bg-img-col flex-center" style={cover}>
                            <span className="profile-image bg-img-col " style={cover2}></span>
                        </section> 
                    </section>
                    <section className="d-flex align-items-start flex-column mt-2">
                            <section className="p-1 font-med text-secondary">birthday: <span className="handwritting">16.08.1996</span></section>
                            <section className="p-1 font-med text-secondary">language: <span className="handwritting">German</span></section>
                            <section className="p-1 font-med text-secondary">occupation: <span className="handwritting">Waiter</span></section>
                            <section className="p-1 font-med text-secondary">username: <span className="handwritting">mike96</span></section>
                            <section className="p-1 font-med text-secondary">country: <span className="handwritting">Germany</span></section>
                            <section className="p-1 font-med text-secondary">spoken language: <span className="handwritting">English, French, Polish</span></section>
                            <AboutUser showMore={this.state.showMore} text="Communicator. Web guru. Food fan. Hipster-friendly introvert" handleClick={this.handleClick} />
                    </section>  
                        {/* <Link className="butn text-center w-auto float-right" to="/profile-edit">Edit</Link>  */}
                </section>  
        )
    }
}

export default ProfileRows;