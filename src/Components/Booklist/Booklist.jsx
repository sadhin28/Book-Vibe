import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredwhishesList } from '../Utilities/addtodb';
import Book from '../Book/Book';
import ListedBook from '../ListedBook/ListedBook';
import WishList from '../WishList/WishList';

const Booklist = () => {
    const deletelocalStore=()=>{
        localStorage.clear()
    }
    const [readlist, setredlist] = useState([])
    const allBooks = useLoaderData()
    const [wishes,setwishes]=useState([])
    
    useEffect(() => {
        const storeReadlist = getStoredReadList();
        const storedListint = storeReadlist.map(id => parseInt(id));
        const booklist = allBooks.filter(book => storedListint.includes(book.bookId))
        setredlist(booklist)
          
        
    }, [])
    useEffect(()=>{
        const storewishes = getStoredwhishesList();
         
         const storewishesInt = storewishes.map(id=> parseInt(id));
         console.log(storewishesInt)
           const wishbook = allBooks.filter(book => storewishesInt.includes(book.bookId))
           setwishes(wishbook)
         
    },[])
    
    return (
        <div className='mb-10'>
            <h1 className='text-center font-bold text-3xl mt-5'>Listed Books : {readlist.length}</h1>
            <Tabs>
                <TabList className='font-bold'>
                    <Tab>Wishlist Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel className='mt-10'>
                   
                    <div className='px-2 grid gap-5'>
                         
                        {
                            
                            readlist.map(data =><ListedBook  data={data} key={data.bookId}></ListedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                      <div>
                          {
                            wishes.map(data=><WishList data={data} key={data.bookId}></WishList>)
                          }
                      </div>
                </TabPanel>
            </Tabs>
            <button onClick={deletelocalStore} className='btn mt-5 hover:bg-[#23BE0A] hover:text-white'>Clean Read Book</button>
        </div>
    );
};

export default Booklist;