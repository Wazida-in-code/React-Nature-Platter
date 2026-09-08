import React from 'react';
import Service from '../assets/service.png'

const Services = () => {
    return (
        <div className='my-[40px] w-11/12 mx-auto '>
            <h2 className='text-green-600 mb-4 font-bold text-3xl'>Services</h2>
            <div className='grid grid-cols-3 gap-4 py-8 '>
                <div className='shadow-2xl rounded-md py-4'>
                    <img src={Service} alt="" className='mx-auto' />
                    <h2 className='text-4xl font-bold text-center mb-2 text-green-700'>Services</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus voluptates ullam officiis,  repellendus?</p>
                </div>
                <div className='shadow-2xl rounded-md py-4'>
                    <img src={Service} alt="" className='mx-auto' />
                    <h2 className='text-4xl font-bold text-center mb-2 text-green-700'>Services</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus voluptates ullam officiis,  repellendus?</p>
                </div>
                <div className='shadow-2xl rounded-md py-4'>
                    <img src={Service} alt="" className='mx-auto' />
                    <h2 className='text-4xl font-bold text-center mb-2 text-green-700'>Services</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus voluptates ullam officiis,  repellendus?</p>
                </div>
            </div>
        </div>
    );
};

export default Services;