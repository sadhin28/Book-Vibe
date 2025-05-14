import { Link } from "react-router-dom";

const Book = ({ data }) => {
    const { bookName,category, image,author,rating } = data;
    return (
        <div className="hover:translate-0.5 hover: hover:transform-border border border-gray-300 card w-[385px]  bg-[1px	Inside
            #13131326]  shadow-sm">
            <figure className=" border border-gray-500 rounded-xl m-5 bg-gray-300 px-5 pt-5 pb-5">
                <img
                    src={image}
                    alt="Books"
                    className="rounded-xl w-full  h-80  " />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{bookName}</h2>
                <p>{author}</p>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                   <div>
                    {category}
                   </div>
                   <div>
                    
                    {rating}
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Book;