import React from 'react';

const ListedBook = ({data}) => {
    const {image,bookName,author,tags}=data
    return (
        <div className='border-2 bg-[1px card	Inside
#13131326]'>
            <div className='flex md:gap-20 gap-5 p-5'>
                <img src={image} className='w-20' alt="" />
               <div>
                  <p>{bookName}</p>
                <p>{author}</p>
                <div className="flex gap-2">
                            <p className="md:text-2xl text-xl font-bold" >Tags:</p>
                            <div className="flex gap-[10px]">
                                {
                                    tags.map((tag, index) => <button key={index} className="bg-[#23BE0A0D] rounded-[30px] text-[16px] text-[#23BE0A] w-[125px] h-[33px]"># {tag}</button>)
                                }
                            </div>
                </div>
                <div className='divider'></div>
               </div>
            </div>
        </div>
    );
};

export default ListedBook;