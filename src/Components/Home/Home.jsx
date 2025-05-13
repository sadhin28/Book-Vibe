import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="">
           <div className="mt-10 mb-10">
                <Banner></Banner>
           </div>
           <div className="mb-10">
             <Books></Books>
                <div>
                    
                </div>
           </div>
        </div>
    );
};

export default Home;