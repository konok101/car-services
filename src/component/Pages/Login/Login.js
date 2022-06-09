import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const navigate = useNavigate();
  const handleSubmit = event => {
    const email = emailRef.current.value;
    const password = passRef.current.value;

  }

  const navigateRegister = event => {
    navigate('/register');
  }
  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-primary text-center mt-2'>login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to Genius car <Link to="/register" className='text-danger text-decoration-none pe-auto' onClick={navigateRegister}>Please Register</Link></p>
    </div>
  );
};

export default Login;