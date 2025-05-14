import { useParams } from "react-router-dom";

const BookDetail = () => {
    const data = useParams()
    console.log(data)
    return (
        <div>
            <h1>Book details {data.bookId
}</h1>
        </div>
    );
};

export default BookDetail;