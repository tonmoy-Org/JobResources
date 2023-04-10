import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedItems from '../AppliedItems/AppliedItems';



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
   console.log(saveCart)
    return (
        <div>
            <h1>Applied Jobs :{saveCart.length}</h1>
             {
                saveCart.map(job => 
                <AppliedItems
                key={job.id}
                job={job}
                ></AppliedItems>)
             } 
        </div>
    );
};

export default AppliedJobs;