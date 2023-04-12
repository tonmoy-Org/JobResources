import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='text-center md:py-32 py-28 job-d'>
            <h1 className='banner-2-title font-bold'>Blog</h1>
          </div>
          <br />
          <div className='mx-32 md:my-20 my-8'>
             <div className='py-6'>
              <h1 className='text-2xl font-semibold pb-2'>1. when should you use context api ?</h1>
              <p className='text-p'>Assuming you're referring to the "Context API" in React, it is a feature that allows components to share data without having to pass the data down through every level of the component tree as props.</p>
             </div>
             <div className='py-6'>
               <h1 className='text-2xl font-semibold pb-2'>2. What is custom hook ?</h1>
               <p className='text-p'>In React, a custom hook is a JavaScript function that uses built-in React hooks (such as useState, useEffect, and useContext) to provide reusable logic that can be shared between multiple components.</p>
             </div>
             <div className='py-6'>
              <h1 className='text-2xl font-semibold pb-2'>3. What is the use of useRef ?</h1>
              <p className='text-p'>In React, the useRef hook provides a way to create a mutable reference to a DOM element or a value that persists across renders of a component.</p>
             </div>
             <div>
               <h1 className='text-2xl font-semibold pb-2'>4. What is the use of useMemo ?</h1>
               <p className='text-p'>In React, the useMemo hook is used to memoize a value, which means that it will only be recomputed when one or more of its dependencies have changed. This can help improve performance by avoiding unnecessary re-renders of components that depend on expensive computations or complex data transformations.</p>
             </div>
          </div>
        </div>
    );
};

export default Blog;