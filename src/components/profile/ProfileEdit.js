import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';
import DatePicker from "react-datepicker";
import languagesList from "./languages.json";
import {Typeahead} from 'react-bootstrap-typeahead'; 

import "react-datepicker/dist/react-datepicker.css";

import {Container, Form, Button} from 'react-bootstrap';

import map2 from '../../images/map2.jpg';

console.log(languagesList);

const cover = {
    backgroundImage: `url(${map2})`,
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
     
      selectCountry = (val) => {
        this.setState({ country: val });
        // console.log(this.state.country)
      }

      selectBirthday = (date) => {
        this.setState({
          birthday: date
        });
      }

      handleChange = (e) => {
          // console.dir(e.target);
        this.setState({
          [e.target.id]: e.target.value
        });
      }

      handleMultiSelectChange = (e) => {
                console.dir(e.target);
          //  let options = Array.from(e.target.selectedOptions);
          //  this.setState({
          //       spokenLanguages: options.map(option => option.label)
          //  })
      }

      handleLanguage = (arr) => {
        //   console.log(arr[0].name);
        if ( arr.length === 0){
            return 
        }
          this.setState({
              language: arr[0].name
          })
      }

      handleSubmit = e => {
            e.preventDefault();
            console.log(this.state);
      }
     
    render() {
        let {country, birthday, spokenLanguages, language, occupation, about, multiple} = this.state;    
        return (
            <Container className="section-wrapper flex-center flex-column" fluid>
                <Container className="bg-img-col opacity mt-5" style={cover}>
                    <Form className="bg-light-green p-5 rounded" onSubmit={this.handleSubmit}>

                        <Form.Group id="form-birthday">
                            <Form.Label>birthday: </Form.Label> 
                            <DatePicker className="p-1 m-2 text-center rounded" value={birthday} selected={birthday} onChange={this.selectBirthday} placeholder="07/10/1993" id="birthday"/>     
                        </Form.Group>

                        <Form.Group id="form-language">
                            <Form.Label>language: {language}</Form.Label>
                            <Typeahead
                            labelKey="name"
                            options={languagesList}
                            placeholder="Choose a language..."
                            id="language"
                            onChange={this.handleLanguage}
                            />
                        </Form.Group>

                        <Form.Group id="form-occupation">
                            <Form.Label>occupation: {occupation}</Form.Label>
                            <Form.Control type="text" placeholder="Web Designer" id="occupation" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group id="form-country">
                            <Form.Label>country: {country}</Form.Label>
                            <CountryDropdown defaultOptionLabel="Ireland" className="p-2 muted w-100 rounded" type="text" id="country" value={country} onChange={this.selectCountry} />
                        </Form.Group>

                        <Form.Group id="form-spokenLanguages">
                            <Form.Label>spoken languages: {spokenLanguages}</Form.Label>  
                            <Typeahead
                              labelKey="name"
                              options={languagesList}
                              placeholder="Choose a language..."
                              onChange={this.handleMultiSelectChange}
                              id="spokenLanguages"
                              multiple={multiple} 
                            />
                        </Form.Group>

                        <Form.Group id="form-about">
                            <Form.Label>about youself: {about}</Form.Label>
                            <Form.Control as="textarea" rows="3" id="about" onChange={this.handleChange} maxLength="150"/>
                        </Form.Group>

                        <Link type="click" className="" to="/profile-view"><i className="fa fa-arrow-left m-1"></i>Back</Link>
                        <Button type="submit" className="butn float-right">Save</Button>

                    </Form>
                </Container>
                
            </Container>
          
            )
        }
      
    }

export default ProfileEdit;
