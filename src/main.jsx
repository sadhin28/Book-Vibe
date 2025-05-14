import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Booklist from './Components/Booklist/Booklist.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import { ToastContainer } from 'react-toastify';
  

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        loader:()=>fetch('booksData.json'),
        element:<Home></Home>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
        
      },
      {
        path:"booklist",
         loader:()=>fetch('booksData.json'),
        element:<Booklist></Booklist>
      },
      {
        path:"/sign-in",
        element:<SignIn></SignIn>
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      },
      {
        path:'book/:bookId',
        loader:()=>fetch('booksData.json'),
        element:<BookDetail></BookDetail>
      },
      {
        path:'books/:bookId',
        loader:()=>fetch('booksData.json'),
        element:<BookDetail></BookDetail>
      },
     
    ]

  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer  position='top-center'/>
  </StrictMode>,
)
