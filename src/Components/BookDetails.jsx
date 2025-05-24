import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import {setReadStoredList, setStoredList} from '../Utilities/addToLocalStorage';

const BookDetails = () => {
    const {bookId} = useParams();
    const idx = parseInt(bookId);

    const books = useLoaderData();
    const foundBook = books.find(foundBook => idx === foundBook.bookId);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const handleAddToWishList = (idx) => {
        setStoredList(idx);
    }

    const handleAddToReadList = (idx) => {
        setReadStoredList(idx)
    }

    return (
      <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          <div className="flex justify-center items-center">
            <img
              src={foundBook.image}
              alt={foundBook.bookName}
              className="rounded-xl w-full max-w-sm shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {foundBook.bookName}
              </h2>
              <p className="text-lg text-gray-600 mt-1 mb-4">
                by {foundBook.author}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {foundBook.category}
                </span>
                {foundBook.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                {foundBook.review}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-800">Pages:</span>{" "}
                  {foundBook.totalPages}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Rating:</span>{" "}
                  ⭐ {foundBook.rating}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    Published:
                  </span>{" "}
                  {foundBook.yearOfPublishing}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    Publisher:
                  </span>{" "}
                  {foundBook.publisher}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col lg:flex-row gap-3">
              <button className="w-full md:w-auto px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-xl shadow-md transition duration-300" onClick={() => handleAddToWishList(foundBook.bookId)}>
                Add to Wishlist
              </button>
              <button className='w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl shadow-md transition duration-300' onClick={() => handleAddToReadList(foundBook.bookId)}>
                Mark As Read
              </button>
              <button
                onClick={handleGoBack}
                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition duration-300">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;