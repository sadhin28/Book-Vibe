import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { useEffect, useState } from "react";

const Home = () => {
    const [bookData,setBookdata]=useState([])
   
    const data = useLoaderData();
    useEffect(()=>{
        setBookdata(data)
    },[])
    return (
        <div className="">
           <div className="mt-10 mb-20">
                <Banner></Banner>
           </div>
           <div className="mb-10">
             <Books key={bookData.bookId} bookData={bookData}></Books>
           </div>
        </div>
    );
};

export default Home;