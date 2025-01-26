import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'; // Import Chevron Icons
import Single from '../../pages/Home/component/Single';
import Multi from '../../pages/Home/component/Multi';
import Web from '../../pages/Home/component/Web';
import Digital from '../../pages/Home/component/Digital';
import AsamSection from '../../pages/Home/component/AsamSection';


const KioskModesAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0); // Set default open index to 0

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=' aspect-retro pt-24 bg-slate-50  h-auto  p-10'  >
            <div>
                <h1 className='text-center text-4xl font-semibold'>
                    Specific kiosk modes for unique use cases
                </h1>
            </div>

            {/* Accordion Buttons in Flex */}
           
            <div className=' flex flex-wrap justify-center pt-20 '    >
                {/* Single App Kiosk */}
                <div className='w-full sm:w-56'>
                    <button
                        type='button'
                        className={`border-2 w-full  rounded-md p-6 flex items-center justify-between transition-colors duration-300 ${openIndex === 0 ? 'bg-black bg-opacity-70 text-white' : 'border-gray-300 text-gray-600'
                            }`}
                        onClick={() => toggleAccordion(0)}
                    >
                        <span className='text-xl  font-medium' >Single App Kiosk</span>
                        <span className='lg:hidden'>
                            {openIndex === 0 ? (
                                <HiOutlineChevronUp className='text-white' />
                            ) : (
                                <HiOutlineChevronDown className='text-gray-700' />
                            )}
                        </span>
                    </button>

                    {/* Accordion Content */}
                    {openIndex === 0 && (
                        <div className='absolute  left-0 w-92 bg-gray-50 transition-all duration-3000 ease-in-out flex flex-col sm:flex-row px-6 sm:px-12 lg:px-24 '>
                            {/* Text Section */}
                            <Single />
                        </div>

                    )}
                </div>


                {/* Multi-App Kiosk */}
                <div className='w-full sm:w-56'>
                    <button
                        type='button'
                        className={`border-2 w-full rounded-md p-6 flex items-center justify-between transition-colors duration-300 ${openIndex === 1 ? 'bg-black bg-opacity-70 text-white' : 'border-gray-300 text-gray-600'
                            }`}
                        onClick={() => toggleAccordion(1)}
                    >
                        <span className='text-xl  font-medium' >Multi-App Kiosk</span>
                        <span className='lg:hidden'>
                            {openIndex === 1 ? (
                                <HiOutlineChevronUp className='text-white' />
                            ) : (
                                <HiOutlineChevronDown className='text-gray-700' />
                            )}
                        </span>
                    </button>
                    {openIndex === 1 && (
                        <div className='absolute left-0 w-full bg-slate-50 transition-all duration-3000 ease-in-out flex flex-col sm:flex-row px-6 sm:px-12 lg:px-24'>
                            {/* Text Section */}
                            <Multi />
                        </div>
                    )}
                </div>

                {/* Web-based Kiosk */}
                <div className='w-full sm:w-56'>
                    <button
                        type='button'
                        className={`border-2 w-full rounded-md p-6 flex items-center justify-between transition-colors duration-300 ${openIndex === 2 ? 'bg-black bg-opacity-70 text-white' : 'border-gray-300 text-gray-600'
                            }`}
                        onClick={() => toggleAccordion(2)}
                    >
                        <span className='text-xl  font-medium' >Web-based Kiosk</span>
                        <span className='lg:hidden'>
                            {openIndex === 2 ? (
                                <HiOutlineChevronUp className='text-white' />
                            ) : (
                                <HiOutlineChevronDown className='text-gray-700' />
                            )}
                        </span>
                    </button>
                    {openIndex === 2 && (
                        <div className='absolute  left-0 w-92 bg-slate-50 transition-all duration-3000 ease-in-out flex flex-col sm:flex-row px-6 sm:px-12 lg:px-24'>
                            {/* Text Section */}
                            <Web />
                        </div>
                    )}
                </div>

                {/* Digital Signages */}
                <div className='w-full sm:w-56'>
                    <button
                        type='button'
                        className={`border-2 w-full rounded-md p-6 flex items-center justify-between transition-colors duration-300 ${openIndex === 3 ? 'bg-black bg-opacity-70 text-white' : 'border-gray-300 text-gray-600'
                            }`}
                        onClick={() => toggleAccordion(3)}
                    >
                        <span className='text-xl  font-medium' >Digital Signages</span>
                        <span className='lg:hidden'>
                            {openIndex === 3 ? (
                                <HiOutlineChevronUp className='text-white' />
                            ) : (
                                <HiOutlineChevronDown className='text-gray-700' />
                            )}
                        </span>
                    </button>
                    {openIndex === 3 && (
                        <div className='absolute left-0 w-full bg-slate-50 transition-all duration-3000 ease-in-out flex flex-col sm:flex-row px-6 sm:px-12 lg:px-24'>
                            {/* Text Section */}
                            <Digital />
                        </div>
                    )}
                </div>

                {/* ASAM Kiosk */}
                <div className='w-full sm:w-56'>
                    <button
                        type='button'
                        className={`border-2 w-full rounded-md p-6 flex items-center justify-between transition-colors duration-300 ${openIndex === 4 ? 'bg-black bg-opacity-70 text-white' : 'border-gray-300 text-gray-600'
                            }`}
                        onClick={() => toggleAccordion(4)}
                    >
                        <span className='text-xl  font-medium' >ASAM Kiosk</span>
                        <span className='lg:hidden'>
                            {openIndex === 4 ? (
                                <HiOutlineChevronUp className='text-white' />
                            ) : (
                                <HiOutlineChevronDown className='text-gray-700' />
                            )}
                        </span>
                    </button>
                    {openIndex === 4 && (
                        <div className='absolute left-0 w-full bg-slate-50 transition-all duration-3000 ease-in-out flex flex-col sm:flex-row px-6 sm:px-12 lg:px-24'>
                            {/* Text Section */}
                            <AsamSection />
                        </div>
                    )}
                </div>
            </div>
            <div className="h-auto sm:h-96 px-4 sm:px-8 lg:px-16 bg-slate-50">
                <div className="p-5  border-r-cyan-50 sm:p-8 lg:p-12">
                  
                </div>
            </div>


        </div>
    );
};

export default KioskModesAccordion;
