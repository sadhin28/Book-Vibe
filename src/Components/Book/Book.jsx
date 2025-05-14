import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const Book = ({ data }) => {
    const { bookName,category,tags, image,author,rating } = data;
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
                <div className="flex gap-[10px]">
                    {
                        tags.map(tag=><button className="bg-[#23BE0A0D] rounded-[30px] text-[16px] text-[#23BE0A] w-[125px] h-[33px]">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>{author}</p>
                <div className="border mt-2 mb-2 border-dashed t border-gray-500"></div>
                <div className="flex justify-between items-center">
                   <div>
                    {category}
                   </div>
                   <div className="flex items-center gap-1">
                    {rating}
                    <FaStar  className="text-yellow-300"/>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Book;