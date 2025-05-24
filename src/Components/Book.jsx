import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { setStoredList } from '../Utilities/addToLocalStorage';
const Book = ({book}) => {

    const [isWishList, setIsWishList] = useState(false);

    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`books/${book.bookId}`)
    }

    const handleAddToWishList = (idx) => {
        setStoredList(idx);
        setIsWishList(!isWishList);
    }

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <img
            src={book.image}
            alt={`Cover of ${book.bookName}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => {
              handleAddToWishList(book.bookId)
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            {!isWishList ? (
              <AiOutlineHeart className="text-red-500"></AiOutlineHeart>
            ) : (
              <AiFillHeart className="text-red-500"></AiFillHeart>
            )}
          </button>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
              {book.bookName}
            </h2>
            <span className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {book.rating}
            </span>
          </div>
          <p className="text-gray-600 mb-2">by {book.author}</p>

          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">
              {book.category}
            </span>
            {book.tags &&
              book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              {book.totalPages} pages • {book.yearOfPublishing}
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium" onClick={handleDetails}>
              Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default Book;