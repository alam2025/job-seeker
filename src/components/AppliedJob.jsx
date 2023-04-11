import React, { useContext, useState } from 'react';
import { getShoppingCart, removeFromDb } from './utilities/fakedb';
import { jobContext } from '../App';
import CartJob from './CartJob';
import { HashLink } from 'react-router-hash-link';

const AppliedJob = () => {
      const jobs = useContext(jobContext); //tfetch all jobs 
      const [cart, setCart] = useState([]);
      const savedJob = getShoppingCart();
      let appliedJobs = [];
      for (const id in savedJob) {
            const foundJob = jobs.find(job => job.id === parseInt(id));
            if (foundJob) {
                  appliedJobs.push(foundJob);
            }
      }




      //set filter onsite or Remote
      const [selectedFilter, setSelectedFilter] = useState("");
      function handleFilterChange(event) {
            setSelectedFilter(event.target.value);
      }


      const filteredJobs = selectedFilter ? appliedJobs.filter(job => job.remote_or_onsite === selectedFilter) : appliedJobs;


      const handleRemove = (id) => {

            const remainng = filteredJobs.filter(j => j.id !== id);
            setCart(remainng);
            removeFromDb(id);
      }


      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 background ">Applied Jobs</div>

                  <center>
                        {
                              appliedJobs.length <= 0 ? <HashLink smooth to="/#jobs">
                                    <button className='btn-primary md:w-[25%] mx-auto my-container mt-20'>Apply Job</button>
                              </HashLink> : ''
                        }
                  </center>



                  <div className='flex flex-col gap-8 my-container mt-28'>
                        {
                              appliedJobs.length > 0 ? <div className="flex justify-end">
                                    <select className="select select-primary w-full max-w-xs" onChange={handleFilterChange} value={selectedFilter}>
                                          <option disabled value="">
                                                Filter
                                          </option>
                                          <option value="Onsite">Onsite</option>
                                          <option value="Remote">Remote</option>
                                    </select>

                              </div> : ''
                        }


                        <div className=' flex  flex-col gap-10 mb-20'>
                              {
                                    filteredJobs.map(job => <CartJob
                                          key={job.id}
                                          job={job}
                                          handleRemove={handleRemove}

                                    />)
                              }
                        </div>
                  </div>
            </>
      );
};

export default AppliedJob;