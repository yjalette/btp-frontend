import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../nav/Navigation';
import languagesList from "../profile/languages.json";
import { Typeahead } from 'react-bootstrap-typeahead';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

import map2 from '../../images/map2.jpg';

const types = ["beach", "city", "nature"];

const cover = {
    backgroundImage: `url(${map2})`,
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const HostelEdit = () => {
    const [inputs, setInputs] = useState({about: '', history: ''});
    const [languages, setLanguages] = useState();
    const [type, setType] = useState();
    const [multiple] = useState(true);

    const handleChange = e => {
        setInputs({
            [e.target.name]: e.target.value
        });
    }

    const handleLanguagesChange = array => {
        setLanguages(array.map(lang => lang.name));
    }

    const handleTypeChange = el => {
        setType(el[0]);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log()
    }

    return (
                <Container className="section-wrapper" fluid>
                    <Navigation />
                    <h2>Edit Profile</h2>
                    <Container className="reset flex-center align-items-start bg-light-green my-5" fluid>
                        <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-lg-row">
                            <Col xl={7} lg={12} style={cover} className="height-sm"></Col>
                            <Col xl={5} lg={12} className="p-lg-5 p-md-1 bg-beige">
                                <Form className="py-3" onSubmit={handleSubmit}>
                                <Form.Group id="form-hostel-type">
                                        <Form.Label>type: </Form.Label>
                                        <Typeahead
                                            labelKey="type"
                                            options={types}
                                            value={type}
                                            placeholder="Choose a type..."
                                            onChange={handleTypeChange}
                                            id="hostel-type-change"
                                            clearButton
                                        />
                                    </Form.Group>
                                    <Form.Group id="form-hostel-spokenLanguages">
                                        <Form.Label>spoken languages: </Form.Label>
                                        <Typeahead
                                            labelKey="name"
                                            options={languagesList}
                                            value={languages}
                                            placeholder="Choose a language..."
                                            onChange={handleLanguagesChange}
                                            id="hostel-spokenLanguages"
                                            multiple={multiple}
                                            clearButton
                                        />
                                    </Form.Group>
                                    <Form.Group id="form-hostel-about">
                                        <Form.Label>about: </Form.Label>
                                        <Form.Control as="textarea" value={inputs.about} rows="3" name="about" onChange={handleChange} maxLength="250" />
                                    </Form.Group>
                                    <Form.Group id="form-hostel-history">
                                        <Form.Label>history: </Form.Label>
                                        <Form.Control as="textarea" value={inputs.history} rows="3" name="history" onChange={handleChange} maxLength="250" />
                                    </Form.Group>
                                    <Link type="click" className="" to="/hostel-view"><i className="fa fa-arrow-left m-1"></i>Back</Link>
                                    <Button type="submit" className="butn float-right mb-3">Save</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                )
            }
            
export default HostelEdit;