import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { jobContext } from '../App';


const JobDetails = () => {
      const { id } = useParams()

      const jobs = useContext(jobContext)

      const myJob = jobs.find(job => job.id === parseInt(id));
      let clickedJob
      if (myJob) {
            clickedJob = myJob;
      }
      const { job_description , job_responsibility} = clickedJob;


      console.log(clickedJob);




      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 bg-gray-50 ">Job Details</div>

                  <div className='mt-20 my-container'>
                        <div>
                              <p>Job Description : {job_description}</p> <br />
                              <p>Job Responsibility : {job_responsibility}</p>

                        </div>
                        <div>

                        </div>
                  </div>
            </>
      );
};

export default JobDetails;