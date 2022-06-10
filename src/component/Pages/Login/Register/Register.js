import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {

    const [agree, setAgree]= useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLoigin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
      /*   const  agree = event.target.terms.checkbox; */
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }

    }
    return (
        <div className='register-form'>
            <h2>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email ' required />
                <input type="password" name="password" placeholder='password' required id="" />
                <input  onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' :'text-danger' } `} text-danger htmlFor="terms">Aecpts Genius conditions</label>
                <input disabled={!agree} type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to="/Login" className='text-danger pe-auto text-decoration-none' onClick={navigateLoigin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;