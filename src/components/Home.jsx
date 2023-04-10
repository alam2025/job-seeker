import React, { useContext, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import { jobContext } from '../App';
import Job from './Job';

const Home = () => {
      const catagories = useLoaderData();
      let jobs = useContext(jobContext);
      const [clip, setclip] = useState(true);
      clip===true ? jobs=jobs.slice(0,4):jobs;

      // if(clip === true){
      //       jobs= jobs.slice(0,4)
      // }

      const handleSeeBtn=()=>{
            setclip(false)
      }


      return (
            <div className='my-container mb-20'>
                  {/* banner section  */}
                  <Banner />

                  {/* Category list  */}
                  <div className=' mt-32'>
                        <h1 className=' text-center text-4xl font-bold font-serif'>Job Category List</h1>
                        <p className=' text-center text-lg mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10'>
                              {
                                    catagories.map((category, idx) => <Category
                                          key={idx}
                                          category={category}

                                    />)
                              }
                        </div>
                  </div>

                  {/* jobs section  */}
                  <div className=' mt-20'>
                        <h1 className='text-center text-4xl font-bold font-serif'>Featured Jobs</h1>
                        <p className='text-center text-lg mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                        {/* jobs  */}

                        <div className=' grid grid-cols-1  md:grid-cols-2 gap-6 mt-20'>
                              {
                                    jobs.map(job => <Job
                                          key={job.id}
                                          job={job}
                                    />)
                              }
                        </div>
                        <div onClick={handleSeeBtn} className={`${clip===false?'hidden':'block'} mt-10 flex justify-center items-center`}>
                              <button className='btn-primary  '>See All Jobs</button>
                        </div>


                  </div>


            </div>
      );
};

export default Home;