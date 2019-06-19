import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

import { Form, Button } from 'react-bootstrap';
import { label, group, control } from '../constants/index';

const NewHostelForm = () => {
    const [inputs, setInputs] = useState();
    const [country, setCountry] = useState();

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value });
    }

    const handleChangeSelect = val => {
        setCountry(val);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputs, country)
    }

    return (
        <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group id="firstName-group" className={group}>
                <Form.Label className={label}>Company Name: </Form.Label>
                <Form.Control type="text" name="hostelName" className={control} onChange={handleChange} />
            </Form.Group>
            <Form.Group id="userName-group" className={group}>
                <Form.Label className={label}>Username: </Form.Label>
                <Form.Control type="text" name="userName" className={control} onChange={handleChange} />
            </Form.Group>
            <Form.Group id="email-group" className={group}>
                <Form.Label className={label}>Email: </Form.Label>
                <Form.Control type="email" className={control} name="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group id="country-group" className={group}>
                <Form.Label className={label}>Country: </Form.Label>
                <CountryDropdown  value={country} type="text" className="p-2 muted w-100 rounded" name="country" onChange={handleChangeSelect} />
            </Form.Group>
            <Form.Group id="occupation-group" className={group}>
                <Form.Label className={label}>Type: </Form.Label>
                <Form.Control as="select" className={control} name="type" onChange={handleChange} >
                    <option>beach</option>
                    <option>city</option>
                    <option>nature</option>
                </Form.Control>
            </Form.Group>
            <Form.Group id="bio-group" className={group}>
                <Form.Label className={label}>Description: </Form.Label>
                <Form.Control as="textarea" rows="3" name="bio" onChange={handleChange} maxLength="250" />
            </Form.Group>
            <Form.Group id="password-group" className={group}>
                <Form.Label required className={label}>Password: </Form.Label>
                <Form.Control type="password" name="password" className={control} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Check label="Agree to terms and conditions" feedback="You must agree before submitting." />
            </Form.Group>
            <Button variant="" type="submit" className="butn float-right">sign up</Button>
        </Form>
    )
}

export default NewHostelForm;