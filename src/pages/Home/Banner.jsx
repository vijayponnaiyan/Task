import React from 'react';
import banner from '../../images/desktop.webp';

export default function Banner() {
  return (
    <div className="px-6 md:px-14 py-6 flex flex-col-reverse md:flex-row items-center justify-between md:space-x-8">
    {/* Text Section */}
    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6" data-aos="fade-right" data-aos-duration="1000" >
      <h1
        className="text-2xl sm:text-4xl md:text-5xl font-medium text-white"
        style={{ lineHeight: "1.3" }}
      >
        Turn your devices into kiosks in a few minutes with Hexnode UEM
      </h1>
  
      {/* Input and Button Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 pt-6 w-full">
        <input
          type="text"
          placeholder="Enter your email"
          aria-label="Email Address"
          className="w-full md:w-3/4  p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <button
          type="button"
          className="w-full md:w-1/2 px-4 py-3 bg-rose-600 text-white font-medium rounded hover:bg-rose-800 focus:ring-4 focus:ring-red-300 transition-transform duration-200 transform hover:scale-105 shadow-lg"
          aria-label="Get Started Now"
        >
          GET STARTED NOW!
        </button>
      </div>
    </div>
  
    {/* Image Section */}
    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center"   data-aos="fade-left" data-aos-duration="1000"  >
      <img
        src={banner}
        alt="Hexnode UEM banner showcasing device kiosks"
        className="w-full md:max-w-md h-auto rounded-lg shadow-lg  delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300"
      />
    </div>
  </div>
  
  

  );
}
