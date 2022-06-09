import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate= useNavigate();

    const navigateLoigin = ()=>{
        navigate('/login')
    }

    const handleRegister = event=>{
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='your name' />  
                <input type="email" name="email" id="" placeholder='your email ' required /> 
                <input type="password" name="password" placeholder='password' required id="" />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to="/Login" className='text-danger pe-auto text-decoration-none' onClick={navigateLoigin}>Please Login</Link></p>
        </div>
    );
};

export default Register;