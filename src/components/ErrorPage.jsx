import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const error = useRouteError();
      const navigate = useNavigate();
      return (
            <div className=' w-10/12 mx-auto text-center flex flex-col justify-center items-center min-h-screen gap-6'>
                  <h1 className=' text-4xl font-bold'>Oops!</h1>
                  <p className=' text-xl'>Sorry, an unexpected error has occurred.</p>
                  <p>{error.data}</p>
                  <p>
                        <i>{error.statusText || error.message}</i>
                  </p>
                  <button onClick={()=>navigate(-1)} className=' border-2 px-6 py-3 hover:text-blue-950 font-bold rounded-md hover:bg-slate-300'>Go Back</button>

            </div>
      );
};

export default ErrorPage;