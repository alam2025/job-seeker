import React from 'react';
import { HashLink } from 'react-router-hash-link';
import bannerImg from '../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
      return (
            <div className=' flex flex-col md:flex-row gap-8  py-[50px] background lg:px-[100px] px-[25px] md:px-[50px]'>
                  {/* banner text  */}
                  <div className=' flex flex-col justify-start items-start gap-6 '>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>One Step <br /> Closer To Your <br /> <span className=' primary-color'>Dream Job</span></h1>
                        <p className=' text-[18px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <HashLink smooth to="/#jobs">
                              <button className='btn-primary'>Get Started</button>
                        </HashLink>;


                  </div>
                  {/* banner image  */}
                  <div>
                        <img src={bannerImg} alt="" />
                        <img src="" alt="" />
                  </div>
            </div>
      );
};

export default Banner;