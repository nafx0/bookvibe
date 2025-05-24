import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center px-4 py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="w-full max-w-lg text-center">
        {/* Error illustration */}
        <div className="relative mx-auto w-64 h-64 mb-8">
          <div className="absolute w-full h-full rounded-full bg-indigo-100 animate-ping opacity-20"></div>
          <div className="relative flex justify-center items-center">
            <svg className="w-48 h-48 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        
        {/* Error message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-3">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-indigo-500 font-medium mb-8 p-3 bg-indigo-50 rounded-lg inline-block">
          <i>{error?.statusText || error?.message || "Something went wrong"}</i>
        </p>
        
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium border border-indigo-200 hover:border-indigo-400 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Homepage
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
      </div>
    </div>
  );
}