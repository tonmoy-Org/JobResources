import React from 'react';
import { Link } from 'react-router-dom';
import './AppliedItems.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
const AppliedItems = ({ job }) => {
    const { id, name, img, companyName, jobType, location, salary } = job;
    return (
        <div className='border-2 md:mx-40 mt-10 md:flex justify-between md:px-8 items-center p-4'>
            <div className='md:flex items-center gap-6'>
                <div>
                    <img className='applied-img border-0 p-10 bg-[#F4F4F4]' src={img} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-[18px]'>{name}</h1>
                    <p className='text-p text-zinc-500 py-1'>{companyName}</p>
                    <div className='flex gap-3'>
                        <button className="bg-transparent  text-[#7E90FE] font-semibold  py-2 my-3 px-4 border border-[#7E90FE] rounded">
                            <Link to=''>{jobType.type2}</Link>
                        </button>
                        <button className="bg-transparent  text-[#7E90FE] font-semibold py-2 my-3 px-4 border border-[#7E90FE] rounded">
                            <Link to=''>{jobType.type1}</Link>
                        </button>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <div className='flex items-center'>
                            <MapPinIcon className='h-6 w-6'></MapPinIcon>
                            <p className='text-p text-zinc-500 py-2'>{location}</p>
                        </div>
                        <div className='flex items-center'>
                            <CurrencyDollarIcon className='w-6 h-6'></CurrencyDollarIcon>
                            <p className='text-p text-zinc-500 py-2'>{salary}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <button className="bg-[#7E90FE] text-white font-bold py-2 px-5 rounded ">
                    <Link to={`/jobDetail/${id}`}>View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default AppliedItems;