import React from 'react';


const Blog = () => {
      return (
            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 background ">Blogs</div>

                  <div className=' my-container flex flex-col lg:flex-row gap-12 my-12'>
                        <div className='lg:w-[50%] flex flex-col gap-10 border p-6 rounded-md shadow-md '>
                              <div className=' border p-6 rounded-md shadow-md'>
                                    <h1 className='text-primary-size'>a. When should you use context API?</h1>
                                    <p className=' text-base'>Generally, We fetch or declare data in the parent component. Then pass the data by props drilling.
                                          <br />
                                          It's easy but sometimes it's difficult if the child  is situated more deeper from the parent . So, It's not a proper way to share data.
                                          <br />
                                          To overcomes the problems, Context API is araise. It's simple to apply. Just Fetch or declare data in the parent component then share data all the child. It's works like a mobile tower.
                                    </p>
                              </div>
                              <div className=' border p-6 rounded-md shadow-md'>
                                    <h1 className='text-primary-size'>b. What is a custom hook?</h1>
                                    <p className=' text-base'>Build in Hooks are Limited . But we need custom hook that users can apply easily .<br /><br />

                                    Custom Hook is a reusable function . <br />
                                    If a component logic need to use many component , then we create a custom hook logic . Then this logic used many componets just call the hook. <br /><br />

                                    Custom hook create with the first key 'use'. <strong>Like : useFetch</strong>


                                    </p>

                                    <p></p>
                              </div>
                        </div>
                        <div className='lg:w-[50%] flex flex-col gap-10 border p-6 rounded-md shadow-md '>
                              <div className=' border p-6 rounded-md shadow-md'>
                                    <h1 className='text-primary-size'>c. What is useRef? </h1>
                                    <p className=' text-base'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef'(initialValue)'. The object can persist a value for a full lifetime of the component. 
                                    
                                    </p>
                              </div>
                              <div className=' border p-6 rounded-md shadow-md'>
                                    <h1 className='text-primary-size'>d. What is useMemo?</h1>
                                    <p className=' text-base'>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                              </div>

                        </div>
                  </div>
            </>
      );
};

export default Blog;