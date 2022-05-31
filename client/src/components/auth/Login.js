//Login form and submit

import React, {useContext} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AuthContext from "../../context/AuthContext";
import {Container, FormGroup, Form, Button} from 'react-bootstrap';

function Login() {

//state
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const navigate = useNavigate();
const {getLoggedIn} = useContext(AuthContext);
const {getAdmin} = useContext(AuthContext);

//Login function
async function login(e) {
    e.preventDefault();
    try {
        const loginData = {
            email,
            password,
        };
        await axios.post('http://localhost:5000/auth/login', loginData, {
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
    <Container className='login-container'>
      <h1 id='login-text'>Login</h1>
      <Form onSubmit={login}>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </FormGroup>
        <div className='login-submit-button-container'>
          <Button id='login-submit-button' variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;