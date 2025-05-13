import Book from "../Book/Book";

const Books = ({bookData}) => {
   
    return (
        <div>
            <h1 className="text-2xl font-black text-center">Books: {bookData.length}</h1>
        
            <div className="mt-10">
                {
                  bookData.map(data=><Book data={data} ></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;