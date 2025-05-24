import React from "react";
import bookPng from '../assets/books.jpg';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/listed-books");
    };

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="container mx-auto px-6 py-12 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Content section */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                            Books to <span className="text-indigo-600">freshen up</span> your bookshelf
                        </h1>
                        
                        <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Discover curated selections of captivating stories, thought-provoking ideas, and new perspectives to enrich your reading experience.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={handleNavigate}
                                className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-200"
                            >
                                View The List
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                            <div className="text-center p-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm">
                                <p className="text-3xl font-bold text-indigo-600">500+</p>
                                <p className="text-gray-600 text-sm">Books</p>
                            </div>
                            <div className="text-center p-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm">
                                <p className="text-3xl font-bold text-indigo-600">50+</p>
                                <p className="text-gray-600 text-sm">Authors</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1 text-center p-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm">
                                <p className="text-3xl font-bold text-indigo-600">20+</p>
                                <p className="text-gray-600 text-sm">Categories</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image section with decorative elements */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 mx-auto max-w-md lg:max-w-full">
                            <img
                                src={bookPng}
                                alt="Collection of books"
                                className="relative rounded-2xl w-full h-auto object-cover object-center transform transition-transform duration-500 hover:scale-105 z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;