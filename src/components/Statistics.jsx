import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



const Statistics = () => {
      const data = [
            {
                  name: "A1",
                  mark: 60,
                  // pv: 2400,
                  // amt: 2400
            },
            {
                  name: "A2",
                  mark: 60,
                  // pv: 2400,
                  // amt: 2400
            },
            {
                  name: "A3",
                  mark: 57,
                  // pv: 2400,
                  // amt: 2400
            },
            {
                  name: "A4",
                  mark: 60,
                  // pv: 1398,
                  // amt: 2210
            },
            {
                  name: "A5",
                  mark: 60,
                  // pv: 9800,
                  // amt: 2290
            },
            {
                  name: "A6",
                  mark: 54,
                  pv: 3908,
                  amt: 2000
            },
            {
                  name: "A7",
                  mark: 60,
                  // pv: 4800,
                  // amt: 2181
            },
            {
                  name: "A8",
                  mark: 60,
                  // pv: 3800,
                  // amt: 2500
            }
      ];
      let totalMark = 0;
      let i = 0;

      for (const id in data) {
            totalMark += data[id].mark;
            i++;
      }
      const avgMark = (totalMark / i).toFixed(2);

      return (

            <>
                  <div className=" text-center text-4xl font-bold lg:py-20 md:py-16 py-10 background ">Statistics</div>

                  <div className="my-container w-full  h-[500px] bg-slate-200 pt-10 lg:px-20 pb-32 rounded-lg mb-32 ">

                        <div>
                              <h1 className='text-2xl font-bold'>Assignment Analytics</h1>
                              <div className=' flex justify-start items-center gap-4 my-4'>
                                    <FontAwesomeIcon className='p-4 bg-slate-50 rounded-[50%] h-8 text-amber-400' icon={faStar} />
                                    <div>
                                          <p className='text-xl font-bold '>{avgMark}</p>
                                          <p>Avg Assignment Mark</p>
                                    </div>
                              </div>
                        </div>

                        <ResponsiveContainer>
                              <BarChart

                                    data={data}
                                    margin={{
                                          top: 20,
                                          right: 30,
                                          left: 20,
                                          bottom: 5
                                    }}
                              >
                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />

                                    <Bar dataKey="mark" fill="#8884d8" />

                              </BarChart>
                        </ResponsiveContainer>
                        
                  </div >
            </>


      );


}

export default Statistics;