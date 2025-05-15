
import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis,Tooltip, ResponsiveContainer, CartesianGrid,  } from 'recharts';
const Dashboard = () => {
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const renderCustomBarLabel = ({ x, y, width, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`Pages: ${value}`}</text>;
    };
    const data = useLoaderData()

    return (
        <div className=" mt-20 mb-20">
            
                <div id="bar1" className="">
                    <BarChart data={data}
                 width={400} height={400}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="bookName"></XAxis>
                     <YAxis />
                      <CartesianGrid stroke="#ccc" />
                        <Tooltip />
                         <Bar dataKey="totalPages" barSize={40}></Bar>

                </BarChart>
                </div>
                <div>
                    <BarChart data={data}
                 width={400} height={400}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="bookName"></XAxis>
                     <YAxis />
                      <CartesianGrid stroke="#ccc" />
                        <Tooltip />
                         <Bar dataKey="totalPages" barSize={40}></Bar>

                </BarChart>
                </div>
          
        </div>
    );
};

export default Dashboard;