import React from 'react';
import one from '../../images/bird-3.webp';
import two from '../../images/bird-2.webp';
import three from '../../images/bird-1.webp';

export default function SubBanner() {
  return (
<div className="p-5 px-9">
  <div className="h-auto text-center sm:px-10 md:px-16 lg:px-20 xl:px-16">
    {/* Responsive Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:divide-x divide-gray-700 gap-6">
      {[one, two, three].map((image, index) => (
        <div
          key={index}
          className="p-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 transform transition-transform duration-300 hover:-translate-y-2"
        >
          {/* Image Section */}
          <img src={image} alt="" className="max-w-full" />

          {/* Text Section */}
          <p className="text-gray-400 text-sm md:text-base max-w-xs md:max-w-md lg:max-w-sm">
            {index === 0
              ? 'Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.'
              : index === 1
              ? 'Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.'
              : 'Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.'}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


  
  
  );
}
