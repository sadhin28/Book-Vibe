import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-150">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-60">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <p className="py-6">
                       
                    </p>
                    <button className=" py-6 btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;