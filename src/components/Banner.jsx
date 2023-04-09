import React from 'react';

const Banner = () => {
      return (
            <div className=' flex flex-col md:flex-row gap-8  my-[50px]'>
                  {/* banner text  */}
                  <div className=' flex flex-col justify-start items-start gap-6 '>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>One Step <br /> Closer To Your <br /> <span className=' primary-color'>Dream Job</span></h1>
                        <p className=' text-[18px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started</button>

                  </div>
                  {/* banner image  */}
                  <div>
                        <img src="../../public/P3OLGJ1 copy 1.png" alt="" />
                  </div>
            </div>
      );
};

export default Banner;