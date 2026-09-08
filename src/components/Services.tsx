import React from 'react';
import Service from '../assets/service.png'

const Services = () => {
    return (
        <div>
            <img src={Service} alt="" />
            <h2 className='text-4xl font-bold text-center mb-2 text-green-700'>Services</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus voluptates ullam officiis,  repellendus?</p>
        </div>
    );
};

export default Services;