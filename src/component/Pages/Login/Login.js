import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../../component/Pages/Login/SocialLogin/SocialLogin'

const Login = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const navigate = useNavigate();

  const location = useLocation();
  let elementError;
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(
    auth
  );

  if(error){
    elementError=   <div>
    <p className='text-danger'>Error: {error?.message} </p>
</div>
   

  }


  if (user) {
    /* navigate('/home'); */
    navigate(from, { replace: true });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  }



  const navigateRegister = event => {
    navigate('/register');
  }

  const resetPassword = async()=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-primary text-center mt-2'>login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control ref={passRef} type="password" placeholder="Password" required />
        </Form.Group>
       
        <Button variant="primary" type="submit">
        Login
        </Button>
        {elementError}
      </Form>
      <p>New to Genius car <Link to="/register" className='text-danger text-decoration-none pe-auto mb-5' onClick={navigateRegister}>Please Register</Link></p>
      <p>Forget password? <button   className='text-danger text-decoration-none pe-auto mb-5' onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;