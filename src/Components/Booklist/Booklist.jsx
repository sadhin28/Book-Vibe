import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utilities/addtodb';
import Book from '../Book/Book';
import ListedBook from '../ListedBook/ListedBook';

const Booklist = () => {
    const deletelocalStore=()=>{
        localStorage.clear()
    }
    const [readlist, setredlist] = useState([])
    const allBooks = useLoaderData()

    useEffect(() => {
        const storeReadlist = getStoredReadList();
        const storedListint = storeReadlist.map(id => parseInt(id));
        const booklist = allBooks.filter(book => storedListint.includes(book.bookId))
        setredlist(booklist)
       
    }, [])
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            <button onClick={deletelocalStore} className='btn mt-5 hover:bg-[#23BE0A] hover:text-white'>Clean Read Book</button>
        </div>
    );
};

export default Booklist;