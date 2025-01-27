import React from "react";
import multi from "../../../images/product/multi.webp";
import icon from "../../../images/icon/check.png";

export default function Multi() {
  return (
    <>
      <div className="pl-5 pr-5 z-10">
        <div className="flex flex-col-reverse md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="flex-1 sm:pr-6 mb-6 sm:mb-0  p-1 ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Elevate efficiency with Multi-App Kiosk
            </h1>
            <div className="">
              <div className="space-y-4 text-gray-700   ">
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Limit device access to approved apps, ensuring focus and
                  productivity.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  With default phone and settings app inclusion, reduce
                  distractions by providing users access to essential functions
                  only.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  With Hexnode's peripheral settings admins can allow necessary
                  device settings while retaining control.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Simplify device management while empowering user productivity
                  by deploying Multi-App Kiosk Mode.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center sm:justify-start  p-1">
            <img src={multi} alt="Single App Kiosk" className=" rounded-lg " />
          </div>
        </div>
      </div>
    </>
  );
}
