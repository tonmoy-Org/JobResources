import React, { useState, useEffect } from 'react';
import './JobDetail.css';
import { Link, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const JobDetail = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/feature.json')
      .then(response => response.json())
      .then(data => setJobs(data))
  }, [])
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const selectedJob = cart.find(c => c.id === parseInt(id)) || jobs.find(job => job.id === parseInt(id));
    setJob(selectedJob);
  }, [cart, jobs, id]);



  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];

    for (const id in storedCart) {
      const addedProduct = jobs.find(job => job.id === parseInt(id));

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [jobs]);


  const handleAddToCart = (job) => {
    let newCart = [];
    const exist = cart.find(pd => pd.id === id);

    if (!exist) {
      job.quantity = 1
      newCart = [...cart, job];
    }
    else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== id)
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(job.id)
  }
  return (
    <div>
      {job ? (
        <div>
          <div className='text-center md:py-32 py-28 job-d'>
            <h1 className='banner-2-title font-bold'>Job Details</h1>
          </div>
          <br />
          <div className='md:flex md:mx-32 gap-20 mx-4 mt-16'>
            <div className='md:w-3/5 mb-10'>
              <p className='text-p mb-8'>
                <span className='font-bold'>Job Description: </span>
                {job.description}
              </p>
              <p className='text-p mb-8'>
                <span className='font-bold'>Job Responsibility: </span>
                {job.responsibility}
              </p>
              <p className='text-p mb-8'>
                <span className='font-bold'>Educational Requirements:</span><br />
                {job.requirements}
              </p>
              <p className='text-p mb-8'>
                <span className='font-bold'>Experiences: </span><br />
                {job.experiences}
              </p>

            </div>
            <div>
              <div className='text-p border-0 p-8 cart-details'>
                <h1 className='font-bold pb-4'>Job Details:</h1>
                <hr />
                <div className='mt-3'>
                  <h1 className='mb-2'><span className='font-bold'>Salary: </span>{job.salary}</h1>
                  <h1><span className='font-bold'>Job Title:</span> {job.name}</h1>
                </div>
                <br />
                <div>
                  <h1 className='font-bold pb-4'>Contact Information</h1>
                  <hr />
                  <h1 className='mb-2 mt-3'><span className='font-bold'>Phone:</span> {job.phone}</h1>
                  <h1 className='mb-2'><span className='font-bold'>Email:</span> {job.email}</h1>
                  <h1><span className='font-bold'>Address:</span> {job.location}</h1>
                </div>
              </div>
              <div className='mt-8'>
                <button onClick={() => handleAddToCart(job)} className="bg-[#7E90FE] text-white font-bold py-3 px-5 rounded w-full">
                  <Link to=''>Apply Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
