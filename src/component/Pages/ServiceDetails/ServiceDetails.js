import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    return (
        
        <div>
            <h1>Welcome to details{serviceId}</h1>
            <div className='text'>
            <Link to='/checkout'> <button>checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;