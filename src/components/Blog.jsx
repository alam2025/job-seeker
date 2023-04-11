import React from 'react';


const Blog = () => {
      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 background ">Blogs</div>

                  <div className=' my-container flex gap-12'>
                        <div className='lg:w-[50%]'>
                              <div>
                                    <h1 className='text-primary-size'>a. When should you use context API?</h1>
                                    <p>Generally, We fetch or declare data in the parent component. Then pass the data by props drilling. 
                                          <br />
                                    It's easy but sometimes it's difficult if the child  is situated more deeper from the parent . So, It's not a proper way to share data.
                                    <br />
                                    To overcomes the problems, Context API is araise. It's simple to apply. Just Fetch or declare data in the parent component then share data all the child. It's works like a mobile tower.
                                    </p>
                              </div>
                              <div>
                                    <h1 className='text-primary-size'>b. What is a custom hook?</h1>
                              </div>
                        </div>
                        <div className='lg:w-[50%]'>
                              <div>
                                    <h1 className='text-primary-size'>c. What is useRef? </h1>
                              </div>
                              <div>
                                    <h1 className='text-primary-size'>d. What is useMemo?</h1>
                              </div>

                        </div>
                  </div>
            </>
      );
};

export default Blog;