import React, { useContext } from 'react';
import { json, useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { jobContext } from '../App';
import { addToDb, getShoppingCart } from './utilities/fakedb';
import { Toaster, toast } from 'react-hot-toast';


const JobDetails = () => {
      const { id } = useParams()

      const jobs = useContext(jobContext)

      const myJob = jobs.find(job => job.id === parseInt(id));
      let clickedJob
      if (myJob) {
            clickedJob = myJob;
      }
      const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, location } = clickedJob;
      const { phone, email } = contact_information;


      const appliedJobs = getShoppingCart();
      console.log(appliedJobs);
      const handleApplyJob = id => {
            let exit;
            if (JSON.stringify(appliedJobs) === '{}') {
                  addToDb(id)
                  toast.success('Successfully Applied !!!')
            }
            else {
                  for (const jid in appliedJobs) {
                        if (parseInt(jid) === id) {
                              exit = id;
                        }
                  }
                  if (exit) {
                        toast.error("Aready Applied this Job !!!")
                  }
                  else {
                        addToDb(id)
                        toast.success('Successfully Applied !!!')
                  }
            }

      }


      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 bg-gray-50 ">Job Details</div>

                  <div className='my-20 my-container flex flex-col md:flex-row gap-6'>
                        <div className='text-lg w-[60%]'>
                              <p ><span className=' text-primary-size'>Job Description :</span> {job_description}</p> <br />
                              <p><span className=' text-primary-size'>Job Responsibility :</span> {job_responsibility}</p> <br />
                              <p><span className=' text-primary-size'>Educational Requirements :</span></p><br />
                              <p> {educational_requirements}</p> <br />
                              <p> <span className=' text-primary-size'>Experiences :</span></p>
                              <p>{experiences}</p>

                        </div>
                        <div className=' divide-y-2 background flex flex-col gap-6 p-10 rounded-md w-[40%]'>
                              <h1 className=' text-primary-size '>Job Details</h1>
                              <div className=' flex flex-col gap-4 my-2'>
                                    <p><span className='font-bold mt-3'>Salary :</span> {salary}</p>
                                    <p><span className='font-bold'>Job title :</span> {job_title}</p>
                              </div>
                              <h1 className=' text-primary-size'>Contact Information</h1>
                              <div className=' flex flex-col gap-4'>
                                    <p><span className='font-bold'> Phone :</span> {phone}</p>
                                    <p><span className='font-bold'>Email :</span> {email}</p>
                                    <p><span className='font-bold'>Address :</span> {location}</p>
                                    <button onClick={() => handleApplyJob(clickedJob.id)} className='btn-primary'>Apply Now</button>
                              </div>

                        </div>
                  </div>
                  <Toaster />
            </>
      );
};

export default JobDetails;