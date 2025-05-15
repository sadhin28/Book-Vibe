import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Piechart = ({data}) => {

 
    return (
        <div className=''>
          <h1 className='text-center font-bold text-2xl mt-0 md:mt-15'>Book Rating</h1> 
       
        <PieChart className='mx-auto' width={400} height={400}>
          <Pie
            dataKey="rating"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#190EEEFF"
            label
          />
        </PieChart>
     
        </div>
    );
};

export default Piechart;