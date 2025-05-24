import React from 'react';

const ReadBooks = ({readBook}) => {

    return (
        <div>
            <div
          key={readBook.bookId}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 border rounded-2xl shadow-sm hover:shadow-md transition-all bg-white"
        >
          {/* Book Image */}
          <div className="min-w-[120px] max-w-[120px] h-[160px] overflow-hidden rounded-lg border">
            <img
              src={readBook.image}
              alt={readBook.bookName}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Book Details */}
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">{readBook.bookName}</h2>
            <p className="text-sm text-gray-600">
              By : <span className="font-medium">{readBook.author}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-sm">
              {readBook.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md bg-green-100 text-green-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-1">
              <span>Year of Publishing: {readBook.yearOfPublishing}</span>
              <span>Publisher: {readBook.publisher}</span>
              <span>Page: {readBook.totalPages}</span>
            </div>

            {/* Category & Rating */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                Category: {readBook.category}
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                Rating: {readBook.rating}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm">
              View Details
            </button>
          </div>
        </div>
        </div>
    );
};

export default ReadBooks;