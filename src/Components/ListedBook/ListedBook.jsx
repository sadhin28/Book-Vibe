import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({data}) => {
    const {image,bookName,category,author,rating,tags,totalPages,bookId}=data
    return (
        <div className='border border-gray-300 bg-[1px card	Inside
#13131326]'>
            <div className='flex md:gap-20 gap-5 p-5 items-center'>
                <img src={image} className='w-25 h-40' alt="" />
               <div>
                  <p className="font-bold text-2xl">{bookName}</p>
                <p>{author}</p>
                <div className="flex gap-2">
                            <p className="md:text-2xl text-xl " >Tags:</p>
                            <div className=" grid md:flex gap-[10px]">
                                {
                                    tags.map((tag, index) => <button key={index} className="bg-[#23BE0A0D] rounded-[30px] text-[16px] text-[#23BE0A] w-[125px] h-[33px]"># {tag}</button>)
                                }
                            </div>
                </div>
                <div className="flex mt-2 items-center gap-2">
                    <MdContactPage />
                    <p>Pages: {totalPages}</p>
                </div>
                
                <div className='divider w-full'></div>
                <div className="grid md:grid-cols-2 gap-5 md:flex ">
                     <button  className="bg-[#328EFF26] rounded-[30px] text-[16px]  text-[#328EFF] w-[150px] h-[40px]">Category : {category}</button>
                     <button  className="bg-[#FFAC3326] rounded-[30px] text-[16px] text-[#FFAC33] w-[150px] h-[40px]">Rating: {rating}</button>
                     <Link to={`/book/${bookId}`}> <button  className="bg-[#23BE0A] rounded-[30px] text-[16px] text-white w-[125px] h-[33px]">View Details</button></Link>
                     
                    
                </div>
               </div>
               
            </div>
           
        </div>
    );
};

export default ListedBook;