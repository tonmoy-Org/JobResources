import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedItems from '../AppliedItems/AppliedItems';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const AppliedJobs = () => {
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch('feature.json')
            .then(response => response.json())
            .then(data => setJob(data))
            .catch(error => console.error(error));
    }, []);



    const saveCart = [];
    const storedCart = getShoppingCart();

    for (const id in storedCart) {

        const addedProduct = jobs.find(pd => pd.id == id);

        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    const [filteredJobs, setFilteredJobs] = useState([]);
    const handleFilter = (jobType) => {
        const filtered = saveCart.filter(job => job.jobType.type1 === jobType || job.jobType.type2 === jobType);
        setFilteredJobs(filtered);
    };



    // const filter = saveCart.filter(job => console.log(job.jobType.type1))
    const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : saveCart;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        handleFilter(option);
        setIsOpen(false);
    };
    const handleClick = () => {
        setTimeout(() => {
          setIsOpen(!isOpen);
        },);
      };
    return (
        <div className='mb-28'>
            <div className='text-center md:py-32 py-28 job-d'>
                <h1 className='banner-2-title font-bold'>Applied Jobs</h1>
            </div>
            <br />
            <div className='flex justify-end md:mx-40'>
                <div className="dropdown">
                    <button className='bg-[#F4F4F4] border-2 border-[#7E90FE]  p-2 flex items-center gap-3 font-semibold' onClick={handleClick}>
                        {selectedOption || "Filter Jobs"}
                        <ChevronDownIcon className='w-3 h-3'></ChevronDownIcon>
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu mt-1">
                            <button className='border-2 p-1 w-full bg-transparent hover:bg-[#7E90FE]  border-[#7E90FE] text-[#7E90FE] rounded hover:text-white' onClick={() => handleSelectOption("Onsite")}>
                                Onsite
                            </button>
                            <br />
                            <button className='mt-1 border-2 p-1 w-full bg-transparent hover:bg-[#7E90FE]  border-[#7E90FE] text-[#7E90FE] rounded hover:text-white' onClick={() => handleSelectOption("Remote")}>
                                Remote
                            </button>
                        </div>
                    )}
                </div>

            </div>
            <div>
                {
                    jobsToDisplay.map(job =>
                        <AppliedItems
                            key={job.id}
                            job={job}
                        ></AppliedItems>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;