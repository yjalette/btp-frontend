import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../images/hostel-logo2.png';
import {label, field} from '../constants/index';
import Descriptions from '../Descriptions';

const description = 'Lorem ipsum dolor sit amet, ea vix elitr instructior. Ex tamquam molestie ius. Euismod eleifend disputando id mei, libris omittam legendos vix an, dolore scaevola in cum. Et mea regione adolescens, nominavi probatus at sit. Ad eum insolens gloriatur, ei pri imperdiet gloriatur.'

class JobSections extends Component {
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
                <section className="d-flex justify-content-between w-100">
                    <section className="flex-center flex-column p-2 w-100">
                        <span><img src={profile} className="hostel-logo img-responsive" alt="logo"/></span>
                        <span className="display-4 my-1">Sunny H-Tel </span>
                        <span className="font-sm my-1"><span className="fa fa-map-marker text-green font-med px-2"></span>Barcelona, Spain </span>
                    </section>
                </section>
                <section className="d-flex flex-column py-3">
                    <section className={field}>
                        <span className={label}>job title: </span>
                        <span className="handwritting">waiter</span>
                    </section>
                    <section className={field}>
                        <span className={label}>hours per week: </span>
                        <span className="handwritting">24</span>
                    </section>
                    <section className={field}>
                        <span className={label}>open positions: </span>
                        <span className="handwritting">3</span>
                    </section>
                    <section className={field}>
                        <span className={label}>experience: </span>
                        <span className="handwritting">2 years</span>
                    </section>
                    <section className={field}>
                        <span className={label}>deadline: </span>
                        <span className="handwritting">14.8.2019</span>
                    </section>
                    <section className={field}>
                        <span className={label}>languages: </span>
                        <span className="handwritting">english, french</span>
                    </section>
                    <section className={field}>
                        <span className={label}>spoken language: </span>
                        <span className="handwritting">Spanish, Portuguese, English</span>
                    </section>
                    <section className={field}>
                        <span className={label}>BTP offers: </span>
                        <span className="handwritting">maiestatis liberavisse deterruisset</span>
                    </section>
                    <section className={field}>
                        <span className={label}>hostel offers: </span>
                        <span className="handwritting">viderer diceret maluisset et</span>
                    </section>
                    <section className={field}>
                        <span className={label}>descriptions: </span>
                        <Descriptions showMore={this.state.showMore} text={description} handleClick={this.handleClick}/>
                    </section>
                </section>
                <section className="d-flex justify-content-around w-100 ">
                    <Link className="butn text-center mx-1 flex-fill" to="/hostel-edit">Edit</Link>
                    <Link className="butn text-center mx-1 flex-fill" to="/profile-edit">Delete</Link>
                </section>

            </>
        )
    }
}

export default JobSections;