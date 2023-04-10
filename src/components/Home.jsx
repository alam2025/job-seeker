import React, { createContext, useContext, useState } from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';
import { jobContext } from '../App';
import Job from './Job';





const Home = () => {
      let jobs = useContext(jobContext)
      const [clip, setclip] = useState(true);
      clip === true ? jobs = jobs.slice(0, 4) : jobs;


      const handleSeeBtn = () => {
            setclip(false)
      }


      const categories =[
            {
                  "name": "Account & Finance",
                  "picture": "https://i.postimg.cc/J4hFNSNg/accounts-1.png",
                  "total_jobs": 150
            },
            {
                  "name": "Creative Design",
                  "picture": "https://i.postimg.cc/266Wcd0z/business-1.png",
                  "total_jobs": 80
            },
            {
                  "name": "Marketing & Sales",
                  "picture": "https://i.postimg.cc/qvvCMxd2/social-media-1.png",
                  "total_jobs": 250
            },
            {
                  "name": "Engineering Job",
                  "picture": "https://i.postimg.cc/Vstq3gY6/chip-1.png",
                  "total_jobs": 300
            }
      ]

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
                                          categories.map((category, idx) => <Category
                                                key={idx}
                                                category={category}

                                          />)
                                    }
                              </div>
                        </div>

                        {/* jobs section  */}
                        <div className=' mt-20' id='section1'>
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
                              <div onClick={handleSeeBtn} className={`${clip === false ? 'hidden' : 'block'} mt-10 flex justify-center items-center`}>
                                    <button className='btn-primary  '>See All Jobs</button>
                              </div>


                        </div>


                  </div>
           
      );
};

export default Home;