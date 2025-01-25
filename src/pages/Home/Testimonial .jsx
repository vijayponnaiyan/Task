import React, { useState, useEffect } from 'react';
import manone from '../../images/Testimonial/T-1.webp';
import mantwo from '../../images/Testimonial/T-2.webp';
import manthree from '../../images/Testimonial/T-3.webp';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerLogos from '../../pages/Home/CustomerLogos';


export default function TestimonialCarousel() {
    const testimonials = [
        {
            image: manone,
            quote: "Hexnode is of great value. Works great with Android and iOS!",
            name: "Justin Modrak",
            position: "Technology Coordinator",
            organization: "East Troy Community School District",
        },
        {
            image: mantwo,
            quote: "Most complete MDM solution I found, and I tested many of them, including major names",
            name: "Dalibor Kruljac",
            position: "KAMELEYA LTD",
            organization: "Global Tech Solutions",
        },
        {
            image: manthree,
            quote: "It seemed to be in-line with everything we were looking at.",
            name: "Chris Robinson",
            position: "Executive Account Manager, NCS",
            organization: "Innovate Enterprises",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically slide to the next testimonial every 8 seconds (slower auto slide)
    useEffect(() => {
        const intervalId = setInterval(handleNext, 8000); // Increased interval time
        return () => clearInterval(intervalId); // Clear interval on unmount
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div>
                <div className="pt-28 p-5">
                    {/* Heading */}
                    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight mb-10">
                        Why should you choose Hexnode?
                    </h1>

                    {/* Carousel Section */}
                    <div className="flex justify-center items-center pt-10 space-x-4">
                        {/* Left Button */}
                        <button
                            onClick={handlePrev}
                            className="p-[20px] bg-white shadow-lg rounded-md hover:bg-gray-200"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Testimonial Box */}
                        <div className="bg-white  shadow-lg rounded-xl flex flex-col sm:flex-row items-center sm:items-start w-full max-w-4xl overflow-hidden transition-all duration-1500 ease-in-out">
                            {/* Image Section */}
                            <div className="w-full sm:w-1/2 h-64 sm:h-80 flex items-center justify-center">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt="Testimonial"
                                    className="object-cover w-full h-full"
                                />
                            </div>


                            {/* Text Section */}
                            <div className="p-[33px] pt-16  pl-10  text-center sm:text-left">
                                <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <hr className="w-auto my-4" />

                                <p className="text-lg font-semibold text-gray-900">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
                                <p className="text-sm text-gray-600">
                                    {testimonials[currentIndex].organization}
                                </p>
                            </div>
                        </div>

                        {/* Right Button */}
                        <button
                            onClick={handleNext}
                            className="p-[20px] bg-white shadow-lg rounded-md hover:bg-gray-200"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className=' '>
                    < CustomerLogos />
                </div>
            </div>
        </>
    );
}
