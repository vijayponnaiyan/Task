import React, { useState, useEffect } from 'react';
import logo from '../../images/two.PNG'; // Ensure this file exists
import logo2 from '../../images/one.PNG'; // Ensure this file exists
import CustomButton from '../../components/Button/CustomButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600 p-0 transition-all duration-300 ${isHovered || isScrolled ? 'bg-white' : 'bg-transparent'
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a
            href="#"
            className="flex items-center space-x-3 sm:pl-4 md:pl-8 lg:pl-14 rtl:space-x-reverse"
          >
            <img
              src={isHovered || isScrolled ? logo : logo2}
              className="h-8 sm:h-6 md:h-7 lg:h-8 transition-all duration-300"
              alt="Logo"
            />
          </a>

          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse sm:pr-4 md:pr-8 lg:pr-14">
            <CustomButton
              text="14 DAY FREE TRIAL"
              onClick={() => alert('Free trial button clicked!')}
              className="hidden md:block"
            />

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-lg border-l border-gray-200 dark:border-gray-700 z-30`}
      >
        <div className="p-6">
          <button
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 rounded-full p-2"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <br />

          <button
            type="button"
            className="block focus:outline-none text-white w-full sm:w-52 md:w-64 lg:w-52 bg-rose-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-base px-6 py-3 me-2 mb-2 transition-all duration-200 transform hover:scale-105 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-lg"
          >
            14 DAY FREE TRIAL
          </button>

        </div>
      </div>
    </>
  );
}
