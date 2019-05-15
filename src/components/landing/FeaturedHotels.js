import React from 'react';

import {Container, Row, Col, Button} from 'react-bootstrap';

import Bangkok from '../../images/bangkok.jpg';
import Rotterdam from '../../images/rotterdam.jpg';
import Israel from '../../images/israel.jpg';

const BangkokStyle = {
    backgroundImage: `url(${Bangkok})`
}

const RotterdamStyle = {
    backgroundImage: `url(${Rotterdam})`
}

const IsraelStyle = {
    backgroundImage: `url(${Israel})`
}


const FeaturedHotels = () => (
    <Container className="section-wrapper" fluid>
        <h2 className="">Featured Hotels</h2>
        <Row className="section m-0">
            <Col sm={12} md={4} className="bg-img-col flex-center flex-column height" style={BangkokStyle}>       
                <div className="caption"> 
                    <h4>Party In Bangkok</h4>
                    <p className="font-sm">An epic party hostel in Bangkok needs a new worker for their team.</p>
                </div> 
                <Button variant="warning" className="w-100 rounded-0">apply now</Button>      
            </Col>
            <Col sm={12} md={4} className="bg-img-col flex-center flex-column height" style={IsraelStyle}>      
                <div className="caption"> 
                    <h4>Explore The Holy Land</h4>
                    <p className="font-sm">Get lost in Tel Aviv working at a modern and fun boutique hostel.</p>
                </div>      
                <Button variant="warning" className="w-100 rounded-0">apply now</Button>            
            </Col>
            <Col sm={12} md={4} className="bg-img-col flex-center flex-column height" style={RotterdamStyle}>    
                <div className="caption">
                    <h4>Chef It Up In Holland</h4>
                    <p className="font-sm">A beautiful beachside hostel needs some helping hands!</p> 
                </div>  
                <Button variant="warning" className="w-100 rounded-0">apply now</Button>    
            </Col>
        </Row>
    </Container>
)


export default FeaturedHotels;