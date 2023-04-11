import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";

const Statistics = () => {
    const students = [
        { id: 1, name: "Assignment-1", mark: 60 },
        { id: 2, name: "Assignment-2", mark: 60 },
        { id: 3, name: "Assignment-3", mark: 60 },
        { id: 4, name: "Assignment-4", mark: 59 },
        { id: 5, name: "Assignment-5", mark: 50 },
        { id: 5, name: "Assignment-6", mark: 60 },
        { id: 5, name: "Assignment-7", mark: 60 },
        { id: 6, name: "Assignment-8", mark: 60 }
    ];
    const cardinal = curveCardinal.tension(0.2);

    const xTickFormatter = (name) => {
        if (window.innerWidth >= 768) {
            return name;
        } else {
            return name.replace('Assignment', 'A');
        }
    };

    return (
        <div className='mb-28'>
             <div className='text-center md:py-32 py-28 job-d'>
            <h1 className='banner-2-title font-bold'>Statistics</h1>
          </div>
            <h1 className='text-3xl  text-center mt-4 font-semibold'><span className='text-[#7E90FE]'>Assignment</span> Analytics</h1>
            <div className='md:flex justify-center md:mt-20 mt-8 rechart'>
                <AreaChart
                    width={window.innerWidth >= 768 ? 1000 : window.innerWidth - 5}
                    height={window.innerWidth >= 768 ? 400 : 300}
                    data={students}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tickFormatter={xTickFormatter} />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="mark"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.3}
                    />
                    <Area
                        type={cardinal}
                        dataKey=""
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;
