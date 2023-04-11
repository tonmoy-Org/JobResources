import React from 'react';
import './Job.css';
import { Link} from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
const Job = (props) => {
    const {id, img, name, companyName, jobType, location, salary } = props.job;
    
    return (
        <div>
            <div>
                <div className='border-2 p-8'>
                    <img className='img-logo' src={img} alt="" />
                    <br />
                    <h1 className='font-bold text-[18px]'>{name}</h1>
                    <p className='text-p text-zinc-500 py-2'>{companyName}</p>
                    <div className='flex gap-4'>
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
                    <button  className="bg-[#7E90FE] text-white font-bold py-2 px-5 mt-3 rounded ">
                        <Link to={`/jobDetail/${id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Job;