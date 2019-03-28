import React from 'react';
import {Card, Nav} from 'react-bootstrap';

const MyNav = () => (
    <div className="bg-purple p-2">
        <Card className="pt-25 flex justify-content-end border-0 bg-transparent container-fluid">
            <Card.Header className="bg-transparent">
                <Nav variant="" defaultActiveKey="#first" >
                <Nav.Item>
                    <Nav.Link href="#first" className="text-gold">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#link" className="text-gold">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#disabled" className="text-gold">
                    Classes
                    </Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
        </Card>
    </div>
)

export default MyNav;