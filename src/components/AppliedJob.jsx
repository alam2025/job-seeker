import React, { useContext, useState } from 'react';
import { getShoppingCart } from './utilities/fakedb';
import { jobContext } from '../App';
import CartJob from './CartJob';

const AppliedJob = () => {
      const jobs = useContext(jobContext); //tfetch all jobs 
      const savedJob = getShoppingCart();
      let appliedJobs = [];
      for (const id in savedJob) {
            const foundJob = jobs.find(job => job.id === parseInt(id));
            if (foundJob) {
                  appliedJobs.push(foundJob);
            }
      }



      const [selectedFilter, setSelectedFilter] = useState("");

      const filteredJobs = selectedFilter ? appliedJobs.filter(job => job.remote_or_onsite === selectedFilter) : appliedJobs;

      function handleFilterChange(event) {
            setSelectedFilter(event.target.value);
      }
     


      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 background ">Applied Jobs</div>

                  <div className='flex flex-col gap-8 my-container mt-28'>
                        <div className="flex justify-end">
                              <select className="select select-primary w-full max-w-xs" onChange={handleFilterChange} value={selectedFilter}>
                                    <option disabled value="">
                                          Filter
                                    </option>
                                    <option value="Onsite">Onsite</option>
                                    <option value="Remote">Remote</option>
                              </select>
                        </div>



                        {
                              filteredJobs.map(job => <CartJob
                                    key={job.id}
                                    job={job}

                              />)
                        }
                  </div>
            </>
      );
};

export default AppliedJob;