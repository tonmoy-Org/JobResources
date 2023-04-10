import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import man from '../../assets/man3.png'
import './Home.css'
import JobNumber from '../JobNumber/JobNumber';
import Job from '../Job/Job';
const Home = () => {
    const [jobNumbers, setJobNumbers] = useState(null);
    useEffect(() => {
        fetch('numbers.json')
          .then(response => response.json())
          .then(data => setJobNumbers(data))
          .catch(error => console.error(error));
      }, []);
    const [jobs, setJob] = useState([]);
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        fetch('feature.json')
            .then(response => response.json())
            .then(data => setJob(data))
            .catch(error => console.error(error));
    }, []);

    const visibleJobs = showMore ? jobs : jobs.slice(0, 4);
    return (
        <div>
            <section className='md:flex md:items-center gap-16 bg-[#F4F4F4]'>
                <div className='xl-pt-[290px] pt-28 md:pt-32 md:pb-20 md:px-40 px-4'>
                    <h1 className='banner-title'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <br />
                    <p className='text-p text-zinc-500'>
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <br />
                    <button className="bg-[#7E90FE] text-white font-bold py-2 px-5 rounded ">
                        <Link to='/'>Get Started</Link>
                    </button>
                </div>
                <div className='mt-20'>
                    <img className='img-man' src={man} alt="" />
                </div>
            </section>
            <br />
            <section>
                <div className='text-center mt-32 mb-10'>
                    <h1 className='banner-2-title py-5'>Job Category List</h1>
                    <p className='text-p text-zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex justify-center gap-10 mb-12'>
                      {Array.isArray(jobNumbers) && jobNumbers.map(number =>
                        <JobNumber
                            key={number.id}
                            number={number}
                        ></JobNumber>)
                    }
                </div>
            </section>
            <br />
            <br />
            <section>
                <div className='text-center mb-5'>
                    <h1 className='banner-2-title'>Featured Jobs</h1>
                    <p className='text-p text-zinc-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 md:mx-60 mx-5 mb-10 gap-10'>
                    {visibleJobs.slice(0, 4).map((job) => (
                        <Job
                            key={job.id}
                            job={job}
                        ></Job>
                    ))}
                </div>
                {!showMore && (
                    <div className='flex justify-center my-16'>
                        <button
                            className='bg-[#7E90FE] text-white font-bold py-2 px-5 rounded'
                            onClick={() => setShowMore(true)}
                        >
                            Show More
                        </button>
                    </div>
                )}

                {showMore && (
                    <div className='grid md:grid-cols-2 md:mx-60 mx-5 gap-10'>
                        {jobs.slice(4, 8).map((job) => (
                            <Job
                                key={job.id}
                                job={job} />
                        ))}
                    </div>
                )}

                {showMore && (
                    <div className='flex justify-center my-16'>
                        <button
                            className='bg-[#7E90FE] text-white font-bold py-2 px-5 rounded'
                            onClick={() => setShowMore(false)}
                        >
                            Show Less
                        </button>
                    </div>
                )}

            </section>
        </div>
    );
};
export default Home;
