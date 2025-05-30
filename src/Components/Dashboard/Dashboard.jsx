
import { useLoaderData } from "react-router-dom";
import './Dashboard.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, } from 'recharts';
import Piechart from "../Piechart/Piechart";
import { Helmet } from "react-helmet-async";
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
        <div className=" mt-10">
            <Helmet>
                <title>Book Vibe | Statistics</title>
            </Helmet>
            <h1 className="text-center md:mb-10 font-bold text-2xl">Total Pages Bar Chart</h1>
            <div className="flex px-5 ">
                <BarChart className="mx-auto" data={data}
                    barGap={70}
                    width={800} height={500}

                >
                    <XAxis className="font-bold " dataKey="bookName"></XAxis>
                    <YAxis dataKey="" />
                    <CartesianGrid stroke="#ccc" />

                    <Bar shape={TriangleBar} dataKey="totalPages" fill="#93C837FF" label={renderCustomBarLabel} barGap={50}></Bar>

                </BarChart>
            </div>

            <Piechart data={data}></Piechart>

        </div>
    );
};

export default Dashboard;