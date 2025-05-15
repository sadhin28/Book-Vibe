
import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis,Tooltip } from 'recharts';
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
        <div className="">

            <BarChart width={700} height={300} data={data}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar  dataKey="totalPages" fill="#8884d8"
                    shape={<TriangleBar />} label={renderCustomBarLabel} />
            </BarChart>

        </div>
    );
};

export default Dashboard;