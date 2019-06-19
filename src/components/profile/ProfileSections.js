import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Descriptions from '../Descriptions';

import profile from '../../images/profile.jpg';

const label = "p-1 font-med text-secondary";
const about = "Banjo ennui letterpress succulents sriracha fixie wolf kombucha freegan fam pour-over wayfarers vexillologist plaid. Taxidermy pabst austin keffiyeh. Roof party tilde listicle, poutine sartorial farm-to-table celiac knausgaard raclette. Cred craft beer street art, deep v flexitarian humblebrag freegan readymade squid chia. Listicle taxidermy whatever fanny pack salvia. Thundercats listicle cliche lumbersexual, 90's affogato kickstarter hell of. Biodiesel ennui la croix raw denim, gochujang listicle taxidermy tote bag tousled cardigan."


class ProfileSections extends Component {
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
            <>
                <section className="p-md-5 p-sm-3">
                    <section className="d-flex justify-content-between flex-row mt-2 p-2">
                        <div className="fullname-profile flex-center align-items-start flex-column p-2">
                            <h4>Alex Spielberg</h4>
                            <div>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                        <section className="flex-center">
                            <img className="profile-image img-responsive rounded-circle" alt="profile-pic" src={profile} />
                        </section>
                    </section>
                    <section className="d-flex align-items-start flex-column mt-2">
                        <section className={label}>birthday: <span className="handwritting">16.08.1996</span></section>
                        <section className={label}>country: <span className="handwritting">Poland</span></section>
                        <section className={label}>occupation: <span className="handwritting">Web designer</span></section>
                        <section className={label}>username: <span className="handwritting">alex96</span></section>
                        <section className={label}>spoken languages: <span className="handwritting">English, French, Polish</span></section>
                        <section className={label}>about: <Descriptions showMore={this.state.showMore} title="about" text={about} handleClick={this.handleClick} /></section>
                    </section>
                </section>
                <Link className="butn text-center w-auto float-right" to="/profile-edit">Edit</Link>
            </>
        )
    }
}

export default ProfileSections;