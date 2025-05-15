
const WishList = ({data}) => {
    const {image,bookName,category,author,rating,tags,totalPages,bookId}=data
    return (
        <div className=" p-4 gap-10 card border border-amber-100 bg-gray-100">
            
            <div className="flex  gap-5 md:gap-20 items-center">
                <img className="h-50 w-40 rounded-2xl" src={image} alt="" />
                <div className="">
                 <div className="mb-2">
                     <h1 className="text-2xl"><span className="font-bold">Name:</span> {bookName}</h1>
                 </div>
                <div className="flex items-center gap-2" >
                    <h1 className="font-bold text-2xl">Tags: </h1>
                    <div className="flex gap-2 items-center text-center ">
                         {
                         tags.map(tag=><p className="px-2 border bg-amber-200 rou rounded-3xl">#{tag}</p>)
                       }
                    </div>
                </div>
               <h1 className="text-2xl"><span className="font-bold">Category:</span> {category}</h1>
                </div>
            </div>
        </div>
    );
};

export default WishList;