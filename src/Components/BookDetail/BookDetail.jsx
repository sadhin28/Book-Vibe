import join from "daisyui/utilities/join";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const bookDetails = useLoaderData();
    const book = bookDetails.find(book => book.bookId === id)
    const { author,tags, image, bookName ,category,review} = book
    return (
        <div className="">
            <div className="hero   bg-base-100 rounded-2xl  mt-10 mb-10  min-h-180">
                <div className=" hero-content  gap-10 flex-col lg:flex-row md:flex-row">
                    <img
                        src={image}
                        className="max-w-sm bg-[#1313130D] rounded-lg shadow-2xl"
                    />
                    <div className="  rounded-2xl">
                        <h1 className="md:text-5xl text-2xl font-bold">{bookName}</h1>
                        <p className="md:text-2xl text-xl">By : {author}</p>
                        <div className="divider"></div>
                        <p className="md:text-2xl text-xl">{category}</p>
                         <div className="divider"></div>
                        <p className="py-6 text-justify md:text-2xl text-xl"><span className="font-bold">Review :</span> {review}</p>
                        
                        <div className="flex gap-2">
                            <p className="md:text-2xl text-xl font-bold" >Tags:</p>
                            <div className="flex gap-[10px]">
                                {
                                tags.map((tag,index)=><button key={index} className="bg-[#23BE0A0D] rounded-[30px] text-[16px] text-[#23BE0A] w-[125px] h-[33px]"># {tag}</button>)
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;