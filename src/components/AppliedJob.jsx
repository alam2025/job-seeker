import React, { useContext, useState } from 'react';
import { getShoppingCart } from './utilities/fakedb';
import { jobContext } from '../App';
import CartJob from './CartJob';

const AppliedJob = () => {
      const jobs = useContext(jobContext); //tfetch all jobs 
      const savedJob = getShoppingCart();
      let appliedJobs =[];
      for(const id in savedJob)
      {
            const foundJob = jobs.find(job=>job.id === parseInt(id));
            if(foundJob){
                  appliedJobs.push(foundJob);
            }
      }


      return (
            <>
                 <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 bg-gray-50 ">Applied Jobs</div>

                 <div className='flex flex-col gap-8 my-container'>
                        {
                              appliedJobs.map(job=><CartJob
                              key={job.id}
                              job = {job}
                              
                              />)
                        }
                 </div>
            </>
      );
};

export default AppliedJob;