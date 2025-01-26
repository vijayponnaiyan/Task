import React, { useState, useEffect } from "react";
import { IoGlassesOutline, IoClose } from "react-icons/io5"; // Icons for open and close states

export default function Floating() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = (event) => {
    event.stopPropagation();
    setIsPanelOpen((prev) => !prev);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  // Close panel on outside click
  useEffect(() => {
    const handleOutsideClick = () => setIsPanelOpen(false);
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      {/* Floating Button */}
      <div
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50"
        onClick={(e) => e.stopPropagation()} // Prevent panel close on button click
      >
        <button
          className={`flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 shadow-md text-white text-3xl cursor-pointer transition-transform duration-300`}
          onClick={togglePanel}
          aria-label="Toggle panel"
        >
          {isPanelOpen ? <IoClose /> : <IoGlassesOutline />}
        </button>

        {/* Panel */}
        <div
          className={`absolute bottom-16 right-0 w-72 md:w-80 transform transition-all duration-300 origin-bottom-right ${
            isPanelOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-0 invisible"
          }`}
        >
          <div className="bg-blue-700 text-white p-5 rounded-t-lg z-40 shadow-lg">
            Literature adds to reality, it does not simply describe it. It
            enriches the necessary competencies that daily life requires and
            provides; and in this respect, it irrigates the deserts that our
            lives have already become.
          </div>
          <div className="bg-white text-gray-400 p-4 rounded-b-lg text-sm shadow-lg">
            C.S. Lewis
          </div>
        </div>
      </div>
    </div>
  );
}
