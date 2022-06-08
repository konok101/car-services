import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price}=service;
    return (
        <div>
            <img src={img} alt="" />
           {name}
        </div>
    );
};

export default Service;