import { Link } from 'react-router-dom';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero rounded-2xl bg-base-200 min-h-150">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-50  ">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <p className="py-6">
                       
                    </p>
                    <Link to="/booklist"><button className="bg-[#23BE0A] text-white text-xl border-none btn btn-primary">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;