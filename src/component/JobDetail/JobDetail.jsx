import React, { useState, useEffect } from 'react';
import './JobDetail.css';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const selectedJob = jobs.find(job => job.id === parseInt(id));
    setJob(selectedJob);
  }, [jobs, id]);
  console.log(job)
  return (
    <div>
      {job ? (
        <div className='text-center md:py-52 py-28 job-d'>
          <h1 className='banner-2-title font-bold'>Job Details</h1>
          <h2>Company: {job.companyName}</h2>
          <h2>Title: {job.name}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
