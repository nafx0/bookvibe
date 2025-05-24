import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from "react-spinners";
import Book from './Book';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const color = "#36d7b7";

  useEffect(() => {
    axios
      .get("booksData.json")
      .then((response) => {
        setBooks(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Bookshelf Collection
              </h1>
              <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
                Discover and manage your favorite books. Click the heart icon to add books to your wishlist.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <Book book={book} key={book.bookId} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
