
const WishList = ({data}) => {
    const datas = localStorage.getItem('whish-list')
    console.log(datas)
    return (
        <div>
            <img src={data.image} alt="" />
        </div>
    );
};

export default WishList;