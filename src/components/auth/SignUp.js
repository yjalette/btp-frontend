import React, { useReducer, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import { CountryDropdown } from 'react-country-region-selector';
// import DatePicker from "react-datepicker";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput'

import { group, label, control } from '../constants/index';
import adventure from '../../images/map.jpg';
import {isValidDate} from '../../utils/isValidDate';


const SIGNUP = gql`
mutation signUp($username: String!, $email: String!, $password: String!, $firstname: String!, $lastname: String!, $bday: String!, $profilePic: String!, $actualOccupation: String!, $country: String!, $bio: String!) {
    signUp(username: $username, email: $email, password: $password, firstname: $firstname, lastname: $lastname, bday: $bday, profilePic: $profilePic, actualOccupation: $actualOccupation, country: $country, bio: $bio) 
  
}
`
const UPLOADFILE = gql`
mutation MediaUpload($media: Upload){
    MediaUpload( media: $media, type: "1"){
        id
    }

}
`
const cover = {
    backgroundImage: `url(${adventure})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const initState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    birthday: '',
    bio: '',
    media: '',
    actualOccupation: '',
    country: '',
    profilePic: '',
    firstNameError: '',
    lastNameError: '',
    userNameError: '',
    emailError: '',
    passwordError: '',
    birthdayError: '',
    errors: ''

};

function reducer(state, action) {
    switch (action.type) {
      case 'SET_FORM_FIELD':
        return {...state, [action.payload.name]: action.payload.value};
        case 'UPDATE_VALUES':
        return {...state, ...action.payload};
    
      default:
        return state;
    }
  }
  

const SignUp = props => {

    const [state, dispatch] = useReducer(reducer, initState);

    const {firstName, lastName, userName, email, birthday, bio, actualOccupation, country, password, media} = state;

    const [day, month, year] = birthday.split("/");

    const dateObj = new Date(year, month-1, day);

    const bday = birthday === ""|| birthday.includes("_") ? null : dateObj.toISOString();

    const signUpPost = useMutation(SIGNUP, {
        variables: { email, password, bio, actualOccupation, bday, country, username: userName, firstname: firstName, lastname: lastName, profilePic: "picture"}
    })

    // console.log(media);
    const profilePicPost = useMutation(UPLOADFILE, {
        variables: { media }
    })

    useEffect(() => {
        profilePicPost();
    }, [media])    

    const handleChange = e => {
        dispatch ({type: 'SET_FORM_FIELD', payload: {name: e.target.name, value: e.target.value}})
    }

    const handleChangePic = e => {
        dispatch ({
            type: 'SET_FORM_FIELD',
            payload: {name: "media", value: e.target.files[0]}
        })
    }

    const validate = () => {
        let firstNameError = '';
        let lastNameError = '';
        let userNameError = '';
        let emailError = '';
        let passwordError = '';
        let errors = ''
        let birthdayError = '';

        // if (!state.firstName || !state.lastName || !state.userName || !state.password){
        //     errors = "All fields must be filled"
        // }

    
        // if (!state.email.includes("@")){
        //     emailError = "email must include @"
        // }

        // if (state.userName.length < 5){
        //     userNameError = "username is too short"
        // }

        // const re = /[0-9]+/g;
        // const isPassword = re.test(state.password);

        // if (!isPassword){
        //     passwordError = "password must contain at least 8 characters, and at least one digit"
        // }

        // console.log({isPassword, passwordError});


        if (!isValidDate(birthday)){
            birthdayError = "enter correct date";
        }

        if (emailError || errors || userNameError || passwordError || firstNameError || lastNameError || birthdayError) {
            dispatch({type: "UPDATE_VALUES", payload: { emailError, errors, userNameError, passwordError, firstNameError, lastNameError, birthdayError }});
            return false;
        }

        return true;
    }

    // const selectBirthday = (date) => {
    //     dispatch({ type: 'SET_FORM_FIELD', payload: {name: 'bday', value: date}})
    //   }

    const handleChangeSelect = e => {
        dispatch({type: 'SET_FORM_FIELD', payload: {name: 'country', value: e}})
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        signUpPost().then(({ data }) => {
            console.log(data);
            props.history.push('/profile-view');
        }) //.catch((data) => setError(data.graphQLErrors[0].validation.email[0]))   
    }

      return (
            <Container className="section-wrapper" fluid>
                <h2>Registration</h2>
                <Container className="reset flex-center" fluid>
                    <Row className="bg-beige shadow-sm rounded w-75 reset d-flex flex-column flex-lg-row m-0">
                        <Col xl={6} lg={12} className="height-sm" style={cover}></Col>
                        <Col xl={6} lg={12} className="py-5 flex-center flex-column">
                            <section className="w-100">
                                <Form.Group id="profilePic-group" className={group}>
                                    <Form.Label className={label}>Profile Image: </Form.Label>
                                    <Form.Control type="file" name="profilePic" className={control} onChange={handleChangePic} />
                                </Form.Group>
                            </section>
                            <Form className="w-100" onSubmit={handleSubmit}>
                                {/* <h6 className="text-center" style={{color: 'red'}}>
                                        {state.errors}<br /> 
                                        {state.emailError} <br /> 
                                        {state.birthdayError}
                                        {state.userNameError} <br />
                                        {state.passwordError}
                                </h6> */}
                                <Form.Group id="firstName-group" className={group}>
                                    <Form.Label className={label}>Firstname: </Form.Label>
                                    <Form.Control type="text" name="firstName" className={control} value={state.firstName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group id="lastName-group" className={group}>
                                    <Form.Label className={label}>Lastname: </Form.Label>
                                    <Form.Control type="text" name="lastName" className={control} value={state.lastName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group id="userName-group" className={group}>
                                    <Form.Label className={label}>Username: </Form.Label>
                                    <Form.Control type="text" name="userName" className={control} value={state.userName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group id="email-group" className={group}>
                                    <Form.Label className={label}>Email: </Form.Label>
                                    <Form.Control type="email" className={control}  name="email" value={state.email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group id="country-group" className={group}>
                                    <Form.Label className={label}>Country: </Form.Label>
                                    <CountryDropdown value="France" type="text" className="p-2 muted w-100 rounded"  name="country" onChange={handleChangeSelect} />
                                </Form.Group>
                                <Form.Group id="occupation-group" className={group}>
                                    <Form.Label className={label}>Occupation: </Form.Label>
                                    <Form.Control type="text" className={control}  name="actualOccupation" value={state.actualOccupation} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group id="bday-group" className={group}>
                                    <Form.Label className={label}>Birthday: </Form.Label> 
                                    <MaskedFormControl type='text' name='birthday' mask='11/11/1111' value={state.birthday} onChange={handleChange}/>
                                    {/* <DatePicker dateFormat="dd/MM/yyyy" className={control} value={state.bday} selected={state.bday} onChange={selectBirthday} placeholder="day/month/year" />      */}
                                </Form.Group>
                                <Form.Group id="bio-group" className={group}>
                                    <Form.Label className={label}>About youself: </Form.Label>
                                    <Form.Control as="textarea" rows="3" name="bio" onChange={handleChange} maxLength="250" />
                                </Form.Group>
                                <Form.Group id="password-group" className={group}>
                                    <Form.Label required className={label}>Password: </Form.Label>
                                    <Form.Control type="password" name="password"className={control} value={state.password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check label="Agree to terms and conditions" feedback="You must agree before submitting."/>
                                </Form.Group>
                                <Button variant="" type="submit" className="butn float-right">sign up</Button>
                            </Form>
                            {/* <Link type="click" className="" to="/"><i className="fa fa-arrow-left m-1 float-left"></i>Back</Link> */}
                        </Col>
                    </Row>
                </Container>
          </Container>  
        )
      
    }

export default SignUp;
