import Book from "../Book/Book";

const Books = ({bookData}) => {
   
    return (
        <div>
            <h1 className="text-2xl font-black text-center">Books: {bookData.length}</h1>
        
            <div className="md:gap-15 mt-20 md:justify-items-center justify-center grid gap-10  md:grid-cols-2 lg:grid-cols-3">
                {
                  bookData.map((data,index)=><Book key={index} data={data} ></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;