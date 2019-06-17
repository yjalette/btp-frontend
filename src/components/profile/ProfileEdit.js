
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";

import Navigation from '../nav/Navigation';
import DatePick from './DatePick';
import languagesList from "./languages.json";

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
      birthday: new Date(),
      occupation: '',
      language: '',
      spokenLanguages: [],
      about: '',
      multiple: true
    }
  }
  selectCountry = val => {
    this.setState({
      country: val
    });
  }

  selectBirthday = date => {
    this.setState({
      birthday: date
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


  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    let { country, birthday, spokenLanguages, occupation, about, multiple } = this.state;
    return (
      <Container className="section-wrapper" fluid>
        <Navigation />
        <h2>Edit Profile</h2>
        <Container className="reset flex-center align-items-start bg-light-green my-5" fluid>
          <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-lg-row">
            <Col xl={7} lg={12} style={cover} className="height-sm"></Col>
            <Col xl={5} lg={12} className="p-3 bg-beige">
              <Form className="p-2" onSubmit={this.handleSubmit}>
                <Form.Group className={group} id="form-birthday">
                            <Form.Label className={label}>birthday: </Form.Label> 
                            <DatePicker dateFormat="dd/MM/yyyy" className={control} className="p-1 text-secondary text-left w-100 rounded" value={birthday} selected={birthday} onChange={this.selectBirthday} placeholder="day/month/year" id="birthday"/>     
                </Form.Group>

                {/* <Form.Group className={group} id="form-birthday">
                  <Form.Label className={label}>birthday: </Form.Label>
                  <DatePicker selectDate={this.selectBirthday}/>
                  <DatePicker selectDay={this.selectDay} selectMonth={this.selectDay} selectYear={this.selectYear}/>
                </Form.Group> */}

                <Form.Group className={group} id="form-occupation">
                  <Form.Label className={label}>occupation: {occupation}</Form.Label>
                  <Form.Control className={control} type="text" placeholder="Web Designer" name="occupation" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className={group} id="form-country">
                  <Form.Label className={label}>country: {country}</Form.Label>
                  <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" value={country} onChange={this.selectCountry} name="country"/>
                </Form.Group>
                <Form.Group className={group} id="form-spokenLanguages">
                  <Form.Label className={label}>spoken languages: {spokenLanguages}</Form.Label>
                  <Typeahead labelKey="name" options={languagesList} value={spokenLanguages} placeholder="choose a language..." onChange={this.handleMultiSelectChange} name="spokenLanguages" id="spokenLanguages"  multiple={multiple} clearButton/>
                </Form.Group>
                <Form.Group className={group} id="form-about">
                  <Form.Label className={label}>about youself: {about}</Form.Label>
                  <Form.Control className={control} as="textarea" rows="3" name="about" onChange={this.handleChange} maxLength="250" />
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
