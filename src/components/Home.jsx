import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
      const catagories= useLoaderData();
      console.log(catagories);
      return (
            <div className='my-container mb-96'>
                  {/* banner section  */}
                  <Banner/>
                  {/* Category list  */}
                  <div>
                        <h1 className=' text-center text-4xl font-bold font-serif'>Job Category List</h1>
                        <p className=' text-center text-lg mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                  </div>
            </div>
      );
};

export default Home;