const Book = ({ data }) => {
    const { bookName, image } = data;
    return (
        <div className=" border border-gray-300 card w-[385px]  bg-[1px	Inside
            #13131326]  shadow-sm">
            <figure className=" border border-gray-500 rounded-xl m-5 bg-gray-300 px-5 pt-5 pb-5">
                <img
                    src={image}
                    alt="Books"
                    className="rounded-xl w-full  h-80  " />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{bookName}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;