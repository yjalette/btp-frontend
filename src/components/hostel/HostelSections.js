import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../images/hostel-logo2.png';
import Descriptions from '../Descriptions';
import {label} from '../constants/index';

// const type = {
//     beach: "fas fa-umbrella-beach",
//     nature:  "fa fa-tree",
//     city: "fas fa-building"
// }

const field = "d-flex align-items-around justify-content-start p-3 font-med text-secondary flex-xl-row flex-column";

const about = "At Poramba Hostel you find a cozy vibe and chilled out atmosphere. If you´re looking for some relaxing time - this is the place. We´re located in a quiet neighbourhood. Only 4 blocks from the bus station so you can just walk to get here. We working on making Poramba an Eco Friendly Hostel, that´s why we use solar heating system to warm water and use recycled material for building furniture and other artefacts. For your accommodation we offer different options: shared rooms (4, 6 and 8 bed dorms) and double, triple and quadruple rooms. All of them and the dorms with private bathroom, 24 hour hot water, air conditioning and bed linen. You can hire towels at reception. For chilling out there is an outside seating area and a swimming pool. Free Wi-Fi access is available in all hostel and left luggage facilities are available too. We include breakfast. For cooking you can use our full equipped kitchen and any time you want you can enjoy our pool table! Lounge area with TV, music and bar. Going downtown is easy from Porambä"

class HostelSections extends Component {

    state = {
        showMoreDescription: false,
        showMoreHistory: false
    }

    handleHistoryClick = () => {
        this.setState({
            showMoreHistory: true
        })
    }

    handleDescriptionClick = () => {
        this.setState({
            showMoreDescription: true
        })
    }

    render() {
        return (
            <section className="py-3">
                <section className="flex-center align-items-between w-100 h-100">
                    <section className="flex-center flex-column py-2 w-100">
                        <span><img src={profile} className="hostel-logo img-responsive rounded-circle" alt="logo"/></span>
                        <span className="display-4 my-1">Sunny H-Tel</span>
                        <span className="font-sm my-1"><span className="fa fa-map-marker text-green font-med px-2"></span>Barcelona, Spain </span>
                        <div className="p-1 text-warning font-med">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </section>
                </section>
                <section className="d-flex flex-column py-3">
                    <section className={field}>
                        <span className={label}>type: <span className="handwritting">city</span></span>
                    </section>
                    <section className={field}>
                        <span className={label}>address: <span className="handwritting">Calle Gran Vía, 31, Barcelona, Spain</span></span>
                    </section>
                    <section className={field}>
                        <span className={label}>spoken language: <span className="handwritting">Spanish, Portuguese, English</span></span>
                    </section>
                    <section className={field}>
                        <span className={label}>about: <Descriptions showMore={this.state.showMoreDescription} text={about} handleClick={this.handleDescriptionClick}/></span>
                    </section>
                    <section className={field}>
                        <span className={label}>history: <Descriptions showMore={this.state.showMoreHistory} text={about} handleClick={this.handleHistoryClick} /></span>
                    </section>
                </section>
                <section className="flex-center justify-content-between w-50 py-3 m-auto">
                    <Link className="butn text-center mx-1 flex-fill" to="/hostel-edit">Edit</Link>
                    <Link className="butn text-center mx-1 flex-fill" to="/profile-edit">Delete</Link>
                </section>

            </section>
        )
    }
}

export default HostelSections;