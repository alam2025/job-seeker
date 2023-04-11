import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetails from './JobDetails';



const Job = ({ job }) => {
      const { company_logo, company_name, job_title, fulltime_or_parttime, remote_or_onsite, salary, location ,id} = job;
      // console.log(job);

      // const handle=job=>{
      //       <JobDetails job={job} />
      // }
     
      return (
            <div className=' p-10 border  shadow-sm rounded-md flex flex-col gap-3  justify-center items-center'>
                  <img src={company_logo} alt="company logo" className=' h-[68px]' />
                  <h1 className=' text-[24px] font-bold font-sans'>{job_title}</h1>
                  <h4 className='text-[#757575] font-serif'>{company_name}</h4>
                  <div className=' flex gap-4'>
                        <p className=' border py-1 px-4 rounded-md primary-color'>{remote_or_onsite}</p>
                        <p className='border py-1 px-4 rounded-md primary-color'>{fulltime_or_parttime}</p>
                  </div>

                  <div className='flex gap-6'>
                        <p className='flex gap-2 justify-center items-center'> <FontAwesomeIcon icon={faLocationDot} />{location}</p>
                        <p className='flex gap-2 justify-center items-center'><FontAwesomeIcon icon={faMoneyBillAlt} />{salary}</p>
                  </div>
                  <Link className='btn-primary' to={`./../job-details/${id}`}>
                        View Details
                  </Link>


            </div>
      );
};

export default Job;