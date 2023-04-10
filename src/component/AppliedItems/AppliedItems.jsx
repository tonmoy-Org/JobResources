import React from 'react';
import { Link } from 'react-router-dom';

const AppliedItems = ({ job }) => {
    const {id, name} = job;
    return (
        <div>
            <h1>{name}</h1>
            <button className="bg-[#7E90FE] text-white font-bold py-2 px-5 mt-3 rounded ">
                <Link to={`/jobDetail/${id}`}>View Details</Link>
            </button>
        </div>
    );
};

export default AppliedItems;