import React from "react";
import logoone from "../../images/PlatForms/ana-1.svg";
import logotwo from "../../images/PlatForms/ana-2.svg";
import logothree from "../../images/PlatForms/ana-3.svg";
import logofour from "../../images/PlatForms/ana-4.svg";
import logofive from "../../images/PlatForms/ana-5.svg";
import logosix from "../../images/PlatForms/ana-6.webp";

export default function PlatForms() {
  return (
    <>
      <div className="pt-24">
        <div>
          <h1 className="text-center text-3xl sm:text-4xl  sm:items-center md:text-5xl lg:text-5xl font-semibold leading-tight mb-10">
            Platforms supported
          </h1>
        </div>
        {/* Grid Layout for Logos */}
        <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-2 sm:gap-4 sm:p-5 sm:justify-center sm:place-items-center md:grid-cols-3 lg:grid-cols-6 lg:px-20">
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logoone}
              alt="Platform 1"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logotwo}
              alt="Platform 2"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logothree}
              alt="Platform 3"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logofour}
              alt="Platform 4"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logofive}
              alt="Platform 5"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <div className="rounded-lg flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logosix}
              alt="Platform 6"
              className="h-12  w-auto sm:h-16 md:h-16 lg:h-14"
            />
          </div>
        </div>
      </div>
    </>
  );
}
