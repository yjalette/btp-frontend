import React from 'react';

import {Container} from 'react-bootstrap';

import map from '../../images/map.jpg';

const cover = {
    backgroundImage: `url(${map})`
}

const FavHotels = () => ( 
                            <Container className="section-wrapper bg-img-col flex-center height-sm" style={cover} fluid>
                                <span className="text-light text-center display-4">152 Hostels in 46 Countries. <br />Check Out Some Of Our Favorites</span>
                            </Container>
                        )


export default FavHotels;