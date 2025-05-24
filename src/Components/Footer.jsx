import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;