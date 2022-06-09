import React from 'react';
import google from '../../../../images/social/google.png';
import facebook from '../../../../images/social/facebook.png';
import github from '../../../../images/social/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let elementError;
    if (error) {
      
        elementError=   <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
      
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex algin-items-center '>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {elementError}

            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google sign In</span></button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign In</span></button>
                <button className='btn btn-primary w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;