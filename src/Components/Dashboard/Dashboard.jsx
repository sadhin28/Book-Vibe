
import { useLoaderData } from "react-router-dom";
import './Dashboard.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, } from 'recharts';
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
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-10}>{`${value}`}</text>;
    };
    const data = useLoaderData()

    return (
        <div className=" mt-20 mb-20 ">

            <div className="flex px-5 ">
                <BarChart className="mx-auto"  data={data}
                    barGap={70}
                    width={1200} height={500}
                   
                    >
                    <XAxis dataKey="image"></XAxis>
                    <YAxis />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <Bar shape={TriangleBar} dataKey="totalPages" fill="#93C837FF"  label={renderCustomBarLabel} barGap={50}></Bar>

                </BarChart>
            </div>

        </div>
    );
};

export default Dashboard;