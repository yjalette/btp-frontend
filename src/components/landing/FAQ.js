import React from 'react';

import {Accordion, Card, Button, Container} from 'react-bootstrap';

const FAQ = (props) => (
    <Container className="section-wrapper shadow-lg rounded" fluid ref={props.innerRef}> 
        <h2 className="align-self-start shadow-sm rounded">FAQ</h2>
        <Accordion defaultActiveKey="" className="shadow-sm rounded section">
            <Card>
                <Card.Header className="">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="font-med">What is a Hostel-Work Exchange?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="faq-body">A hostel-work exchange is a win win strategy for any long term traveler. You share your skills (Maybe you are a gold medal party planner or master chef!) or learn new ones at a hostel which hosts you for around a month. You help at the hostel part time, giving you more than enough time to explore while you're there. You'll get access to a true home away from home, a family atmosphere which will not only help you save money on a long journey but also create lifelong memories in the process.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="font-med">How Long Are The Positions Available?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="faq-body">Hostels normally want people to stay for at least 3 weeks, but generally 4 to 5 is more common.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" className="font-med">What Do Hostels Generally Provide?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="faq-body">Hostels are asked at a minimum to provide a guaranteed bed and a safe place to keep your personal items. Many hostels provide much more! Including food, bar crawls, tours etc.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" className="font-med">Does BeyondThePack Support Me During My Stay?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="faq-body">Yes! We offer plenty of information to be used during your stay, along with friendly customer service should you need anything during your time abroad.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4" className="font-med">What Happens If My Destination Options Are Not Available?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body className="faq-body">This does happen, as some countries don't have as many hostels as others. If none of your options are available, we will give you a selection of hostels as close as we can get!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5" className="font-med">What is Included in my booking with BTP?</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body className="faq-body">BTP provides an accomodation connection with one of our partner hostels around the world. We assure you they are trusted members of the community and have been checked before sending you! We also provide added information and services to make your trip as easy as possible.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </Container>
)

export default FAQ;