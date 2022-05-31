// Register form and submit

import React, {useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {Container, FormGroup, Form, Button} from 'react-bootstrap';

function Register() {

//state
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [passwordVerify, setPasswordVerify] = React.useState('');
const [role, setRole] = React.useState(false);
const navigate = useNavigate();
const {getLoggedIn} = useContext(AuthContext);
const {getAdmin} = useContext(AuthContext);

// Register function
async function register(e) {
    e.preventDefault();
    try {
        const registerData = {
            email,
            password,
            passwordVerify,
            role
        };
        await axios.post('http://localhost:5000/auth/register', registerData, {
            withCredentials: true
            });
        //await getting the checks if logged in or admin
        await getLoggedIn();
        await getAdmin();
        //send to blogs page
        navigate("/blogs");
    } catch (err) {
        console.error(err.message);
    }
}

//Rendering of form
return (
    <Container className='register-container'>
      <h1 id='register-text'>Register</h1>
      <Form onSubmit={register}>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} required onChange={e => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Label> (More than 6 Characters) </Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Form.Label>Verify Password</Form.Label>
          <Form.Control type="password" placeholder="Verify Password" value={passwordVerify} required onChange={e => setPasswordVerify(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Form.Label>Role</Form.Label>
          <Form.Label> (User or Admin) </Form.Label>
          <Form.Control as="select" value={role} onChange={e => setRole(e.target.value)}>
            <option value={false}>User</option>
            <option value={true}>Admin</option>
          </Form.Control>
        </FormGroup>
        <div className='register-submit-button-container'>
          <Button id='register-submit-button' variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;