import join from "daisyui/utilities/join";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const bookDetails = useLoaderData();
    const book = bookDetails.find(book => book.bookId === id)
    const { author, image, bookName ,category,review} = book
    return (
        <div>
            <div className="hero mt-10 mb-10 bg-base-200 min-h-180">
                <div className="hero-content gap-10 flex-col lg:flex-row md:flex-row">
                    <img
                        src={image}
                        className="max-w-sm w-300 rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="md:text-5xl text-2xl font-bold">{bookName}</h1>
                        <p className="md:text-2xl text-xl">By : {author}</p>
                        <div className="divider"></div>
                        <p className="md:text-2xl text-xl">{category}</p>
                         <div className="divider"></div>
                        <p className="py-6 text-justify md:text-2xl text-xl"><span className="font-bold">Review :</span> {review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;