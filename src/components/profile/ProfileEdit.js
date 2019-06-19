
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
import MaskedFormControl from 'react-bootstrap-maskedinput';

import Navigation from '../nav/Navigation';
import languagesList from "./languages.json";
import {isValidDate} from '../../utils/isValidDate';

import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import { group, label, control } from '../constants/index';
import map2 from '../../images/map2.jpg';

const cover = {
  backgroundImage: `url(${map2})`,
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      birthday: '',
      occupation: '',
      language: '',
      spokenLanguages: [],
      about: '',
      bday: '',
      multiple: true
    }

    // const birthday = this.state.birthday;

    // const [day, month, year] = birthday.split("-");

    // const dateObj = new Date(year, month-1, day);

    // const bday = birthday === ""|| birthday.includes("_") ? null : dateObj.toISOString();
  }

  selectCountry = val => {
    this.setState({
      country: val
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMultiSelectChange = array => {
    this.setState({
      spokenLanguages: array.map(option => option.name)
    })
  }

  validate = () => {
    let bdayError = "";
    if (!isValidDate(this.state.birthday)){
      bdayError = "enter correct date"
    }

    return true;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.validate());
    console.log(this.state)
  }

  render() {
    let { country, birthday, spokenLanguages, occupation, about, multiple, bdayError } = this.state;
    return (
      <Container className="section-wrapper" fluid>
        <Navigation />
        <h2>Edit Profile</h2>
        <Container className="reset flex-center align-items-start bg-light-green my-5" fluid>
          <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-lg-row">
            <Col xl={7} lg={12} style={cover} className="height-sm"></Col>
            <Col xl={5} lg={12} className="p-3 bg-beige">
              <Form className="p-2" onSubmit={this.handleSubmit}>
                <span>{bdayError}</span>
                <Form.Group className={group} id="form-birthday">
                  <Form.Label className={label}>birthday:</Form.Label>
                  <MaskedFormControl type='text' name='birthday' mask='11/11/1111' value={birthday} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className={group} id="form-occupation">
                  <Form.Label className={label}>occupation:</Form.Label>
                  <Form.Control className={control} type="text" placeholder="Web Designer" value={occupation} name="occupation" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className={group} id="form-country">
                  <Form.Label className={label}>country:</Form.Label>
                  <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" value={country} onChange={this.selectCountry} name="country"/>
                </Form.Group>
                <Form.Group className={group} id="form-spokenLanguages">
                  <Form.Label className={label}>spoken languages:</Form.Label>
                  <Typeahead labelKey="name" options={languagesList} value={spokenLanguages} placeholder="choose a language..." onChange={this.handleMultiSelectChange} name="spokenLanguages" id="spokenLanguages"  multiple={multiple} clearButton/>
                </Form.Group>
                <Form.Group className={group} id="form-about">
                  <Form.Label className={label}>about youself: </Form.Label>
                  <Form.Control className={control} as="textarea" rows="3" name="about" value={about} onChange={this.handleChange} maxLength="250" />
                </Form.Group>
                <Link type="click" className="" to="/profile-view"><i className="fa fa-arrow-left m-1"></i>Back</Link>
                <Button type="submit" className="butn float-right p-1">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>

    )
  }

}

export default ProfileEdit;
