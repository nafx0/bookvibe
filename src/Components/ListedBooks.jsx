import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadStoredList, getStoredList } from '../Utilities/addToLocalStorage';
import ReadBooks from './ReadBooks';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  
  useEffect(() => {
    const storedReadList = getReadStoredList();
    const storedWishList = getStoredList();
    setReadBooks(allBooks.filter(book => storedReadList.includes(book.bookId)));
    setWishBooks(allBooks.filter(book => storedWishList.includes(book.bookId)));
  }, [allBooks]);

  const handleSort = (sortType, listType) => {
    if (sortType === "no of pages") {
      if (listType === "read") {
        const sortedBooks = [...readBooks].sort((a, b) => a.totalPages - b.totalPages);
        setReadBooks(sortedBooks);
      } else {
        const sortedBooks = [...wishBooks].sort((a, b) => a.totalPages - b.totalPages);
        setWishBooks(sortedBooks);
      }
    } else if (sortType === "rating") {
      if (listType === "read") {
        const sortedBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
        setReadBooks(sortedBooks);
      } else {
        const sortedBooks = [...wishBooks].sort((a, b) => b.rating - a.rating);
        setWishBooks(sortedBooks);
      }
    }
  };
 
  return (
    <div>
      <Helmet>
        <title>
          Boi Poka | Listed Books
        </title>
      </Helmet>
      <div className="bg-base-300 px-10 py-4 rounded-lg my-5">
        <h3 className="text-center font-bold text-4xl">Books</h3>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="dropdown flex justify-center mb-4">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort('rating', 'read')}>Rating</a>
              </li>
              <li>
                <a onClick={() => handleSort('no of pages', 'read')}>No of pages</a>
              </li>
            </ul>
          </div>
          <ul className="p-4 space-y-4 max-w-5xl mx-auto">
            {readBooks.map((readBook) => (
              <ReadBooks readBook={readBook} key={readBook.bookId}></ReadBooks>
            ))}
          </ul>
        </TabPanel>
        
        <TabPanel>
          <div className="dropdown flex justify-center mb-4">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort('rating', 'wish')}>Rating</a>
              </li>
              <li>
                <a onClick={() => handleSort('no of pages', 'wish')}>No of pages</a>
              </li>
            </ul>
          </div>
          <ul className="p-4 space-y-4 max-w-5xl mx-auto">
            {wishBooks.map((wishBook) => (
              <ReadBooks readBook={wishBook} key={wishBook.bookId}></ReadBooks>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;