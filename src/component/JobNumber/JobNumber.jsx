import React from 'react';
import './JobNumber.css';
const JobNumber = ({number}) => {
    const {name, img, numberOfJobs} = number;
    return (
        <div>
            <div className='num-box p-8 mb-10'>
                <img className='py-3' src={img} alt="" />
                <h1 className='font-bold'>{name}</h1>
                <p className='py-2'>{numberOfJobs}<span className='px-2'>Jobs Available</span></p>
            </div>
        </div>
    );
};

export default JobNumber;