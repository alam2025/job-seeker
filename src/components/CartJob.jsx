import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { removeFromDb } from './utilities/fakedb';

const CartJob = ({ job ,handleRemove}) => {
      const { company_logo, company_name, job_title, fulltime_or_parttime, remote_or_onsite, salary, location, id } = job
   

     

      return (
            <div className=' flex flex-col lg:flex-row md:pb-8 lg:pb-1 justify-between items-center border rounded-md shadow-sm gap-6'>
                  <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                        <img  src={company_logo} alt="company logo" className=' h-[110px] background rounded-md object-cover m-3' />
                        <div className='flex flex-col gap-4 p-4 justify-center items-center lg:justify-start lg:items-start'>
                              <h1 className=' text-[18px] font-bold font-sans'>{job_title}</h1>
                              <h4 className='text-[#757575] font-serif'>{company_name}</h4>
                              <div className=' flex gap-4'>
                                    <p className=' border py-1 px-4 rounded-md primary-color'>{remote_or_onsite}</p>
                                    <p className='border py-1 px-4 rounded-md primary-color'>{fulltime_or_parttime}</p>
                              </div>
                              <div className='flex gap-6'>
                                    <p className='flex gap-2 justify-center items-center'> <FontAwesomeIcon icon={faLocationDot} />{location}</p>
                                    <p className='flex gap-2 justify-center items-center'><FontAwesomeIcon icon={faMoneyBillAlt} />{salary}</p>
                              </div>
                        </div>


                  </div>
                  <div>
                        <Link className='btn-primary mr-6' to={`./../job-details/${id}`}>
                              View Details
                        </Link>
                        <button onClick={()=>handleRemove(id)} className=' text-[#000] hover:font-bold hover:outline px-2 py-1 rounded'>Remove</button>

                  </div>
            </div>
      );
};

export default CartJob;