import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';



const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        firstname
        lastname
        id
        role
        token
        type
        expire
    }
  }
`;


const SignIn = (props) => {
    console.log(props)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const loginPost = useMutation(LOGIN, {
        variables: { email, password }
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        loginPost().then(({ data }) => {
            console.log(data.login);
            props.history.push('/profile-view');
        }).catch((data) => setError(data.graphQLErrors[0].validation.email[0]))
    }

    return (
        <Form className="p-5" onSubmit={handleSubmit}>
            {error ? <div>{error}</div> : null}
            <Form.Group id="form-email">
                <Form.Label>Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group id="form-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
            </Form.Group>
            <Form.Group id="form-rememberMe">
                <Form.Check type="checkbox" label="remember me" id="rememberMe" />
            </Form.Group>
            <Button variant="" type="submit" className="bg-light-green text-green float-right" onClick={handleSubmit}>login</Button>
        </Form>
    )

}

export default withRouter(SignIn);
