import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {
      const catagories= useLoaderData();
      // const jobs = useLoaderData();
      // console.log(jobs);
      return (
            <div className='my-container mb-96'>
                  {/* banner section  */}
                  <Banner/>

                  {/* Category list  */}
                  <div className=' mt-32'>
                        <h1 className=' text-center text-4xl font-bold font-serif'>Job Category List</h1>
                        <p className=' text-center text-lg mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10'>
                              {
                                    catagories.map((category,idx)=><Category
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

                         <div>
                              {

                              }
                         </div>


                  </div>

                 
            </div>
      );
};

export default Home;