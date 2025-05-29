import { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredwhishesList } from '../Utilities/addtodb';
import Book from '../Book/Book';
import ListedBook from '../ListedBook/ListedBook';
import WishList from '../WishList/WishList';
import { Helmet } from 'react-helmet-async';

const Booklist = () => {
    const deletelocalStore = () => {
        localStorage.clear()
    }
    const [readlist, setredlist] = useState([])
    const allBooks = useLoaderData()
    const [wishes, setwishes] = useState([])
    const [sort,setsort]=useState('')
  

    useEffect(() => {
        const storeReadlist = getStoredReadList();
        const storedListint = storeReadlist.map(id => parseInt(id));
        const booklist = allBooks.filter(book => storedListint.includes(book.bookId))
        setredlist(booklist)


    }, [])
    useEffect(() => {
        const storewishes = getStoredwhishesList();

        const storewishesInt = storewishes.map(id => parseInt(id));
        console.log(storewishesInt)
        const wishbook = allBooks.filter(book => storewishesInt.includes(book.bookId))
        setwishes(wishbook)

    }, [])


    const handelSortbyrating =sortType=>{
        setsort(sortType);
        if(sortType === 'rating'){
            const sortbyRating= [...readlist].sort((a,b)=>a.rating - b.rating);
            setredlist(sortbyRating);
        }
    }
    const handelSortbypages =sortType=>{
        setsort(sortType)
        if(sortType === 'Pages'){
            const sortedreadlist =[...readlist].sort((a,b)=>a.totalPages - b.totalPages)
            setredlist(sortedreadlist);
        }
    }
    return (
        <div className='mb-10'>
             <Helmet>
                <title>Book Vibe | ListedBooks</title>
             </Helmet>

            <Tabs className="mt-5  ">
                <TabList className='font-bold text-xl '>
                    <Tab>Readlisht Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel className='mt-10 '>
                    <div className='mb-5 text-center'>
                <details className="dropdown ">
                    <summary className="btn text-xl  text-white  rounded-2xl bg-[rgb(3,170,0)] hover:bg-[rgb(35,190,10)] m-1">{sort?`Sort by ${sort}`: "Sort By"}</summary>
                    <ul className="menu duration-1000 dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='hover:duration-300 hover:bg-black hover:rounded-2xl hover:text-white' onClick={()=>handelSortbyrating('rating')}><a className='rounded-2xl'>Ratings</a></li>
                        <li className='hover:duration-300 hover:bg-black hover:rounded-2xl hover:text-white' onClick={()=>handelSortbypages('Pages')}><a className='rounded-2xl'>No Of Pages</a></li>
                    </ul>
                </details>
            </div>
                    <div className='px-2 grid gap-5'>

                        {

                            readlist.map(data => <ListedBook data={data} key={data.bookId}></ListedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                    <div className='px-2 grid gap-5'>
                        {
                            wishes.map(data => <WishList data={data} key={data.bookId}></WishList>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            <button onClick={deletelocalStore} className='btn mt-5 hover:bg-[rgb(35,190,10)] hover:text-white'>Clean Read Book</button>
        </div>
    );
};

export default Booklist;