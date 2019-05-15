import React from 'react';

import {Container} from 'react-bootstrap';

import couple from '../../images/couple.jpg';

const cover = {
    backgroundImage: `url(${couple})`
}

const Exchange = () => ( 
                            <Container className="section-wrapper bg-img-col flex-center height-sm" style={cover} fluid>
                                <span className="text-light text-center display-4">A Hostel Work Exchange Service That Works For You. Finding Your Perfect Work Abroad Experience.<br /> Every Time.</span>
                            </Container>
                        )


export default Exchange;