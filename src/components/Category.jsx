import React from 'react';

const Category = ({category}) => {
      const {name, picture, total_jobs}=category;
      // console.log(picture);
      return (
            <div className=' bg-gray-100 rounded-lg px-4 py-8 flex flex-col justify-center items-center gap-4'>
                  <img src={picture} alt="" />
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p>{total_jobs} jobs Available</p>
            </div>
      );
};

export default Category;