
import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip } from 'recharts';
const Dashboard = () => {

    const data = useLoaderData()

    return (
        <div>
            <div className='font-black p-5 '>
            <BarChart className=''width={1000} height={550}  data={data}>
                <XAxis dataKey={'bookName'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke="#ccc" />
                <Bar dataKey='totalPages' barSize={60} fill="#C51095FF"  ></Bar>
                
              
                
            </BarChart>
        </div>
           
        </div>
    );
};

export default Dashboard;