import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../nav/Navigation';
import {CountryDropdown} from 'react-country-region-selector';
import DatePicker from "react-datepicker";
import languagesList from "./languages.json";
import {Typeahead} from 'react-bootstrap-typeahead'; 
import "react-datepicker/dist/react-datepicker.css";

import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import {group, label, control} from '../constants/index';

import map2 from '../../images/map2.jpg';

const cover = {
    backgroundImage: `url(${map2})`,
    height: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

class ProfileEdit extends Component {
    constructor (props) {
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
          [e.target.id]: e.target.value
        });
      }

      handleMultiSelectChange = array => {
           this.setState({
                spokenLanguages: array.map(option => option.name)
           })
      }

    //   handleLanguage = (arr) => {
    //     //   console.log(arr[0].name);
    //     if ( arr.length === 0){
    //         return 
    //     }
    //       this.setState({
    //           language: arr[0].name
    //       })
    //   }

      handleSubmit = e => {
            e.preventDefault();
      }
     
    render() {
        let {country, birthday, spokenLanguages, occupation, about, multiple} = this.state;    
        return (
            <Container className="section-wrapper" fluid>
                <Navigation />
                <h2>Edit Profile</h2>
                <Container className="reset flex-center align-items-start bg-light-green my-5" fluid>
                     <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-lg-row">
                        <Col xl={7} lg={12} style={cover} className="height-sm"></Col>
                        <Col xl={5} lg={12} className="p-lg-5 p-md-1 bg-beige">
                            <Form className="p-2" onSubmit={this.handleSubmit}>
                                <Form.Group className={group} id="form-birthday">
                                    <Form.Label className={label}>birthday: </Form.Label> 
                                    <DatePicker className="p-1 m-2 text-center rounded" value={birthday} selected={birthday} onChange={this.selectBirthday} placeholder="07/10/1993" id="birthday"/>     
                                </Form.Group>
                                <Form.Group className={group} id="form-occupation">
                                    <Form.Label className={label}>occupation: {occupation}</Form.Label>
                                    <Form.Control className={control} type="text" placeholder="Web Designer" id="occupation" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group className={group} id="form-country">
                                    <Form.Label className={label}>country: {country}</Form.Label>
                                    <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" value={country} onChange={this.selectCountry} />
                                </Form.Group>
                                <Form.Group className={group} id="form-spokenLanguages">
                                    <Form.Label className={label}>spoken languages: {spokenLanguages}</Form.Label>  
                                    <Typeahead
                                    labelKey="name"
                                    options={languagesList}
                                    value={spokenLanguages}
                                    placeholder="Choose a language..."
                                    onChange={this.handleMultiSelectChange}
                                    id="spokenLanguages"
                                    multiple={multiple} 
                                    clearButton
                                    />
                                </Form.Group>
                                <Form.Group className={group} id="form-about">
                                    <Form.Label className={label}>about youself: {about}</Form.Label>
                                    <Form.Control className={control} as="textarea" rows="3" id="about" onChange={this.handleChange} maxLength="250"/>
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
