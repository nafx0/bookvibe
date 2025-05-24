import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import ListedBooks from './Components/ListedBooks';
import BookDetails from './Components/BookDetails';
import { ToastContainer } from 'react-toastify';
import Form from './Components/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/login",
        element: <Form></Form>
      }
    ]
  }, 
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
