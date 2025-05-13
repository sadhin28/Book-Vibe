const Book = ({ data }) => {
    const { bookName, author, image, } = data;
    return (
        <div className=" border card w-[300px] bg-base-100 w-76 shadow-sm">
            <figure className=" border rounded-xl m-5 bg-gray-300 px-5 pt-5 pb-5">
                <img
                    src={image}
                    alt="Books"
                    className="rounded-xl w-full  h-70  " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;